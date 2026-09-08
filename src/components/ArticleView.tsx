"use client";

import React, { useState, useRef } from "react";
import { WikiArticle } from "@/types/wiki";
import { WikipediaGlobeLogo } from "./WikipediaGlobeLogo";
import { InfoboxIllustration } from "./InfoboxIllustration";
import {
  Search,
  Share2,
  Download,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Check,
  ExternalLink,
  Menu,
  User,
  History,
  Edit3,
  Bookmark,
  FileText
} from "lucide-react";
import { toPng } from "html-to-image";

interface ArticleViewProps {
  article: WikiArticle;
  onBackToPortal: () => void;
  onSearchNew: (premise: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBackToPortal,
  onSearchNew,
}) => {
  const [tocCollapsed, setTocCollapsed] = useState(false);
  const [topSearch, setTopSearch] = useState("");
  const [copiedToast, setCopiedToast] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const articleContentRef = useRef<HTMLDivElement>(null);

  const handleTopSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (topSearch.trim()) {
      onSearchNew(topSearch.trim());
    }
  };

  const handleCopyShareLink = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("p", article.premise);
    navigator.clipboard.writeText(url.toString()).then(() => {
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3000);
    });
  };

  const handleExportImage = async () => {
    if (!articleContentRef.current) return;
    try {
      setIsExporting(true);
      // Brief pause to ensure rendering stability
      await new Promise((r) => setTimeout(r, 150));

      const dataUrl = await toPng(articleContentRef.current, {
        backgroundColor: "#ffffff",
        quality: 0.98,
        pixelRatio: 2, // crisp retina quality
      });

      const safeName = (article.title || "article")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_");
      const link = document.createElement("a");
      link.download = `AltWiki_${safeName}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Image export failed:", err);
      alert("Could not export image. You can take a standard browser screenshot.");
    } finally {
      setIsExporting(false);
    }
  };

  // Format paragraphs: detect [1], [2] citation brackets and convert them to interactive links
  const renderParagraphWithCitations = (text: string, isFirstLeadPara = false) => {
    // If it's the first paragraph, ensure the article title is bolded on first mention
    let processedText = text;
    if (isFirstLeadPara && article.title) {
      const regex = new RegExp(`(${article.title.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")})`, "i");
      // If text doesn't already contain <b> or <strong> tags, we split by the title
      if (!processedText.includes("<b>") && !processedText.includes("<strong>")) {
        const parts = processedText.split(regex);
        if (parts.length > 1) {
          return (
            <span>
              {parts.map((part, i) => {
                if (i === 1) {
                  return (
                    <strong key={i} className="font-bold text-[#000000]">
                      {part}
                    </strong>
                  );
                }
                return renderTextWithCitations(part);
              })}
            </span>
          );
        }
      }
    }

    return renderTextWithCitations(processedText);
  };

  const renderTextWithCitations = (str: string) => {
    // Match citation patterns like [1], [2], [1, 2]
    const citationRegex = /\[(\d+)\]/g;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = citationRegex.exec(str)) !== null) {
      if (match.index > lastIndex) {
        elements.push(str.substring(lastIndex, match.index));
      }
      const citeId = parseInt(match[1], 10);
      elements.push(
        <sup key={`${citeId}-${match.index}`} className="align-super text-[11px] select-none">
          <a
            href={`#cite_note-${citeId}`}
            className="wiki-link px-0.5"
            title={`Jump to citation [${citeId}]`}
          >
            [{citeId}]
          </a>
        </sup>
      );
      lastIndex = citationRegex.lastIndex;
    }

    if (lastIndex < str.length) {
      elements.push(str.substring(lastIndex));
    }

    return <>{elements}</>;
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#202122] flex flex-col font-sans">
      {/* Real Wikipedia Top Navigation Header */}
      <header className="w-full bg-[#ffffff] border-b border-[#a2a9b1] px-4 py-2 sticky top-0 z-40 shadow-xs">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          {/* Left: Mobile hamburger & Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-1.5 hover:bg-[#f8f9fa] rounded cursor-pointer"
              title="Toggle Wikipedia Navigation"
            >
              <Menu className="w-5 h-5 text-[#54595d]" />
            </button>

            <div
              onClick={onBackToPortal}
              className="flex items-center gap-2 cursor-pointer group"
              title="Back to Alt-Wiki Portal"
            >
              <WikipediaGlobeLogo size={36} />
              <div className="flex flex-col">
                <span className="font-wiki-serif text-[18px] tracking-[0.06em] font-normal leading-none text-[#000000] group-hover:text-[#0645ad]">
                  WIKIPEDIA
                </span>
                <span className="text-[9px] text-[#54595d] tracking-wider leading-none mt-0.5">
                  The Alternate Encyclopedia
                </span>
              </div>
            </div>
          </div>

          {/* Center: Search input */}
          <form
            onSubmit={handleTopSearch}
            className="flex-1 max-w-md hidden sm:flex items-center relative"
          >
            <input
              type="text"
              value={topSearch}
              onChange={(e) => setTopSearch(e.target.value)}
              placeholder="Search alternate Wikipedia..."
              className="w-full h-8 pl-3 pr-8 text-[13px] bg-[#ffffff] text-[#202122] border border-[#a2a9b1] rounded-[2px] focus:outline-none focus:border-[#3366cc] focus:ring-1 focus:ring-[#3366cc]"
            />
            <button
              type="submit"
              className="absolute right-1 text-[#54595d] hover:text-[#0645ad] p-1 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Right: Actions and User links */}
          <div className="flex items-center gap-2 text-[12px] text-[#54595d]">
            <button
              type="button"
              onClick={handleCopyShareLink}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#a2a9b1] hover:bg-[#f8f9fa] text-[#202122] font-medium transition-colors cursor-pointer"
              title="Copy shareable URL"
            >
              {copiedToast ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#0645ad]" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleExportImage}
              disabled={isExporting}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#3366cc] hover:bg-[#2a4b8d] text-white font-medium transition-colors cursor-pointer disabled:opacity-50"
              title="Export pixel-perfect image of article"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isExporting ? "Capturing..." : "Export Image"}</span>
            </button>

            <button
              type="button"
              onClick={onBackToPortal}
              className="hidden md:flex items-center gap-1 text-[#0645ad] hover:underline px-2 py-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>New Premise</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Wrapper with Left Sidebar & Article Content */}
      <div className="flex-1 flex max-w-[1440px] w-full mx-auto">
        {/* Left Sidebar (Desktop Vector style) */}
        <aside
          className={`
            fixed lg:static top-[52px] bottom-0 left-0 z-30
            w-52 bg-[#ffffff] border-r border-[#eaecf0] p-4 text-[12px]
            overflow-y-auto transform transition-transform duration-200 ease-in-out
            ${sidebarOpen ? "translate-x-0 shadow-lg" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          <div className="space-y-4">
            <div>
              <div className="text-[11px] font-bold text-[#54595d] uppercase tracking-wider mb-1.5 border-b border-[#eaecf0] pb-1">
                Navigation
              </div>
              <ul className="space-y-1.5">
                <li>
                  <button
                    onClick={onBackToPortal}
                    className="wiki-link text-left w-full hover:underline block"
                  >
                    Main page (Portal)
                  </button>
                </li>
                <li>
                  <a href="#contents" className="wiki-link block hover:underline">
                    Contents
                  </a>
                </li>
                <li>
                  <span className="text-[#54595d] hover:text-[#0645ad] cursor-pointer block">
                    Current events
                  </span>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const keys = [
                        "The Roman Empire industrialized in 100 AD",
                        "The Babbage mechanical internet of 1842",
                        "Dinosaurs never went extinct",
                        "The Pacific Ocean is solid glass"
                      ];
                      const random = keys[Math.floor(Math.random() * keys.length)];
                      onSearchNew(random);
                    }}
                    className="wiki-link text-left w-full hover:underline block"
                  >
                    Random alternate article
                  </button>
                </li>
                <li>
                  <span className="text-[#54595d] hover:text-[#0645ad] cursor-pointer block">
                    About Alt-Wiki
                  </span>
                </li>
                <li>
                  <span className="text-[#54595d] hover:text-[#0645ad] cursor-pointer block">
                    Contact us
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-[11px] font-bold text-[#54595d] uppercase tracking-wider mb-1.5 border-b border-[#eaecf0] pb-1">
                Contribute
              </div>
              <ul className="space-y-1.5 text-[#54595d]">
                <li className="hover:text-[#0645ad] cursor-pointer">Help</li>
                <li className="hover:text-[#0645ad] cursor-pointer">Learn to edit</li>
                <li className="hover:text-[#0645ad] cursor-pointer">Community portal</li>
                <li className="hover:text-[#0645ad] cursor-pointer">Recent changes</li>
                <li className="hover:text-[#0645ad] cursor-pointer">Upload file</li>
              </ul>
            </div>

            <div>
              <div className="text-[11px] font-bold text-[#54595d] uppercase tracking-wider mb-1.5 border-b border-[#eaecf0] pb-1">
                Tools
              </div>
              <ul className="space-y-1.5 text-[#54595d]">
                <li className="hover:text-[#0645ad] cursor-pointer">What links here</li>
                <li className="hover:text-[#0645ad] cursor-pointer">Related changes</li>
                <li className="hover:text-[#0645ad] cursor-pointer">Special pages</li>
                <li className="hover:text-[#0645ad] cursor-pointer">Permanent link</li>
                <li className="hover:text-[#0645ad] cursor-pointer">Page information</li>
                <li className="hover:text-[#0645ad] cursor-pointer">Cite this page</li>
              </ul>
            </div>

            <div>
              <div className="text-[11px] font-bold text-[#54595d] uppercase tracking-wider mb-1.5 border-b border-[#eaecf0] pb-1">
                Print/export
              </div>
              <ul className="space-y-1.5">
                <li>
                  <button
                    onClick={handleExportImage}
                    className="wiki-link text-left w-full hover:underline block"
                  >
                    Download as Image
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.print()}
                    className="wiki-link text-left w-full hover:underline block"
                  >
                    Printable version
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile sidebar */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          />
        )}

        {/* Right Area: Article Viewport */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 py-4 bg-[#ffffff]">
          {/* Real Wikipedia Tab Bar */}
          <div className="flex items-center justify-between border-b border-[#a2a9b1] mb-4 text-[13px]">
            {/* Left Tabs: Article & Talk */}
            <div className="flex items-center -mb-[1px]">
              <div className="border-b-[3px] border-[#3366cc] text-[#202122] font-semibold px-3.5 py-1.5 cursor-default bg-white">
                Article
              </div>
              <div className="text-[#0645ad] hover:underline px-3.5 py-1.5 cursor-pointer">
                Talk
              </div>
            </div>

            {/* Right Tabs: Read, Edit, View history */}
            <div className="flex items-center -mb-[1px] text-[#0645ad]">
              <div className="border-b-[3px] border-[#3366cc] text-[#202122] font-semibold px-3 py-1.5 cursor-default bg-white">
                Read
              </div>
              <div
                onClick={() => {
                  const newPremise = prompt("Edit the premise to regenerate:", article.premise);
                  if (newPremise && newPremise.trim()) {
                    onSearchNew(newPremise.trim());
                  }
                }}
                className="hover:underline px-3 py-1.5 cursor-pointer flex items-center gap-1"
                title="Edit this premise"
              >
                <span>Edit</span>
              </div>
              <div
                onClick={handleCopyShareLink}
                className="hover:underline px-3 py-1.5 cursor-pointer hidden sm:block"
              >
                View history
              </div>
            </div>
          </div>

          {/* Screenshot capture container */}
          <div ref={articleContentRef} className="bg-white p-2 sm:p-4">
            {/* Article Main Title */}
            <h1 className="text-[28px] sm:text-[32px] font-normal font-wiki-serif border-b border-[#a2a9b1] pb-1 mb-1 text-[#000000] leading-tight">
              {article.title}
            </h1>

            {/* Tagline & Hatnote */}
            <div className="text-[12px] text-[#54595d] mb-2 font-sans select-none">
              From Wikipedia, the free encyclopedia
            </div>

            {article.hatnote && (
              <div className="italic text-[12.5px] text-[#202122] mb-4 pl-3 border-l-2 border-[#a2a9b1] bg-[#fdfdfd] py-0.5">
                {article.hatnote}
              </div>
            )}

            {/* Float Container: Clearfix */}
            <div className="flow-root">
              {/* Right-Floated Wikipedia Infobox */}
              {article.infobox && (
                <aside
                  aria-label="Infobox"
                  className="wiki-infobox float-none sm:float-right sm:ml-5 mb-4 w-full sm:w-[320px] shadow-xs text-[12.5px] select-text"
                >
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th
                          colSpan={2}
                          className="bg-[#b0c4de] text-[#000000] font-sans font-bold text-[14px] p-2 text-center border-b border-[#a2a9b1]"
                        >
                          {article.infobox.title}
                        </th>
                      </tr>
                      {article.infobox.subtitle && (
                        <tr>
                          <th
                            colSpan={2}
                            className="bg-[#e4ecf7] text-[#333d4b] font-sans font-normal italic text-[12px] py-1 px-2 text-center border-b border-[#a2a9b1]"
                          >
                            {article.infobox.subtitle}
                          </th>
                        </tr>
                      )}
                    </thead>
                    <tbody>
                      {/* Infobox Illustration area */}
                      <tr>
                        <td colSpan={2} className="p-2 text-center border-b border-[#eaecf0]">
                          <InfoboxIllustration
                            type={article.infobox.imageType}
                            title={article.infobox.title}
                          />
                          {article.infobox.imageCaption && (
                            <div className="text-[11px] leading-snug text-[#333333] mt-1.5 text-center italic px-1">
                              {article.infobox.imageCaption}
                            </div>
                          )}
                        </td>
                      </tr>

                      {/* Infobox Key-Value Fields */}
                      {article.infobox.fields?.map((field, idx) => (
                        <tr key={idx} className="border-b border-[#eaecf0] hover:bg-[#f1f3f5]">
                          <th
                            scope="row"
                            className="bg-transparent text-left font-bold text-[#202122] p-1.5 pl-2 align-top w-[42%] text-[12px] border-none"
                          >
                            {field.label}
                          </th>
                          <td className="p-1.5 pr-2 align-top text-[#202122] text-[12px]">
                            {field.isLink ? (
                              <span className="wiki-link">{field.value}</span>
                            ) : (
                              field.value
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </aside>
              )}

              {/* Lead Paragraphs */}
              <div className="text-[14px] sm:text-[14.5px] leading-[1.65] text-[#202122] space-y-3.5 mb-6">
                {article.leadParagraphs?.map((para, idx) => (
                  <p key={idx} className="text-justify">
                    {renderParagraphWithCitations(para, idx === 0)}
                  </p>
                ))}
              </div>

              {/* Table of Contents (TOC) */}
              {article.toc && article.toc.length > 0 && (
                <nav
                  id="contents"
                  aria-label="Table of contents"
                  className="wiki-toc my-4 inline-block w-full sm:w-auto min-w-[240px] max-w-sm rounded-[2px]"
                >
                  <div className="flex items-center justify-between gap-4 border-b border-[#eaecf0] pb-1.5 mb-1.5 font-sans">
                    <span className="font-bold text-[13px] text-[#000000]">Contents</span>
                    <button
                      type="button"
                      onClick={() => setTocCollapsed(!tocCollapsed)}
                      className="text-[11.5px] text-[#0645ad] hover:underline cursor-pointer flex items-center gap-0.5"
                    >
                      [{tocCollapsed ? "show" : "hide"}]
                    </button>
                  </div>

                  {!tocCollapsed && (
                    <ol className="space-y-1 text-[12.5px]">
                      {article.toc.map((item, idx) => (
                        <li
                          key={idx}
                          style={{ paddingLeft: item.level > 1 ? `${(item.level - 1) * 14}px` : "0px" }}
                        >
                          <a
                            href={`#${item.id}`}
                            className="wiki-link hover:underline inline-flex items-baseline gap-1.5"
                          >
                            <span className="text-[#54595d] text-[11px] font-mono select-none">
                              {item.number}
                            </span>
                            <span>{item.title}</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  )}
                </nav>
              )}

              {/* Numbered Sections */}
              <div className="space-y-6 mt-4">
                {article.sections?.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-14">
                    {section.level === 1 ? (
                      <h2 className="wiki-heading text-[20px] sm:text-[22px] font-normal pt-4 pb-1 mb-2.5 flex items-baseline justify-between">
                        <span>
                          <span className="font-mono text-[#54595d] text-[16px] mr-2">
                            {section.number}
                          </span>
                          {section.title}
                        </span>
                        <span className="text-[12px] font-sans font-normal text-[#0645ad] hover:underline cursor-pointer select-none">
                          [edit]
                        </span>
                      </h2>
                    ) : (
                      <h3 className="font-wiki-serif font-bold text-[16px] sm:text-[17px] text-[#000000] pt-2 pb-1 mb-2 flex items-baseline justify-between border-b border-[#eaecf0]">
                        <span>
                          <span className="font-mono text-[#54595d] text-[13px] mr-1.5">
                            {section.number}
                          </span>
                          {section.title}
                        </span>
                        <span className="text-[11.5px] font-sans font-normal text-[#0645ad] hover:underline cursor-pointer select-none">
                          [edit]
                        </span>
                      </h3>
                    )}

                    <div className="text-[14px] leading-[1.65] text-[#202122] space-y-3">
                      {section.paragraphs?.map((para, pIdx) => (
                        <p key={pIdx} className="text-justify">
                          {renderParagraphWithCitations(para)}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* See Also Section */}
              {article.seeAlso && article.seeAlso.length > 0 && (
                <section id="see-also" className="mt-8 scroll-mt-14">
                  <h2 className="wiki-heading text-[20px] sm:text-[22px] font-normal pt-2 pb-1 mb-2.5 flex items-baseline justify-between">
                    <span>See also</span>
                    <span className="text-[12px] font-sans font-normal text-[#0645ad] hover:underline cursor-pointer select-none">
                      [edit]
                    </span>
                  </h2>
                  <ul className="list-disc pl-5 text-[13.5px] space-y-1">
                    {article.seeAlso.map((item, idx) => (
                      <li key={idx}>
                        <span
                          onClick={() => onSearchNew(item)}
                          className="wiki-link hover:underline cursor-pointer"
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* References Section */}
              {article.references && article.references.length > 0 && (
                <section id="references" className="mt-8 scroll-mt-14">
                  <h2 className="wiki-heading text-[20px] sm:text-[22px] font-normal pt-2 pb-1 mb-2.5 flex items-baseline justify-between">
                    <span>References</span>
                    <span className="text-[12px] font-sans font-normal text-[#0645ad] hover:underline cursor-pointer select-none">
                      [edit]
                    </span>
                  </h2>
                  <ol className="list-decimal pl-6 text-[12px] text-[#202122] space-y-1.5 font-sans leading-relaxed">
                    {article.references.map((ref) => (
                      <li key={ref.id} id={`cite_note-${ref.id}`} className="scroll-mt-16 target:bg-[#fff9db] p-0.5 rounded">
                        <span className="text-[#0645ad] font-bold mr-1 cursor-pointer select-none">
                          ^
                        </span>{" "}
                        <span className="text-[#202122]">{ref.text}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* Categories Strip */}
              {article.categories && article.categories.length > 0 && (
                <div className="mt-8 border border-[#a2a9b1] bg-[#f8f9fa] p-2 sm:p-2.5 text-[12px] rounded-[1px]">
                  <span className="text-[#54595d] font-bold mr-2">Categories:</span>
                  <span className="space-x-2">
                    {article.categories.map((cat, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && <span className="text-[#a2a9b1]">|</span>}
                        <span
                          onClick={() => onSearchNew(`Alternate reality categories: ${cat}`)}
                          className="wiki-link hover:underline cursor-pointer"
                        >
                          {cat}
                        </span>
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Revision & Copyright Boilerplate */}
            <footer className="border-t border-[#eaecf0] pt-4 mt-6 text-[12px] text-[#54595d] space-y-1 select-none">
              <div>
                This page was last edited on {article.lastEdited?.date || "18 August 2026"}, by user{" "}
                <span className="wiki-link font-medium">{article.lastEdited?.username || "WikiArchivist_404"}</span>.
              </div>
              <div className="text-[11px] leading-relaxed text-[#72777d]">
                Text is available under the Creative Multiverse Attribution-ShareAlike License 4.0; additional terms may apply. By using this site, you agree to the Terms of Temporal Use and Privacy Policy. Wikipedia® is a registered trademark of the Alt-Media Foundation, Inc.
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};
