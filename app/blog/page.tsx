import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import BlogPostCard from '@/components/BlogPostCard';
import Button from '@/components/Button';

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
  },
  {
    slug: 'microservices-architecture-benefits',
    title: 'Why Microservices Architecture is the Future of Enterprise Software',
    excerpt: 'Understand the key benefits of microservices architecture and how it can help your organization scale efficiently.',
    date: '2023-12-15',
    category: 'Architecture',
    author: 'Alex Kumar',
    readTime: '7 min read'
  }
];

const categories = [
  'All',
  'Cloud Computing',
  'Software Development',
  'Mobile Development',
  'Project Management',
  'Security',
  'Architecture'
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
            <div className="mb-10">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      index === 0
                        ? 'bg-blue-700 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                  <BlogPostCard {...post} />
                </div>
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
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
