import React from "react";
import { Chapter } from "../../lib/chapters";
import { ContentBlock } from "./ContentBlock";
import { BookLayout } from "./BookLayout";

interface ChapterViewerProps {
  chapter: Chapter;
}

export function ChapterViewer({ chapter }: ChapterViewerProps) {
  if (!chapter.content) {
    return (
      <BookLayout chapter={chapter}>
        <div className="py-12 text-center">
          <p className="text-lg text-gray-600 mb-2">📝 Content Coming Soon</p>
          <p className="text-gray-500">{chapter.summary}</p>
        </div>
      </BookLayout>
    );
  }

  return (
    <BookLayout chapter={chapter}>
      <article className="prose-lg max-w-none">
        {/* Chapter title */}
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{chapter.title}</h1>
        
        {/* Chapter metadata */}
        <div className="flex gap-6 mb-8 pb-8 border-b border-gray-200 text-sm text-gray-600">
          <div>
            <span className="font-semibold text-gray-900">{chapter.readingMinutes}</span> min read
          </div>
          <div>
            <span className="font-semibold text-gray-900">{chapter.summary.split(" ").length}</span> words
          </div>
        </div>

        {/* Chapter content */}
        <div className="space-y-6">
          {chapter.content.map((block, idx) => (
            <ContentBlock key={idx} block={block} />
          ))}
        </div>

        {/* Quiz section */}
        {chapter.quiz && chapter.quiz.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Test Your Knowledge</h2>
              <p className="text-gray-700">
                Answer {chapter.quiz.length} question{chapter.quiz.length > 1 ? "s" : ""} to reinforce
                what you've learned in this chapter.
              </p>
            </div>

            {/* Quiz placeholder - will be replaced with actual quiz component */}
            <div className="space-y-6">
              {chapter.quiz.map((question, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Question {idx + 1}: {question.q}
                  </h3>
                  <div className="space-y-3">
                    {question.options.map((option, optIdx) => (
                      <label key={optIdx} className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name={`q-${idx}`}
                          value={optIdx}
                          className="mt-1 mr-3"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </BookLayout>
  );
}
