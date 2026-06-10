import React, { useState, useEffect } from "react";
import { searchChapters, SearchResult } from "../../lib/search";
import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";

interface BookSearchProps {
  onClose?: () => void;
}

export function BookSearch({ onClose }: BookSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchResults = searchChapters(query);
    setResults(searchResults);
  }, [query]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const matchTypeColors = {
    title: "text-blue-600",
    heading: "text-purple-600",
    content: "text-gray-600",
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search size={20} className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search chapters..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {isOpen && query && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {results.map((result, idx) => (
                <Link
                  key={idx}
                  to={`/book/${result.chapterSlug}`}
                  onClick={handleClose}
                  className="block p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Ch. {result.chapterNumber}: {result.chapterTitle}
                    </h4>
                    <span className={`text-xs font-medium ${matchTypeColors[result.matchType]}`}>
                      {result.matchType}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{result.excerpt}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              <p className="text-sm">No chapters found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
