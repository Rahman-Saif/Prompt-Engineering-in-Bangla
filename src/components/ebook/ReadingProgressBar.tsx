import React, { useEffect, useState } from "react";
import { readingProgressManager } from "../../lib/reading-progress";

interface ReadingProgressBarProps {
  chapterSlug: string;
}

export function ReadingProgressBar({ chapterSlug }: ReadingProgressBarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentArea = document.getElementById("chapter-content");
      if (!contentArea) return;

      const { scrollHeight, scrollTop, clientHeight } = contentArea;
      const totalScroll = scrollHeight - clientHeight;
      const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;

      setScrollProgress(Math.min(progress, 100));
      readingProgressManager.updateProgress(chapterSlug, progress);

      if (progress >= 95) {
        setIsCompleted(true);
      }
    };

    const contentArea = document.getElementById("chapter-content");
    contentArea?.addEventListener("scroll", handleScroll);

    return () => {
      contentArea?.removeEventListener("scroll", handleScroll);
    };
  }, [chapterSlug]);

  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex-1">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-blue-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
        <div className="ml-4 text-sm text-gray-600 min-w-fit">
          {Math.round(scrollProgress)}%
          {isCompleted && (
            <span className="ml-2 text-green-600 font-semibold">✓ Complete</span>
          )}
        </div>
      </div>
    </div>
  );
}
