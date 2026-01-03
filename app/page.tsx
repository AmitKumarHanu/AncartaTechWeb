import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';

export default function Home() {
  const services = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'IT Consulting',
      description: 'Strategic technology guidance to align IT infrastructure with your business goals and drive digital transformation.',
      benefits: [
        'Technology roadmap planning and strategy',
        'Infrastructure optimization and modernization',
        'Cost reduction through efficient IT solutions'
      ]
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your unique business requirements and enhance operational efficiency.',
      benefits: [
        'Bespoke applications built for your workflow',
        'Scalable architecture for business growth',
        'Full-stack development expertise'
      ]
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Web Application Development',
      description: 'Modern, responsive web applications that deliver exceptional user experiences across all devices and platforms.',
      benefits: [
        'Progressive web apps with offline capabilities',
        'Responsive design for all screen sizes',
        'SEO-optimized and performance-focused'
      ]
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile apps that engage users and deliver seamless experiences on iOS and Android.',
      benefits: [
        'Native iOS and Android development',
        'Cross-platform solutions with React Native',
        'User-centric design and intuitive interfaces'
      ]
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud & Smart Digital Solutions',
      description: 'Cloud-native solutions leveraging AWS, Azure, and Google Cloud to modernize infrastructure and enable scalability.',
      benefits: [
        'Cloud migration and deployment strategies',
        'Serverless architecture implementation',
        'DevOps and CI/CD pipeline automation'
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
      description: 'Comprehensive maintenance and support services to ensure your applications run smoothly and stay up-to-date.',
      benefits: [
        '24/7 technical support and monitoring',
        'Regular updates and security patches',
        'Performance optimization and bug fixes'
      ]
    }
  ];

  const trustIndicators = [
    { number: '10+', label: 'Years of Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Expert Team Members' }
  ];

  const testimonials = [
    {
      quote: 'Ancarta Technologies transformed our legacy systems into a modern, cloud-based solution. Their expertise and professionalism exceeded our expectations.',
      author: 'Sarah Johnson',
      role: 'CTO, TechCorp Inc.',
    },
    {
      quote: 'The custom software they developed has significantly improved our operational efficiency. The team was responsive and delivered on time.',
      author: 'Michael Chen',
      role: 'Operations Director, GlobalTrade',
    },
    {
      quote: 'Working with Ancarta was a game-changer for our startup. They understood our vision and built a scalable platform that grows with us.',
      author: 'Emily Rodriguez',
      role: 'Founder & CEO, InnovateLabs',
    }
  ];

  return (
    <Layout>
      <Hero
        title="Smart Solutions for a Digital World"
        subtitle="Experts in IT Consulting & Custom Software Development"
        primaryCTAText="Start Your Project"
        secondaryCTAText="Explore Services"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empowering Businesses Through Technology
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Ancarta Technologies, we partner with startups, SMEs, and enterprises to deliver innovative software solutions that drive digital transformation. Our team of expert developers and consultants brings years of experience in building scalable, secure, and user-centric applications.
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose <span className="text-blue-700">Ancarta</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                  {indicator.number}
                </div>
                <div className="text-gray-600 font-medium">{indicator.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <svg className="h-10 w-10 text-cyan-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our custom software solutions can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 bg-transparent">
              Get in Touch
            </Button>
            <Button href="/services" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 bg-white text-blue-700">
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
