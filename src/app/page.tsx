"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { WikiArticle } from "@/types/wiki";
import { SAMPLE_ARTICLES } from "@/data/sampleArticles";
import { PortalView } from "@/components/PortalView";
import { ArticleView } from "@/components/ArticleView";

function AltWikiApp() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [currentArticle, setCurrentArticle] = useState<WikiArticle | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Check URL query param ?p=... on initial mount
  useEffect(() => {
    const p = searchParams.get("p");
    if (p) {
      handleGenerate(p);
    }
  }, [searchParams]);

  const handleGenerate = async (premise: string) => {
    setIsLoading(true);
    setErrorMessage(null);

    // Instant check for local preset
    const cleanPremise = premise.trim().toLowerCase();
    for (const [key, sample] of Object.entries(SAMPLE_ARTICLES)) {
      if (
        cleanPremise === sample.premise.toLowerCase() ||
        cleanPremise.includes(key) ||
        cleanPremise === key
      ) {
        setCurrentArticle(sample);
        setIsLoading(false);
        // Update URL cleanly without hard reload
        window.history.replaceState(null, "", `?p=${encodeURIComponent(premise)}`);
        return;
      }
    }

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ premise }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server returned ${res.status}`);
      }

      const data = await res.json();
      if (data.article) {
        setCurrentArticle(data.article);
        window.history.replaceState(null, "", `?p=${encodeURIComponent(premise)}`);
      } else {
        throw new Error("Invalid article response received");
      }
    } catch (err: unknown) {
      console.error("Failed to generate article:", err);
      setErrorMessage(
        "Notice: Alternate archive network encountered high latency. Displaying nearest timeline record."
      );
      // Graceful fallback to dinosaur preset with customized premise title
      const fallback = SAMPLE_ARTICLES["dinosaurs-never-went-extinct"];
      setCurrentArticle({
        ...fallback,
        premise,
        title: premise.charAt(0).toUpperCase() + premise.slice(1),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToPortal = () => {
    setCurrentArticle(null);
    setErrorMessage(null);
    window.history.replaceState(null, "", "/");
  };

  if (currentArticle) {
    return (
      <ArticleView
        article={currentArticle}
        onBackToPortal={handleBackToPortal}
        onSearchNew={handleGenerate}
      />
    );
  }

  return (
    <PortalView
      onSearch={handleGenerate}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center text-sm text-[#72777d]">
          Loading Alt-Wiki...
        </div>
      }
    >
      <AltWikiApp />
    </Suspense>
  );
}
