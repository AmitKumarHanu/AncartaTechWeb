import React from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  showCTA?: boolean;
  primaryCTAText?: string;
  primaryCTALink?: string;
  secondaryCTAText?: string;
  secondaryCTALink?: string;
}

export default function Hero({
  title,
  subtitle,
  showCTA = true,
  primaryCTAText = 'Get Started',
  primaryCTALink = '/contact',
  secondaryCTAText = 'Learn More',
  secondaryCTALink = '/services',
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-violet-700 via-violet-800 to-violet-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-violet-500/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {title.split(' ').map((word, index) => {
              if (word === 'Digital' || word === 'Smart' || word === 'Solutions' || word === 'Ancarta') {
                return (
                  <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-violet-300">
                    {word}{' '}
                  </span>
                );
              }
              return <span key={index}>{word} </span>;
            })}
          </h1>

          {subtitle && (
            <p className="text-xl md:text-2xl text-violet-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}

          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href={primaryCTALink} variant="secondary">
                {primaryCTAText}
              </Button>
              <Button href={secondaryCTALink} variant="outline" className="border-white text-white hover:bg-white hover:text-violet-700">
                {secondaryCTAText}
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
