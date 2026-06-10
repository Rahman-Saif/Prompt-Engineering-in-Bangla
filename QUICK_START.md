# Quick Start: eBook Platform

## 🚀 Run the App

```bash
npm run dev
```

Visit: http://localhost:5173/book/

---

## 📖 Key Routes

| Route | Purpose |
|-------|---------|
| `/book/` | Book index/landing page |
| `/book/1-what-is-prompt-engineering` | Chapter viewer |
| `/book/search?q=tokens` | Search results |

---

## 💻 Main Components

### BookLayout
**Location**: `src/components/ebook/BookLayout.tsx`

Main container with:
- Header & search
- Sidebar navigation
- Content area with progress bar
- Table of contents
- Mobile drawer

**Usage**:
```tsx
<BookLayout chapter={chapter}>
  {/* Chapter content */}
</BookLayout>
```

### ContentBlock
**Location**: `src/components/ebook/ContentBlock.tsx`

Renders all content types: headings, paragraphs, code, tables, callouts, examples, summaries, etc.

**Usage**:
```tsx
<ContentBlock block={block} />
```

### Sidebar
**Location**: `src/components/ebook/Sidebar.tsx`

GitBook-style collapsible navigation showing all parts and chapters.

### TableOfContents  
**Location**: `src/components/ebook/TableOfContents.tsx`

Auto-generated from h2, h3, h4 headings in content. Shows scrollspy-tracked active heading.

### BookSearch
**Location**: `src/components/ebook/BookSearch.tsx`

Header search with real-time results.

---

## 📝 Adding Chapter Content

### Add to `src/lib/chapters.ts`:

```typescript
// Step 1: Create content blocks
const richContent5: ChapterContentBlock[] = [
  { type: "h2", text: "My Chapter Title" },
  { type: "p", text: "Introduction paragraph..." },
  { type: "ul", items: ["Point 1", "Point 2", "Point 3"] },
  { type: "callout", variant: "tip", title: "Tip", text: "Something useful" },
  { type: "code", lang: "typescript", code: "const x = 1;" },
  { type: "example", 
    title: "Example",
    prompt: "User input",
    output: "Model output"
  },
  { type: "summary", points: ["Key takeaway 1", "Key takeaway 2"] },
];

// Step 2: Create quiz
const quiz5: QuizQuestion[] = [
  {
    q: "Question text?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 1,  // Index of correct answer
    explain: "Explanation for the correct answer"
  },
];

// Step 3: Attach to chapter (find the index in CHAPTERS array)
CHAPTERS[4].content = richContent5;
CHAPTERS[4].quiz = quiz5;
```

---

## 🔍 Search System

**Location**: `src/lib/search.ts`

Searches across:
- Chapter titles
- Summaries
- Headings (h2)
- Paragraph content

**Usage**:
```typescript
import { searchChapters } from '@/lib/search';

const results = searchChapters("tokens");
// Returns sorted array of SearchResult objects
```

---

## 📊 Reading Progress

**Location**: `src/lib/reading-progress.ts`

Tracked automatically in `ReadingProgressBar.tsx`. Stores:
- Scroll percentage per chapter
- Completion status (>95%)
- Last read timestamp

