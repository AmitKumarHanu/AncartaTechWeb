import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Button from '@/components/Button';

export const metadata = {
  title: 'About Us | Ancarta Technologies',
  description: 'Learn about Ancarta Technologies - your trusted partner in IT consulting and custom software development. Discover our mission, vision, and values.',
};

export default function About() {
  const missionVisionValues = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Our Mission',
      description: 'To empower businesses with innovative, scalable, and secure technology solutions that drive growth and digital transformation.'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Our Vision',
      description: 'To be the leading technology partner for businesses worldwide, recognized for excellence in delivering cutting-edge software solutions.'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Our Values',
      description: 'Excellence, integrity, innovation, and client success drive everything we do. We build lasting partnerships through trust and transparency.'
    }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your success is our success. We listen, understand, and deliver solutions tailored to your unique business needs.'
    },
    {
      title: 'Quality & Excellence',
      description: 'We maintain the highest standards in code quality, security, and performance across all our deliverables.'
    },
    {
      title: 'Agile & Transparent',
      description: 'We work collaboratively with clear communication, ensuring you\'re involved at every stage of development.'
    }
  ];

  return (
    <Layout>
      <Hero
        title="About Ancarta Technologies"
        subtitle="Building the future, one solution at a time"
        showCTA={false}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Who We Are
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold text-blue-700">Ancarta Technologies Pvt. Ltd.</span> is a leading provider of IT consulting and custom software development services. Founded with a vision to bridge the gap between business challenges and technology solutions, we have grown into a trusted partner for startups, SMEs, and enterprise clients across the globe.
              </p>
              
              <p>
                With over a decade of experience in the industry, our team of expert developers, architects, and consultants brings deep technical expertise and business acumen to every project. We specialize in building scalable, secure, and user-friendly applications that solve real-world problems and create measurable business value.
              </p>
              
              <p>
                From initial consultation to deployment and beyond, we work closely with our clients to understand their unique requirements and deliver solutions that exceed expectations. Our comprehensive service portfolio includes IT consulting, custom software development, web and mobile applications, cloud solutions, and ongoing maintenance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Mission, Vision & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {missionVisionValues.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-6 text-white mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-lg font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-700 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We believe in building long-term partnerships with our clients. Our collaborative approach ensures that we not only understand your current needs but also anticipate future challenges. We combine technical excellence with business strategy to deliver solutions that provide real value and competitive advantage.
            </p>
            <p className="text-lg text-blue-100 mb-10">
              Whether you&apos;re a startup looking to build your MVP, an SME seeking to modernize your systems, or an enterprise requiring complex integrations, we have the expertise and experience to help you succeed.
            </p>
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 bg-transparent">
              Let&apos;s Work Together
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
