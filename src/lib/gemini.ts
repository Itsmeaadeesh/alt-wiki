import { GoogleGenAI } from "@google/genai";
import { WikiArticle } from "@/types/wiki";
import { SAMPLE_ARTICLES } from "@/data/sampleArticles";

const apiKey = process.env.GEMINI_API_KEY || "";

export async function generateWikiArticle(premise: string): Promise<WikiArticle> {
  const cleanPremise = premise.trim().toLowerCase();

  // Instant match for pre-built high-quality presets
  for (const [key, article] of Object.entries(SAMPLE_ARTICLES)) {
    if (
      cleanPremise === article.premise.toLowerCase() ||
      cleanPremise.includes(key) ||
      cleanPremise === key
    ) {
      return article;
    }
  }

  if (!apiKey) {
    console.warn("GEMINI_API_KEY not configured. Falling back to default preset.");
    return SAMPLE_ARTICLES["dinosaurs-never-went-extinct"];
  }

  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `You are the Senior Editor-in-Chief of an alternate universe's English Wikipedia (en.wikipedia.org).
Your responsibility is to generate an authoritative, completely convincing, pixel-perfect fake Wikipedia article about the given alternate-history or alternate-reality premise.

CRITICAL TONE AND STYLE GUIDELINES:
1. NEUTRAL POINT OF VIEW (NPOV): Write in genuine encyclopedic Wikipedia tone—neutral, dry, formal, matter-of-fact, academic, and sober.
2. ABSOLUTE CONVICTION: Treat the premise as completely real, settled, historical or scientific fact. NEVER break character. NEVER use meta-commentary like "In this alternate timeline...", "What if...", "Hypothetically...", "In science fiction...", or "In this reality...".
3. TERMINOLOGY & DETAIL: Use rigorous academic, technical, historical, and Latinate biological/engineering jargon.
4. ARTICLE LEAD: The first paragraph MUST begin by defining the subject, with the title bolded (you can format it or we bold the first mention), explaining when it occurred/evolved, its significance, and scope.
5. CITATIONS: In the text of the lead and sections, embed reference numbers like [1], [2], [3] smoothly at the end of factual assertions. Provide 5 to 8 corresponding realistic, academic-format references in the 'references' array (author, year, book/journal in quotes/italics, pages, publisher/DOI).
6. INFOBOX: Provide 6 to 8 realistic, topic-appropriate key-value fields with a descriptive image caption. Choose an imageType from: "history", "specimen", "device", "geography", "event", "portrait".
7. SECTIONS: Generate 4 to 6 detailed sections with numbered hierarchical structure (e.g., 1 Background, 1.1 Precursor events, 2 Expansion, 3 Impact, 4 Controversies).
8. WORD COUNT: The article should be comprehensive and realistic (800 to 1,400 words total across lead and sections).
9. CATEGORIES: Include 4 to 6 plausible Wikipedia categories.

Output MUST be strictly valid JSON matching this JSON schema:
{
  "title": "Main Article Title",
  "subtitle": "Brief subtitle or classification phrase",
  "hatnote": "This article is about [X]. For other uses, see [Y] (disambiguation).",
  "infobox": {
    "title": "Infobox Title",
    "subtitle": "Subheading or dates",
    "imageType": "history",
    "imageCaption": "Detailed archival photograph or specimen caption describing the scene, year, and location.",
    "fields": [
      { "label": "Label 1", "value": "Value 1" }
    ]
  },
  "toc": [
    { "id": "section-slug", "number": "1", "title": "Section Title", "level": 1 }
  ],
  "leadParagraphs": [
    "Paragraph 1 with citation marks [1]...",
    "Paragraph 2 with citation marks [2]..."
  ],
  "sections": [
    {
      "id": "section-slug",
      "number": "1",
      "title": "Section Title",
      "level": 1,
      "paragraphs": [
        "Paragraph under section with citations [3]..."
      ]
    }
  ],
  "seeAlso": [
    "Related Topic 1",
    "Related Topic 2",
    "Related Topic 3"
  ],
  "references": [
    {
      "id": 1,
      "text": "Smith, J. A. (1984). 'Imperial Thermodynamics'. Journal of Ancient Technology. 42 (3): 104–119. doi:10.1016/j.at.1984.02.001."
    }
  ],
  "categories": [
    "Category 1",
    "Category 2"
  ],
  "lastEdited": {
    "date": "18 August 2026",
    "username": "BelievableWikiEditorName"
  }
}`;

  try {
    let rawText = "";
    const candidateModels = ["gemini-3.6-flash", "gemini-2.5-flash", "gemini-3.5-flash", "gemini-flash-latest"];
    
    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: `Premise: "${premise}"\n\nWrite a complete, authentic Wikipedia article as specified.`,
          config: {
            systemInstruction,
            responseMimeType: "application/json",
            temperature: 0.7,
          },
        });
        if (response.text) {
          rawText = response.text;
          break;
        }
      } catch (err: unknown) {
        console.warn(`Model ${modelName} encountered error, trying fallback...`, (err as Error).message?.slice(0, 120));
      }
    }

    if (!rawText) {
      throw new Error("All candidate Gemini models failed or experienced spikes.");
    }
    const parsed = JSON.parse(rawText) as WikiArticle;
    parsed.premise = premise;
    parsed.id = premise.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 50);

    // Safety checks on parsed structure
    if (!parsed.title) parsed.title = premise;
    if (!parsed.infobox || !parsed.infobox.fields) {
      parsed.infobox = {
        title: parsed.title,
        fields: [{ label: "Status", value: "Documented historical occurrence" }],
      };
    }
    if (!parsed.leadParagraphs || parsed.leadParagraphs.length === 0) {
      parsed.leadParagraphs = [
        `${parsed.title} is an established phenomenon originating from ${premise} [1].`
      ];
    }
    if (!parsed.sections) parsed.sections = [];
    if (!parsed.references) parsed.references = [];
    if (!parsed.categories) parsed.categories = ["Alternate history"];
    if (!parsed.lastEdited) {
      parsed.lastEdited = {
        date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
        username: "WikiArchivist_" + Math.floor(100 + Math.random() * 900),
      };
    }

    return parsed;
  } catch (error) {
    console.error("Gemini article generation failed:", error);
    // Return graceful fallback matching closest concept or first sample
    const fallback = SAMPLE_ARTICLES["dinosaurs-never-went-extinct"];
    return {
      ...fallback,
      premise,
      title: `${premise.charAt(0).toUpperCase() + premise.slice(1)} (Alternate Record)`,
      leadParagraphs: [
        `According to records compiled in the alternate chronology, ${premise} resulted in fundamental shifts across biological, industrial, and social systems [1]. While mainstream uniformitarianism previously debated the feasibility of such developments, contemporary consensus acknowledges the widespread permanence of this trajectory [2].`,
        ...fallback.leadParagraphs.slice(1)
      ]
    };
  }
}
