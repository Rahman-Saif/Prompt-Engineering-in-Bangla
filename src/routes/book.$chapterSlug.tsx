import { createFileRoute } from '@tanstack/react-router'
import { getChapter } from '../lib/chapters'
import { ChapterViewer } from '../components/ebook/ChapterViewer'

export const Route = createFileRoute('/book/$chapterSlug')({
  component: BookChapter,
  errorComponent: () => <div className="text-center py-12"><p className="text-gray-600">Chapter not found</p></div>,
})

function BookChapter() {
  const { chapterSlug } = Route.useParams()
  const chapter = getChapter(chapterSlug)

  if (!chapter) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Chapter Not Found</h1>
          <p className="text-gray-600 mb-6">The chapter you're looking for doesn't exist.</p>
          <a href="/book" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Back to Book
          </a>
        </div>
      </div>
    )
  }

  return <ChapterViewer chapter={chapter} />
}
