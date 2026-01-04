import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';

export const metadata = {
  title: 'Contact Us | Ancarta Technologies',
  description: 'Get in touch with Ancarta Technologies for your IT consulting and software development needs. We respond within 24 hours.',
};

export default function Contact() {
  return (
    <Layout>
      <Hero
        title="Get in Touch"
        subtitle="Let's discuss how we can help transform your business with innovative technology solutions"
        showCTA={false}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm
              title="Send Us a Message"
              description="Fill out the form below and our team will get back to you within 24 hours. We're excited to learn about your project and discuss how we can help."
            />

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <ContactInfo className="mb-10" />

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Ancarta?</h3>
                <ul className="space-y-3">
                  {[
                    'Over 10 years of industry experience',
                    'Expert team of certified developers',
                    '500+ successful projects delivered',
                    '98% client satisfaction rate',
                    'Agile development methodology',
                    'Dedicated project management'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Location</h2>
            <div className="bg-gray-200 rounded-xl overflow-hidden h-80 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <svg className="h-16 w-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg">San Francisco, CA</p>
                <p className="text-sm mt-2">123 Tech Boulevard, Innovation District</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
