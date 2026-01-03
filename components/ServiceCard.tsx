import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export default function ServiceCard({ icon, title, description, benefits }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-6 text-white">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <div className="space-y-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start">
            <svg className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 text-sm">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
