import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';

export const metadata = {
  title: 'Our Services | Ancarta Technologies',
  description: 'Comprehensive IT consulting and software development services including custom software, web & mobile apps, cloud solutions, and maintenance.',
};

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'IT Consulting',
      description: 'Navigate the complex technology landscape with our expert guidance. We help you develop comprehensive IT strategies that align with your business objectives, optimize infrastructure, and identify opportunities for digital transformation.',
      benefits: [
        'Technology roadmap and strategic planning',
        'Infrastructure assessment and optimization',
        'Digital transformation consulting',
        'Cost reduction and ROI analysis'
      ]
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Custom Software Development',
      description: 'Transform your unique business requirements into powerful software solutions. Our full-stack development team builds scalable, secure applications tailored to your specific workflows and processes.',
      benefits: [
        'Bespoke enterprise applications',
        'Scalable architecture and design',
        'Legacy system modernization',
        'API development and integration'
      ]
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Web Application Development',
      description: 'Create stunning, high-performance web applications that engage users and drive business growth. We build responsive, SEO-optimized solutions using modern frameworks like React, Next.js, and Vue.',
      benefits: [
        'Progressive Web Apps (PWAs)',
        'E-commerce platforms and portals',
        'Single Page Applications (SPAs)',
        'Responsive design for all devices'
      ]
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Application Development',
      description: 'Reach your customers wherever they are with native and cross-platform mobile applications. We develop intuitive, feature-rich apps for iOS and Android that deliver exceptional user experiences.',
      benefits: [
        'Native iOS (Swift) and Android (Kotlin) apps',
        'Cross-platform development with React Native',
        'Mobile-first UI/UX design',
        'App Store optimization and deployment'
      ]
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud & Smart Digital Solutions',
      description: 'Leverage the power of cloud computing to enhance scalability, reduce costs, and improve agility. We provide end-to-end cloud services from migration to optimization across AWS, Azure, and Google Cloud.',
      benefits: [
        'Cloud migration and deployment',
        'Serverless architecture design',
        'DevOps and CI/CD implementation',
        'Container orchestration with Kubernetes'
      ]
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Software Maintenance & Support',
      description: 'Keep your applications running smoothly with our comprehensive maintenance and support services. We provide proactive monitoring, regular updates, and rapid issue resolution to ensure optimal performance.',
      benefits: [
        '24/7 technical support and monitoring',
        'Bug fixes and security patches',
        'Performance optimization and tuning',
        'Feature enhancements and updates'
      ]
    }
  ];

  return (
    <Layout>
      <Hero
        title="Our Services"
        subtitle="Comprehensive IT solutions tailored to your business needs"
        primaryCTAText="Request a Consultation"
        secondaryCTAText="View Case Studies"
        secondaryCTALink="/blog"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Full-Spectrum Technology Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From initial consultation to ongoing support, we provide end-to-end services that cover every aspect of your technology needs. Our expertise spans across industries, helping startups scale, SMEs modernize, and enterprises innovate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Development Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'Understanding your business needs and project requirements' },
                { step: '02', title: 'Design', description: 'Creating wireframes, mockups, and technical architecture' },
                { step: '03', title: 'Development', description: 'Agile development with regular updates and demos' },
                { step: '04', title: 'Deployment', description: 'Testing, launch, and ongoing support' }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-700 text-white rounded-full text-2xl font-bold mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-violet-700 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your requirements and build a solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-700 bg-transparent">
              Contact Us Today
            </Button>
            <Button href="/about" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-700 bg-white text-violet-700">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
