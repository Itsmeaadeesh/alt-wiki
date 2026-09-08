"use client";

import React, { useState } from "react";
import { WikipediaGlobeLogo } from "./WikipediaGlobeLogo";
import { Search, Sparkles, Globe, Compass, BookOpen, Clock, AlertCircle } from "lucide-react";

interface PortalViewProps {
  onSearch: (premise: string) => void;
  isLoading: boolean;
  errorMessage?: string | null;
}

const EXAMPLE_PREMISES = [
  {
    title: "Dinosaurs never went extinct",
    category: "Paleontology & Domestication",
    stats: "1.8B specimens • 66 Ma to present",
    icon: "🦖"
  },
  {
    title: "The Roman Empire industrialized in 100 AD",
    category: "Antiquity & Steam Power",
    stats: "Trajan Steam Triremes • 104 AD",
    icon: "🏛️"
  },
  {
    title: "The Babbage mechanical internet of 1842",
    category: "Victorian Cybernetics",
    stats: "Analytical Cog Grid • 140 cards/min",
    icon: "⚙️"
  },
  {
    title: "The Pacific Ocean is solid glass",
    category: "Geology & Trade Caravans",
    stats: "64M sq miles • Obsidian Basin",
    icon: "🌊"
  },
  {
    title: "Nikola Tesla perfected wireless power transmission worldwide",
    category: "Electromagnetism & Cities",
    stats: "Wardenclyffe Stratosphere Grid",
    icon: "⚡"
  },
  {
    title: "The Soviet Union landed on the Moon first in 1968",
    category: "Space Exploration & Cold War",
    stats: "Lunokhod Permanent Colony 1",
    icon: "🌙"
  }
];

export const PortalView: React.FC<PortalViewProps> = ({
  onSearch,
  isLoading,
  errorMessage,
}) => {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim() && !isLoading) {
      onSearch(inputVal.trim());
    }
  };

  const handleSelectExample = (premise: string) => {
    setInputVal(premise);
    if (!isLoading) {
      onSearch(premise);
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#202122] flex flex-col items-center justify-between px-4 py-8 select-text">
      {/* Top subtle bar */}
      <header className="w-full max-w-5xl flex items-center justify-between text-[13px] text-[#54595d] pb-6">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#72777d]" />
          <span>Multiversal English Portal</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-[#0645ad] cursor-pointer">Log in</span>
          <span>•</span>
          <span className="hover:text-[#0645ad] cursor-pointer">About Alt-Wiki</span>
        </div>
      </header>

      {/* Center Portal Content */}
      <main className="flex-1 flex flex-col items-center justify-center max-w-4xl w-full my-4">
        {/* Iconic Logo Area */}
        <div className="flex flex-col items-center mb-6">
          <div className="transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
            <WikipediaGlobeLogo size={180} />
          </div>

          {/* Authentic Wordmark styling */}
          <h1 className="mt-4 font-wiki-serif text-[42px] tracking-[0.06em] text-[#000000] font-normal leading-none select-none flex items-baseline">
            WIKIPEDIA
          </h1>
          <p className="font-wiki-serif italic text-[15px] text-[#54595d] tracking-wider mt-1.5 select-none">
            The Alternate Encyclopedia
          </p>
          <div className="text-[11.5px] text-[#72777d] mt-1 font-sans tracking-wide">
            6,840,000+ alternate timelines documented
          </div>
        </div>

        {/* Central Search Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-xl relative mb-4">
          <div className="relative flex items-center shadow-sm">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="What if... (e.g., 'dinosaurs never went extinct')"
              disabled={isLoading}
              className="w-full h-12 pl-5 pr-14 text-[15px] bg-[#ffffff] text-[#202122] placeholder:text-[#72777d] border border-[#a2a9b1] rounded-full focus:outline-none focus:border-[#3366cc] focus:ring-1 focus:ring-[#3366cc] transition-all disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isLoading}
              className="absolute right-1.5 h-9 px-4 bg-[#3366cc] hover:bg-[#2a4b8d] active:bg-[#223a6e] text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              title="Generate Alternate Wikipedia Article"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
            </button>
          </div>

          {isLoading && (
            <div className="mt-4 flex flex-col items-center text-center space-y-1 text-[13px] text-[#54595d] animate-pulse">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#3366cc] animate-spin" />
                <span className="font-medium text-[#202122]">Consulting Alternate Reality Archives...</span>
              </div>
              <p className="text-[11.5px] text-[#72777d]">
                Compiling encyclopedic lead, peer-reviewed citations, right-floated infobox, and timeline records.
              </p>
            </div>
          )}

          {errorMessage && (
            <div className="mt-3 flex items-center gap-2 text-[12.5px] text-[#b32424] bg-[#fee7e7] p-2.5 rounded border border-[#e07f7f]">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </form>

        {/* Repurposed "Language links" surrounding the globe as quick-start premises */}
        <div className="w-full max-w-2xl mt-4">
          <div className="text-center text-[12px] text-[#72777d] uppercase tracking-wider mb-3 font-semibold">
            Select an Alternate Timeline to Explore
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {EXAMPLE_PREMISES.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectExample(item.title)}
                disabled={isLoading}
                className="text-left p-3 rounded border border-[#eaecf0] hover:border-[#a2a9b1] hover:bg-[#f8f9fa] bg-white transition-all group cursor-pointer flex flex-col justify-between"
              >
                <div className="flex items-start gap-2">
                  <span className="text-base select-none">{item.icon}</span>
                  <div>
                    <div className="font-wiki-serif text-[14px] text-[#0645ad] group-hover:underline font-medium leading-snug">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#72777d] mt-0.5">
                      {item.category}
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-[#a2a9b1] mt-2 text-right">
                  {item.stats}
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Wikipedia Portal Footer */}
      <footer className="w-full max-w-4xl border-t border-[#eaecf0] pt-6 mt-8 text-center text-[12px] text-[#72777d]">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-3">
          <span className="flex items-center gap-1 hover:text-[#0645ad] cursor-pointer">
            <BookOpen className="w-3.5 h-3.5" /> Wiktionary
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 hover:text-[#0645ad] cursor-pointer">
            <Compass className="w-3.5 h-3.5" /> Wikivoyage
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 hover:text-[#0645ad] cursor-pointer">
            <Clock className="w-3.5 h-3.5" /> ChronoMedia
          </span>
        </div>
        <p className="text-[11px] leading-relaxed max-w-2xl mx-auto">
          Alt-Wiki is an AI-powered portal recreating the encyclopedia of unrecorded branches. All articles adhere strictly to neutral encyclopedic standards under the Creative Multiverse License.
        </p>
      </footer>
    </div>
  );
};
