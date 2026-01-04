import React from 'react';

interface TrustIndicator {
  number: string;
  label: string;
  suffix?: string;
}

interface TrustIndicatorsProps {
  title?: string;
  indicators: TrustIndicator[];
  variant?: 'default' | 'cards' | 'minimal';
}

export default function TrustIndicators({ 
  title = "Why Choose Ancarta", 
  indicators,
  variant = 'default'
}: TrustIndicatorsProps) {
  if (variant === 'minimal') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {indicators.map((indicator, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">
              {indicator.number}
              {indicator.suffix && <span className="text-lg">{indicator.suffix}</span>}
            </div>
            <div className="text-gray-600 text-sm">{indicator.label}</div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'cards') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {indicators.map((indicator, index) => (
          <div 
            key={index} 
            className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
              {indicator.number}
              {indicator.suffix && <span className="text-2xl">{indicator.suffix}</span>}
            </div>
            <div className="text-gray-600 font-medium">{indicator.label}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                {indicator.number}
                {indicator.suffix && <span className="text-2xl">{indicator.suffix}</span>}
              </div>
              <div className="text-gray-600 font-medium">{indicator.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