**Usage**:
```typescript
import { readingProgressManager } from '@/lib/reading-progress';

// Check if complete
if (readingProgressManager.isChapterComplete(slug)) {
  // Show badge
}

// Get stats
const { completedChapters, totalProgress } = 
  readingProgressManager.getReadingStats();
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (drawer nav, full-width content)
- **Tablet**: 640px - 1024px (drawer nav, TOC hidden)
- **Desktop**: > 1024px (sidebar visible, TOC on right)
- **XL**: > 1280px (wider layout)

---

## 🎨 Content Block Examples

### Heading
```typescript
{ type: "h2", text: "Section Title" }
```

### Paragraph
```typescript
{ type: "p", text: "Long-form text content..." }
```

### Lists
```typescript
{ type: "ul", items: ["Item 1", "Item 2"] }
{ type: "ol", items: ["First", "Second"] }
```

### Code
```typescript
{ 
  type: "code", 
  lang: "typescript",
  code: `const greeting = "Hello";`
}
```

### Callout
```typescript
{ 
  type: "callout", 
  variant: "tip",  // or "note", "warning", "key"
  title: "Pro Tip",
  text: "Important information"
}
```

### Table
```typescript
{ 
  type: "table",
  headers: ["Column 1", "Column 2"],
  rows: [
    ["Data 1", "Data 2"],
    ["Data 3", "Data 4"]
  ]
}
```

### Image
```typescript
{ 
  type: "image",
  src: "/assets/vhitor-saif.jpg",
  alt: "Developer intro image",
  caption: "Photo caption"
}
```

### Quote
```typescript
{ 
  type: "quote",
  text: "The quick brown fox...",
  author: "Someone"
}
```

### Example
```typescript
{ 
  type: "example",
  title: "Example Prompt",
  prompt: "User asks: What is AI?",
  output: "Model responds: AI is..."
}
```

### Summary
```typescript
{ 
  type: "summary",
  points: [
    "Key takeaway 1",
    "Key takeaway 2",
    "Key takeaway 3"
  ]
}
```

---

## 🔧 Customize Appearance

### Colors
Edit `ContentBlock.tsx`:

```tsx
// Change callout colors
const calloutStyles = {
  note: "bg-blue-50 border-l-4 border-blue-400 text-blue-900",
  tip: "bg-green-50 border-l-4 border-green-400 text-green-900",
  // ...
}
```

### Typography
Edit heading/paragraph classNames in `ContentBlock.tsx`

### Sidebar Width
Edit `BookLayout.tsx`:

```tsx
<aside className="hidden lg:block w-64 border-r ...">
```

### Progress Bar Color
Edit `ReadingProgressBar.tsx`:

```tsx
<div className="bg-blue-600 ...">  {/* Change color */}
```

---

## ✅ Current Content Status

| Chapter | Title | Status |
|---------|-------|--------|
| 1 | What is Prompt Engineering? | ✅ Complete |
| 2 | How LLMs Work | ⏳ Placeholder |
| 3 | Tokens, Context Windows & Cost | ✅ Complete |
| 4 | Temperature, Top-p & Sampling | ✅ Complete |
| 5-30 | Various topics | ⏳ Placeholder |

---

## 🧪 Testing

### Manual checks:
- [ ] Scroll and see progress bar update
- [ ] Search for "tokens" in header
- [ ] Click chapter in sidebar
- [ ] Check mobile view (DevTools)
- [ ] Refresh page, progress persists
- [ ] Navigate to next/previous chapter

### Browser Console:
Check localStorage for reading progress:
```javascript
localStorage.getItem('ebook-reading-state')
```

---

## 📚 File Structure

```
src/
├── components/ebook/
│   ├── BookLayout.tsx           ← Main container
│   ├── ChapterViewer.tsx        ← Chapter display
│   ├── ContentBlock.tsx         ← Content renderer
│   ├── Sidebar.tsx              ← Navigation
│   ├── TableOfContents.tsx      ← TOC with scrollspy
│   ├── ReadingProgressBar.tsx   ← Progress indicator
│   ├── ChapterNavigation.tsx   ← Prev/Next buttons
│   └── BookSearch.tsx           ← Search box
├── lib/
│   ├── chapters.ts              ← Content data
│   ├── content-loader.ts        ← Utilities
│   ├── search.ts                ← Search engine
│   └── reading-progress.ts      ← Progress tracking
└── routes/
    ├── book.index.tsx           ← Book home
    ├── book.$chapterSlug.tsx    ← Chapter page
    └── book.search.index.tsx    ← Search page
```

---

## 🎯 Next Steps

1. **Add Chapter 2-5 Content**: Use the examples above
2. **Customize Colors**: Match your brand
3. **Add More Chapters**: Scale to 120+ pages
4. **Enable Markdown**: Load .md files instead of content blocks
5. **Add Features**: Bookmarks, annotations, dark mode

**See EBOOK_GUIDE.md for detailed documentation!**
