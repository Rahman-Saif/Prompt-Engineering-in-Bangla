import { createFileRoute, useSearch } from '@tanstack/react-router'
import { searchChapters } from '../lib/search'
import { Link } from '@tanstack/react-router'
import { BookmarkIcon } from 'lucide-react'

export const Route = createFileRoute('/book/search/')({
  validateSearch: (search: Record<string, unknown>) => ({
    q: (search.q as string) || '',
  }),
  component: BookSearch,
})

function BookSearch() {
  const { q } = useSearch({ from: '/book/search/' })
  const results = searchChapters(q)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Results</h1>
          <p className="text-gray-600">
            Found {results.length} result{results.length !== 1 ? 's' : ''} for "<strong>{q}</strong>"
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {results.length > 0 ? (
          <div className="space-y-4">
            {results.map((result, idx) => (
              <Link
                key={idx}
                to={`/book/${result.chapterSlug}`}
                className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Chapter {result.chapterNumber}: {result.chapterTitle}
                  </h3>
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded capitalize">
                    {result.matchType}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{result.excerpt}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <BookmarkIcon size={14} className="mr-2" />
                  Relevance: {(result.relevance * 33).toFixed(0)}%
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No results found</h2>
            <p className="text-gray-600 mb-6">Try searching for different keywords or concepts.</p>
            <Link
              to="/book/"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Book
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
