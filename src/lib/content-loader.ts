// Content loader for markdown-based chapters
export async function loadMarkdownContent(filePath: string): Promise<string> {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
    return response.text();
  } catch (error) {
    console.error("Error loading markdown:", error);
    return "";
  }
}

// Generate table of contents from content blocks
export function generateTableOfContents(
  content: Array<{ type: string; text?: string; id?: string }>
) {
  const toc: Array<{ id: string; text: string; level: number }> = [];
  let headingCount = 0;

  content.forEach((block) => {
    if (["h1", "h2", "h3", "h4"].includes(block.type) && block.text) {
      const id = block.id || `heading-${headingCount++}`;
      const level = parseInt(block.type.substring(1));
      toc.push({ id, text: block.text, level });
    }
  });

  return toc;
}

// Extract searchable content from chapter
export function extractSearchableContent(
  title: string,
  content: Array<{ type: string; text?: string; items?: string[] }>
) {
  const searchable: string[] = [title];

  content.forEach((block) => {
    if (block.text) searchable.push(block.text);
    if (block.items) searchable.push(block.items.join(" "));
  });

  return searchable.join(" ");
}

// Calculate estimated reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
