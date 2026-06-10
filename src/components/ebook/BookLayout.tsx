import React, { useState } from "react";
import { Chapter } from "../../lib/chapters";
import { Sidebar } from "./Sidebar";
import { TableOfContents } from "./TableOfContents";
import { ReadingProgressBar } from "./ReadingProgressBar";
import { ChapterNavigation } from "./ChapterNavigation";
import { BookSearch } from "./BookSearch";
import { Menu, X } from "lucide-react";

interface BookLayoutProps {
  chapter: Chapter;
  children: React.ReactNode;
}

export function BookLayout({ chapter, children }: BookLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState<string>();

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const contentArea = e.currentTarget;
    const headings = contentArea.querySelectorAll("h2, h3, h4");
    
    for (const heading of headings) {
      const rect = heading.getBoundingClientRect();
      if (rect.top > 0 && rect.top < 200) {
        setActiveHeadingId(heading.id);
        break;
      }
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div>
            <p className="text-sm text-gray-600">Chapter {chapter.number}</p>
            <h1 className="text-xl font-bold text-gray-900">{chapter.title}</h1>
          </div>
        </div>

        <BookSearch onClose={() => setSidebarOpen(false)} />
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-64 border-r border-gray-200 bg-gray-50">
          <Sidebar currentChapterSlug={chapter.slug} />
        </aside>

        {/* Sidebar - Mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="absolute left-0 top-0 w-64 h-full bg-white border-r border-gray-200 overflow-y-auto">
              <Sidebar
                currentChapterSlug={chapter.slug}
                onClose={() => setSidebarOpen(false)}
              />
            </aside>
          </div>
        )}

        {/* Main content area */}
        <main className="flex-1 flex overflow-hidden">
          {/* Content */}
          <div
            id="chapter-content"
            className="flex-1 overflow-y-auto"
            onScroll={handleScroll}
          >
            <ReadingProgressBar chapterSlug={chapter.slug} />

            <div className="max-w-3xl mx-auto px-6 py-8 lg:px-12">
              {/* Breadcrumb */}
              <div className="mb-6 text-sm text-gray-600">
                <span>📖 Prompt Engineering</span>
                <span className="mx-2">›</span>
                <span>Chapter {chapter.number}</span>
              </div>

              {/* Chapter content */}
              {children}

              {/* Navigation */}
              <ChapterNavigation currentChapterNumber={chapter.number} />
            </div>
          </div>

          {/* Table of Contents - Desktop */}
          <aside className="hidden xl:block w-64 border-l border-gray-200 bg-gray-50 p-6 overflow-y-auto">
            <TableOfContents chapter={chapter} activeHeadingId={activeHeadingId} />
          </aside>
        </main>
      </div>
    </div>
  );
}
