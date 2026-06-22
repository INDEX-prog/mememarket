"use client";

import { useState } from "react";
import Image from "next/image";

interface MemeItem {
  id: number;
  title: string;
  category: string;
  seed: string;
}

const memes: MemeItem[] = [
  { id: 1, title: "When the Q4 numbers hit", category: "Growth", seed: "q4-growth" },
  { id: 2, title: "Series A energy", category: "Funding", seed: "series-a" },
  { id: 3, title: "The pivot moment", category: "Strategy", seed: "pivot-moment" },
  { id: 4, title: "Runway calculator face", category: "Finance", seed: "runway-calc" },
  { id: 5, title: "Board meeting prep", category: "Meetings", seed: "board-prep" },
  { id: 6, title: "Market fit found", category: "Growth", seed: "pmf-found" },
  { id: 7, title: "Burn rate reality", category: "Finance", seed: "burn-rate" },
  { id: 8, title: "CAC vs LTV win", category: "Metrics", seed: "cac-ltv" },
];

const categories = ["All", "Growth", "Funding", "Finance", "Strategy", "Meetings", "Metrics"];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredMemes = activeCategory === "All"
    ? memes
    : memes.filter((meme) => meme.category === activeCategory);

  return (
    <section id="catalog" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-3">
              Browse the catalog
            </h2>
            <p className="text-muted max-w-prose">
              Curated memes for every investor presentation scenario.
            </p>
          </div>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  activeCategory === category
                    ? "bg-accent text-background font-medium"
                    : "bg-surface border border-border text-muted hover:text-foreground hover:border-accent/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Meme grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredMemes.map((meme) => (
            <div
              key={meme.id}
              className="group card overflow-hidden hover:border-accent/30 transition-colors"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${meme.seed}/400/400`}
                  alt={meme.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-accent text-background text-sm font-medium rounded-lg">
                    Preview
                  </span>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-accent font-medium uppercase tracking-wide">
                  {meme.category}
                </span>
                <h3 className="text-sm font-medium text-foreground mt-1 line-clamp-1">
                  {meme.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredMemes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-surface mx-auto flex items-center justify-center mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <p className="text-muted">No memes found in this category yet.</p>
          </div>
        )}

        {/* View all CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-muted mb-4">
            200+ memes available in the full library
          </p>
          <a href="#pricing" className="btn-primary inline-flex">
            Unlock Full Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
