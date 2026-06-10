import React, { useEffect, useState } from "react";
import { Chapter } from "../../lib/chapters";

interface TableOfContentsProps {
  chapter: Chapter;
  activeHeadingId?: string;
}

export function TableOfContents({ chapter, activeHeadingId }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);

  useEffect(() => {
    // Extract headings from DOM
    const contentArea = document.getElementById("chapter-content");
    if (!contentArea) return;

    const headingElements = contentArea.querySelectorAll("h2, h3, h4");
    const extractedHeadings: Array<{ id: string; text: string; level: number }> = [];

    headingElements.forEach((el) => {
      const id = el.id || `heading-${extractedHeadings.length}`;
      if (!el.id) el.id = id;
      
      const level = parseInt(el.tagName[1]);
      extractedHeadings.push({
        id,
        text: el.textContent || "",
        level,
      });
    });

    setHeadings(extractedHeadings);
  }, [chapter]);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-4 w-64 h-fit bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="text-sm font-bold text-gray-900 mb-4">On this page</h3>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm transition-colors ${
              activeHeadingId === heading.id
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            } ${heading.level > 2 ? "ml-4" : ""}`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
