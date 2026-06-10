import React from "react";
import { CHAPTERS } from "../../lib/chapters";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ChapterNavigationProps {
  currentChapterNumber: number;
}

export function ChapterNavigation({ currentChapterNumber }: ChapterNavigationProps) {
  const previousChapter = CHAPTERS.find((ch) => ch.number === currentChapterNumber - 1);
  const nextChapter = CHAPTERS.find((ch) => ch.number === currentChapterNumber + 1);

  return (
    <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-gray-200">
      {previousChapter ? (
        <Link
          to={`/book/${previousChapter.slug}`}
          className="group flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
        >
          <ChevronLeft size={20} className="text-gray-600 group-hover:text-blue-600" />
          <div>
            <p className="text-xs text-gray-600">Previous Chapter</p>
            <p className="font-semibold text-gray-900 group-hover:text-blue-600">
              {previousChapter.title}
            </p>
          </div>
        </Link>
      ) : (
        <div></div>
      )}

      {nextChapter ? (
        <Link
          to={`/book/${nextChapter.slug}`}
          className="group flex items-center justify-end gap-2 p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-right"
        >
          <div>
            <p className="text-xs text-gray-600">Next Chapter</p>
            <p className="font-semibold text-gray-900 group-hover:text-blue-600">
              {nextChapter.title}
            </p>
          </div>
          <ChevronRight size={20} className="text-gray-600 group-hover:text-blue-600" />
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}
