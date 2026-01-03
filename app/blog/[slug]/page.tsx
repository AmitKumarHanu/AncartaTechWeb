import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Button from '@/components/Button';

interface BlogPost {
  title: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  content: string;
}

const blogPostsData: Record<string, BlogPost> = {
  'cloud-migration-best-practices': {
    title: 'Cloud Migration Best Practices for Enterprise Applications',
    date: '2024-01-15',
    category: 'Cloud Computing',
    author: 'John Smith',
    readTime: '8 min read',
    content: `
      <h2>Introduction</h2>
      <p>Cloud migration has become a critical priority for enterprises looking to modernize their infrastructure, reduce costs, and improve scalability. However, moving complex enterprise applications to the cloud requires careful planning and execution to avoid common pitfalls.</p>

      <h2>Assess Your Current Infrastructure</h2>
      <p>Before beginning any cloud migration, conduct a thorough assessment of your existing infrastructure. Identify all applications, dependencies, and data flows. This assessment will help you understand what needs to be migrated and in what order.</p>

      <h3>Key Assessment Areas:</h3>
      <ul>
        <li>Application inventory and dependencies</li>
        <li>Data volume and sensitivity</li>
        <li>Integration points and APIs</li>
        <li>Performance and security requirements</li>
      </ul>

      <h2>Choose the Right Migration Strategy</h2>
      <p>Not all applications should be migrated the same way. The "6 Rs" of cloud migration provide a framework for decision-making:</p>

      <ul>
        <li><strong>Rehost:</strong> Lift and shift - move applications as-is</li>
        <li><strong>Replatform:</strong> Make minimal changes to optimize for cloud</li>
        <li><strong>Refactor:</strong> Redesign applications for cloud-native architecture</li>
        <li><strong>Repurchase:</strong> Move to SaaS alternatives</li>
        <li><strong>Retire:</strong> Decommission unnecessary applications</li>
        <li><strong>Retain:</strong> Keep on-premises for now</li>
      </ul>

      <h2>Implement Security and Compliance</h2>
      <p>Security should be a top priority throughout the migration process. Ensure that data encryption, access controls, and compliance requirements are maintained or improved during the move to the cloud.</p>

      <h2>Plan for Minimal Downtime</h2>
      <p>Use strategies like blue-green deployment or canary releases to minimize service disruption. Test thoroughly in staging environments before production cutover.</p>

      <h2>Conclusion</h2>
      <p>Successful cloud migration requires careful planning, the right strategy, and a focus on security and minimal disruption. By following these best practices, enterprises can smoothly transition to the cloud and unlock its full potential.</p>
    `
  },
  'modernizing-legacy-systems': {
    title: 'Modernizing Legacy Systems: A Strategic Approach',
    date: '2024-01-10',
    category: 'Software Development',
    author: 'Sarah Williams',
    readTime: '10 min read',
    content: `
      <h2>The Challenge of Legacy Systems</h2>
      <p>Many organizations rely on legacy systems that are critical to operations but increasingly difficult to maintain, integrate, and scale. Modernizing these systems is essential for remaining competitive in today's digital landscape.</p>

      <h2>Why Modernize?</h2>
      <ul>
        <li>Improved performance and scalability</li>
        <li>Better integration capabilities with modern tools</li>
        <li>Enhanced security and compliance</li>
        <li>Reduced maintenance costs</li>
        <li>Improved user experience</li>
      </ul>

      <h2>Strategic Modernization Approaches</h2>
      
      <h3>1. Incremental Modernization</h3>
      <p>Break down the modernization into smaller, manageable phases. This approach reduces risk and allows for continuous delivery of value.</p>

      <h3>2. API-First Strategy</h3>
      <p>Wrap legacy systems with modern APIs to enable integration with new technologies while preserving existing business logic.</p>

      <h3>3. Microservices Migration</h3>
      <p>Gradually extract functionality from monolithic systems into independent microservices that can be developed and deployed independently.</p>

      <h2>Risk Mitigation</h2>
      <p>Always maintain a rollback plan, conduct thorough testing, and ensure business continuity throughout the modernization process.</p>

      <h2>Conclusion</h2>
      <p>Legacy system modernization is a journey, not a destination. With the right strategy and execution, organizations can transform outdated systems into modern, efficient platforms that drive business growth.</p>
    `
  },
  'mobile-app-development-trends-2024': {
    title: 'Top Mobile App Development Trends for 2024',
    date: '2024-01-05',
    category: 'Mobile Development',
    author: 'Michael Chen',
    readTime: '6 min read',
    content: `
      <h2>The Mobile Development Landscape in 2024</h2>
      <p>Mobile app development continues to evolve rapidly. Here are the key trends shaping the industry in 2024.</p>

      <h2>1. AI and Machine Learning Integration</h2>
      <p>Mobile apps are increasingly leveraging AI for personalization, predictive features, and intelligent automation. From chatbots to recommendation engines, AI is becoming a standard component.</p>

      <h2>2. 5G Technology Adoption</h2>
      <p>With widespread 5G deployment, apps can now deliver richer experiences with augmented reality, real-time multiplayer gaming, and high-quality video streaming.</p>

      <h2>3. Cross-Platform Development</h2>
      <p>Frameworks like React Native and Flutter continue to mature, enabling developers to build high-quality apps for both iOS and Android from a single codebase.</p>

      <h2>4. Enhanced Security and Privacy</h2>
      <p>With increasing concerns about data privacy, apps must implement robust security measures including biometric authentication, end-to-end encryption, and transparent data practices.</p>

      <h2>5. Super Apps and Mini Programs</h2>
      <p>The super app model, popularized in Asia, is gaining traction globally. Apps are becoming platforms that host mini-programs for various services.</p>

      <h2>Conclusion</h2>
      <p>Staying ahead in mobile development means embracing these trends while maintaining a focus on user experience and performance.</p>
    `
  },
  'agile-transformation-guide': {
    title: 'Complete Guide to Agile Transformation in Software Teams',
    date: '2023-12-28',
    category: 'Project Management',
    author: 'Emily Rodriguez',
    readTime: '12 min read',
    content: `
      <h2>Understanding Agile Transformation</h2>
      <p>Agile transformation is more than adopting Scrum ceremonies—it's a fundamental shift in how teams collaborate, deliver value, and respond to change.</p>

      <h2>The Agile Mindset</h2>
      <p>Successful agile transformation starts with embracing core values: individuals and interactions, working software, customer collaboration, and responding to change.</p>

      <h2>Implementing Scrum</h2>
      <ul>
        <li>Define clear roles: Product Owner, Scrum Master, Development Team</li>
        <li>Establish sprint cadence (typically 2 weeks)</li>
        <li>Implement ceremonies: Daily standups, sprint planning, reviews, retrospectives</li>
        <li>Maintain a prioritized product backlog</li>
      </ul>

      <h2>Common Pitfalls to Avoid</h2>
      <ul>
        <li>Treating agile as just a process change without cultural transformation</li>
        <li>Skipping retrospectives or treating them as formalities</li>
        <li>Micromanaging teams instead of empowering them</li>
        <li>Neglecting technical practices like continuous integration</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>Track metrics like team velocity, sprint burndown, customer satisfaction, and time to market to gauge transformation progress.</p>

      <h2>Conclusion</h2>
      <p>Agile transformation requires commitment, patience, and continuous improvement. The rewards—faster delivery, better quality, and happier teams—are well worth the effort.</p>
    `
  },
  'cybersecurity-best-practices': {
    title: 'Essential Cybersecurity Best Practices for Modern Applications',
    date: '2023-12-20',
    category: 'Security',
    author: 'David Thompson',
    readTime: '9 min read',
    content: `
      <h2>The Critical Importance of Application Security</h2>
      <p>In an era of increasing cyber threats, application security can't be an afterthought. It must be built into every stage of the development lifecycle.</p>

      <h2>Authentication and Authorization</h2>
      <ul>
        <li>Implement multi-factor authentication (MFA)</li>
        <li>Use OAuth 2.0 and OpenID Connect for secure authentication</li>
        <li>Apply the principle of least privilege for access control</li>
        <li>Regularly audit user permissions and access logs</li>
      </ul>

      <h2>Data Protection</h2>
      <ul>
        <li>Encrypt data at rest and in transit using industry-standard algorithms</li>
        <li>Implement proper key management practices</li>
        <li>Anonymize or pseudonymize sensitive data where possible</li>
        <li>Establish data retention and deletion policies</li>
      </ul>

      <h2>Secure Coding Practices</h2>
      <ul>
        <li>Validate and sanitize all user inputs</li>
        <li>Use parameterized queries to prevent SQL injection</li>
        <li>Implement proper error handling without exposing sensitive information</li>
        <li>Keep dependencies updated and scan for vulnerabilities</li>
      </ul>

      <h2>Security Testing</h2>
      <p>Incorporate security testing throughout the development process, including static analysis, dynamic analysis, and penetration testing.</p>

      <h2>Incident Response Plan</h2>
      <p>Prepare for the worst by having a comprehensive incident response plan that includes detection, containment, eradication, and recovery procedures.</p>

      <h2>Conclusion</h2>
      <p>Security is an ongoing process, not a one-time implementation. Stay informed about emerging threats and continuously improve your security posture.</p>
    `
  }
};

export function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPostsData[params.slug];
  
  if (!post) {
    return {
      title: 'Post Not Found | Ancarta Technologies',
    };
  }

  return {
    title: `${post.title} | Ancarta Technologies Blog`,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPostsData[params.slug];

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Button href="/blog">Back to Blog</Button>
        </div>
      </Layout>
    );
  }

  const relatedPosts = Object.entries(blogPostsData)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 3)
    .map(([slug, data]) => ({ slug, ...data }));

  return (
    <Layout>
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-blue-700 hover:text-cyan-600 mb-8 font-semibold">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            <div className="mb-8">
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center text-gray-600 gap-4">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="blog-content"
              />
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-sm text-blue-700 font-semibold mb-2">
                    {relatedPost.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <div className="text-sm text-gray-500">
                    {relatedPost.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
