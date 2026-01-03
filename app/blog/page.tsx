import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Blog & Insights | Ancarta Technologies',
  description: 'Stay updated with the latest trends in software development, IT consulting, and digital transformation. Expert insights from Ancarta Technologies.',
};

const blogPosts = [
  {
    slug: 'cloud-migration-best-practices',
    title: 'Cloud Migration Best Practices for Enterprise Applications',
    excerpt: 'Learn the essential strategies and considerations for successfully migrating your enterprise applications to the cloud while minimizing risks and downtime.',
    date: '2024-01-15',
    category: 'Cloud Computing',
    author: 'John Smith',
    readTime: '8 min read'
  },
  {
    slug: 'modernizing-legacy-systems',
    title: 'Modernizing Legacy Systems: A Strategic Approach',
    excerpt: 'Discover how to breathe new life into outdated systems with a phased modernization strategy that balances innovation with business continuity.',
    date: '2024-01-10',
    category: 'Software Development',
    author: 'Sarah Williams',
    readTime: '10 min read'
  },
  {
    slug: 'mobile-app-development-trends-2024',
    title: 'Top Mobile App Development Trends for 2024',
    excerpt: 'Explore the cutting-edge technologies and design patterns shaping the future of mobile application development this year.',
    date: '2024-01-05',
    category: 'Mobile Development',
    author: 'Michael Chen',
    readTime: '6 min read'
  },
  {
    slug: 'agile-transformation-guide',
    title: 'Complete Guide to Agile Transformation in Software Teams',
    excerpt: 'Transform your software development process with proven agile methodologies. Learn how to implement Scrum and Kanban effectively.',
    date: '2023-12-28',
    category: 'Project Management',
    author: 'Emily Rodriguez',
    readTime: '12 min read'
  },
  {
    slug: 'cybersecurity-best-practices',
    title: 'Essential Cybersecurity Best Practices for Modern Applications',
    excerpt: 'Protect your applications and data with these critical security measures every development team should implement.',
    date: '2023-12-20',
    category: 'Security',
    author: 'David Thompson',
    readTime: '9 min read'
  }
];

export default function Blog() {
  return (
    <Layout>
      <Hero
        title="Insights & Resources"
        subtitle="Expert perspectives on technology, development, and digital transformation"
        showCTA={false}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <div className="text-sm font-semibold mb-2 bg-white/20 inline-block px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-700 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Link
                        href={`/blog/${post.slug}`}
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
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights, tips, and updates from the world of software development and IT consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
