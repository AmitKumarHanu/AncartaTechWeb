import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export default function Testimonials({ 
  title = "What Our Clients Say", 
  subtitle,
  testimonials 
}: TestimonialsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <svg className="h-10 w-10 text-cyan-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">
                  {testimonial.role}
                  {testimonial.company && `, ${testimonial.company}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
