import React from "react";
import { ChapterContentBlock } from "../lib/chapters";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

interface ContentBlockProps {
  block: ChapterContentBlock;
}

export function ContentBlock({ block }: ContentBlockProps) {
  switch (block.type) {
    case "h1":
      return (
        <h1 id={block.id} className="text-4xl font-bold mb-6 mt-8 text-gray-900">
          {block.text}
        </h1>
      );

    case "h2":
      return (
        <h2 id={block.id} className="text-3xl font-bold mb-4 mt-8 text-gray-900 scroll-mt-20">
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3 id={block.id} className="text-2xl font-semibold mb-3 mt-6 text-gray-800 scroll-mt-20">
          {block.text}
        </h3>
      );

    case "h4":
      return (
        <h4 id={block.id} className="text-xl font-semibold mb-2 mt-4 text-gray-700">
          {block.text}
        </h4>
      );

    case "p":
      return (
        <p className="text-lg leading-relaxed mb-4 text-gray-700 text-justify">
          {block.text}
        </p>
      );

    case "ul":
      return (
        <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
          {block.items.map((item, idx) => (
            <li key={idx} className="ml-4">
              {item}
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
          {block.items.map((item, idx) => (
            <li key={idx} className="ml-4">
              {item}
            </li>
          ))}
        </ol>
      );

    case "code":
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
          <code className={`language-${block.lang || "text"}`}>{block.code}</code>
        </pre>
      );

    case "table":
      return (
        <div className="mb-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                {block.headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-gray-50">
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className="border border-gray-300 px-4 py-2 text-gray-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "callout":
      const calloutStyles = {
        note: "bg-blue-50 border-l-4 border-blue-400 text-blue-900",
        tip: "bg-green-50 border-l-4 border-green-400 text-green-900",
        warning: "bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900",
        key: "bg-purple-50 border-l-4 border-purple-400 text-purple-900",
      };

      return (
        <div className={`${calloutStyles[block.variant || "note"]} p-4 mb-4 rounded`}>
          {block.title && <h4 className="font-bold mb-2">{block.title}</h4>}
          <p className="text-sm">{block.text}</p>
        </div>
      );

    case "image":
      return (
        <figure className="mb-6">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full rounded-lg shadow-lg"
          />
          {block.caption && (
            <figcaption className="text-center text-sm text-gray-600 mt-2">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "quote":
      return (
        <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4 text-gray-700">
          <p className="mb-2">"{block.text}"</p>
          {block.author && <footer className="text-sm text-gray-600">— {block.author}</footer>}
        </blockquote>
      );

    case "divider":
      return <hr className="my-8 border-gray-300" />;

    case "example":
      return (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-gray-900 mb-2">{block.title}</h4>
          <div className="mb-3">
            <p className="text-sm font-semibold text-gray-700">Prompt:</p>
            <pre className="bg-white border border-gray-300 p-2 rounded text-sm overflow-x-auto">
              <code>{block.prompt}</code>
            </pre>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Output:</p>
            <pre className="bg-white border border-gray-300 p-2 rounded text-sm overflow-x-auto">
              <code>{block.output}</code>
            </pre>
          </div>
        </div>
      );

    case "summary":
      return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-gray-900 mb-3">Key Takeaways</h3>
          <ul className="space-y-2">
            {block.points.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "markdown":
      return (
        <div className="prose prose-lg max-w-none mb-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {block.content}
          </ReactMarkdown>
        </div>
      );

    default:
      return null;
  }
}
