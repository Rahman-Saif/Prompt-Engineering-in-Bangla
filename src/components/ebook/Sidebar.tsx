import React, { useState } from "react";
import { PARTS, CHAPTERS } from "../../lib/chapters";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

interface SidebarProps {
  currentChapterSlug?: string;
  onClose?: () => void;
}

export function Sidebar({ currentChapterSlug, onClose }: SidebarProps) {
  const [expandedParts, setExpandedParts] = useState<Set<string>>(
    new Set(PARTS.map((p) => p.id))
  );

  const togglePart = (partId: string) => {
    const newExpanded = new Set(expandedParts);
    if (newExpanded.has(partId)) {
      newExpanded.delete(partId);
    } else {
      newExpanded.add(partId);
    }
    setExpandedParts(newExpanded);
  };

  return (
    <div className="h-full overflow-y-auto bg-gray-50 border-r border-gray-200 p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">📚 Prompt Engineering</h2>
        <p className="text-sm text-gray-600 mt-1">Master AI with Expert Prompts</p>
      </div>

      <nav className="space-y-2">
        {PARTS.map((part) => (
          <div key={part.id}>
            <button
              onClick={() => togglePart(part.id)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-left text-sm font-semibold text-gray-900"
            >
              <span>{part.title}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  expandedParts.has(part.id) ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedParts.has(part.id) && (
              <div className="pl-3 mt-1 space-y-1 border-l border-gray-300">
                {CHAPTERS.filter((ch) => ch.partId === part.id).map((chapter) => (
                  <Link
                    key={chapter.slug}
                    to={`/book/${chapter.slug}`}
                    className={`block px-3 py-2 rounded text-sm transition-colors ${
                      currentChapterSlug === chapter.slug
                        ? "bg-blue-500 text-white font-medium"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={onClose}
                  >
                    <span className="text-xs font-bold text-gray-500 mr-2">
                      {String(chapter.number).padStart(2, "0")}
                    </span>
                    {chapter.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-8 pt-4 border-t border-gray-300 text-xs text-gray-600">
        <p>📖 Total Chapters: {CHAPTERS.length}</p>
      </div>
    </div>
  );
}
