import { createFileRoute, Link } from '@tanstack/react-router'
import { CHAPTERS, PARTS } from '../lib/chapters'
import { BookmarkIcon, ClockIcon } from 'lucide-react'

export const Route = createFileRoute('/book/')({
  component: BookIndex,
})

function BookIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">📚 Prompt Engineering</h1>
          <p className="text-xl text-gray-700 mb-6">Master the Art of Prompting with AI</p>
          <p className="text-gray-600 max-w-2xl mb-6">
            A comprehensive guide to prompt engineering covering foundations, patterns, and advanced techniques.
            Learn from {CHAPTERS.length} expertly-crafted chapters.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600">{CHAPTERS.length}</div>
            <div className="text-gray-600">Total Chapters</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600">{PARTS.length}</div>
            <div className="text-gray-600">Sections</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-purple-600">~120</div>
            <div className="text-gray-600">Pages</div>
          </div>
        </div>

        {/* Parts and Chapters */}
        <div className="space-y-8">
          {PARTS.map((part) => {
            const partChapters = CHAPTERS.filter((ch) => ch.partId === part.id)
            return (
              <div key={part.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                  <h2 className="text-2xl font-bold text-white">{part.title}</h2>
                  <p className="text-blue-100 text-sm mt-1">{part.description}</p>
                </div>

                <div className="divide-y divide-gray-200">
                  {partChapters.map((chapter) => (
                    <Link
                      key={chapter.slug}
                      to={`/book/${chapter.slug}`}
                      className="block px-6 py-4 hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                            Chapter {chapter.number}: {chapter.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">{chapter.summary}</p>
                          <div className="flex gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <ClockIcon size={14} />
                              {chapter.readingMinutes} min read
                            </span>
                            {chapter.quiz && (
                              <span className="flex items-center gap-1">
                                <BookmarkIcon size={14} />
                                {chapter.quiz.length} questions
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="ml-4 text-blue-600 font-bold text-xl">
                          →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Start Reading CTA */}
        <div className="mt-12 text-center">
          <Link
            to={`/book/${CHAPTERS[0].slug}`}
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Start Reading →
          </Link>
        </div>
      </div>
    </div>
  )
}
