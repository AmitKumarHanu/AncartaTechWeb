import React from 'react';
import Link from 'next/link';

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  imageUrl?: string;
}

export default function BlogPostCard({
  slug,
  title,
  excerpt,
  date,
  category,
  author,
  readTime,
  imageUrl,
}: BlogPostCardProps) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div 
        className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"
        style={imageUrl ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        {!imageUrl && (
          <div className="text-white text-center p-6">
            <div className="text-sm font-semibold mb-2 bg-white/20 inline-block px-3 py-1 rounded-full">
              {category}
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <span>{readTime}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-700 transition-colors">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">By {author}</span>
          <Link
            href={`/blog/${slug}`}
            className="text-blue-700 font-semibold hover:text-cyan-600 transition-colors flex items-center"
          >
            Read More
            <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
