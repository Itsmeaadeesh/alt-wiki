import { NextRequest, NextResponse } from "next/server";
import { generateWikiArticle } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const premise = body.premise?.trim();

    if (!premise || typeof premise !== "string") {
      return NextResponse.json(
        { error: "Premise is required" },
        { status: 400 }
      );
    }

    const article = await generateWikiArticle(premise);
    return NextResponse.json({ article });
  } catch (err: unknown) {
    console.error("API /api/generate error:", err);
    return NextResponse.json(
      { error: "Failed to generate article", details: (err as Error).message },
      { status: 500 }
    );
  }
}
