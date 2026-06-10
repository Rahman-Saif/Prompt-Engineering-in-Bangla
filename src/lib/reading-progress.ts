// Reading progress tracking
export interface ReadingProgress {
  chapterSlug: string;
  scrollPercentage: number;
  lastReadAt: number;
  completed: boolean;
}

export interface UserReadingState {
  currentChapterSlug?: string;
  progress: Map<string, ReadingProgress>;
  completedChapters: Set<string>;
  totalReadingTime: number;
}

const STORAGE_KEY = "ebook-reading-state";

export class ReadingProgressManager {
  private state: UserReadingState;

  constructor() {
    this.state = this.loadState();
  }

  private loadState(): UserReadingState {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        return {
          progress: new Map(),
          completedChapters: new Set(),
          totalReadingTime: 0,
        };
      }
      const data = JSON.parse(stored);
      return {
        currentChapterSlug: data.currentChapterSlug,
        progress: new Map(data.progress),
        completedChapters: new Set(data.completedChapters),
        totalReadingTime: data.totalReadingTime || 0,
      };
    } catch (error) {
      console.error("Error loading reading state:", error);
      return {
        progress: new Map(),
        completedChapters: new Set(),
        totalReadingTime: 0,
      };
    }
  }

  private saveState(): void {
    try {
      const data = {
        currentChapterSlug: this.state.currentChapterSlug,
        progress: Array.from(this.state.progress.entries()),
        completedChapters: Array.from(this.state.completedChapters),
        totalReadingTime: this.state.totalReadingTime,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving reading state:", error);
    }
  }

  updateProgress(chapterSlug: string, scrollPercentage: number): void {
    const existing = this.state.progress.get(chapterSlug) || {
      chapterSlug,
      scrollPercentage: 0,
      lastReadAt: Date.now(),
      completed: false,
    };

    existing.scrollPercentage = Math.max(existing.scrollPercentage, scrollPercentage);
    existing.lastReadAt = Date.now();
    existing.completed = scrollPercentage >= 95;

    this.state.progress.set(chapterSlug, existing);

    if (existing.completed) {
      this.state.completedChapters.add(chapterSlug);
    }

    this.saveState();
  }

  markChapterComplete(chapterSlug: string): void {
    this.state.completedChapters.add(chapterSlug);
    const progress = this.state.progress.get(chapterSlug);
    if (progress) {
      progress.completed = true;
    }
    this.saveState();
  }

  isChapterComplete(chapterSlug: string): boolean {
    return this.state.completedChapters.has(chapterSlug);
  }

  getProgress(chapterSlug: string): ReadingProgress | undefined {
    return this.state.progress.get(chapterSlug);
  }

  getOverallProgress(): number {
    if (this.state.completedChapters.size === 0) return 0;
    // This should be calculated based on total chapters from chapters.ts
    return this.state.completedChapters.size;
  }

  setCurrentChapter(slug: string): void {
    this.state.currentChapterSlug = slug;
    this.saveState();
  }

  getCurrentChapter(): string | undefined {
    return this.state.currentChapterSlug;
  }

  getReadingStats() {
    return {
      completedChapters: this.state.completedChapters.size,
      totalProgress: Array.from(this.state.progress.entries()).reduce(
        (sum, [_, p]) => sum + p.scrollPercentage,
        0
      ) / (this.state.progress.size || 1),
    };
  }
}

export const readingProgressManager = new ReadingProgressManager();
