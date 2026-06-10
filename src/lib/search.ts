import { CHAPTERS, Chapter } from "./chapters";
import { extractSearchableContent } from "./content-loader";

export interface SearchResult {
  chapterNumber: number;
  chapterTitle: string;
  chapterSlug: string;
  excerpt: string;
  matchType: "title" | "heading" | "content";
  relevance: number;
}

export function searchChapters(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase();
  const results: SearchResult[] = [];
  const seen = new Set<string>();

  CHAPTERS.forEach((chapter) => {
    // Search in title
    if (chapter.title.toLowerCase().includes(normalizedQuery)) {
      const key = `${chapter.slug}-title`;
      if (!seen.has(key)) {
        results.push({
          chapterNumber: chapter.number,
          chapterTitle: chapter.title,
          chapterSlug: chapter.slug,
          excerpt: chapter.summary,
          matchType: "title",
          relevance: 3,
        });
        seen.add(key);
      }
    }

    // Search in summary
    if (chapter.summary.toLowerCase().includes(normalizedQuery)) {
      const key = `${chapter.slug}-summary`;
      if (!seen.has(key)) {
        results.push({
          chapterNumber: chapter.number,
          chapterTitle: chapter.title,
          chapterSlug: chapter.slug,
          excerpt: chapter.summary,
          matchType: "content",
          relevance: 2,
        });
        seen.add(key);
      }
    }

    // Search in content blocks
    if (chapter.content) {
      chapter.content.forEach((block) => {
        if (block.type === "h2" && block.text?.toLowerCase().includes(normalizedQuery)) {
          const key = `${chapter.slug}-${block.text}`;
          if (!seen.has(key)) {
            results.push({
              chapterNumber: chapter.number,
              chapterTitle: chapter.title,
              chapterSlug: chapter.slug,
              excerpt: `${block.text}`,
              matchType: "heading",
              relevance: 2.5,
            });
            seen.add(key);
          }
        }
        
        if (block.type === "p" && block.text?.toLowerCase().includes(normalizedQuery)) {
          const key = `${chapter.slug}-${block.text?.substring(0, 50)}`;
          if (!seen.has(key)) {
            const excerpt = block.text.substring(0, 150) + (block.text.length > 150 ? "..." : "");
            results.push({
              chapterNumber: chapter.number,
              chapterTitle: chapter.title,
              chapterSlug: chapter.slug,
              excerpt,
              matchType: "content",
              relevance: 1,
            });
            seen.add(key);
          }
        }
      });
    }
  });

  // Sort by relevance
  return results.sort((a, b) => b.relevance - a.relevance).slice(0, 20);
}

export function highlightSearchMatch(text: string, query: string): string {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}
