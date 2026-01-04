import React from 'react';
import Button from './Button';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: 'primary' | 'secondary' | 'dark';
  className?: string;
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'primary',
  className = '',
}: CTASectionProps) {
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-700 to-cyan-600 text-white',
    secondary: 'bg-gray-100 text-gray-900',
    dark: 'bg-gray-900 text-white',
  };

  const buttonVariant = variant === 'primary' || variant === 'dark' 
    ? 'outline' 
    : 'primary';

  return (
    <section className={`py-20 ${variantStyles[variant]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {title}
        </h2>
        {description && (
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${
            variant === 'secondary' ? 'text-gray-600' : 'text-blue-100'
          }`}>
            {description}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Button 
                href={primaryCTA.href} 
                variant={buttonVariant}
                className={variant === 'primary' || variant === 'dark' 
                  ? 'border-white text-white hover:bg-white hover:text-blue-700 bg-transparent' 
                  : 'border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'}
              >
                {primaryCTA.text}
              </Button>
            )}
            {secondaryCTA && (
              <Button 
                href={secondaryCTA.href} 
                variant={variant === 'primary' || variant === 'dark' ? 'primary' : 'outline'}
                className={variant === 'primary' || variant === 'dark'
                  ? (variant === 'primary' 
                    ? 'bg-white text-blue-700 hover:bg-blue-50 border-transparent'
                    : 'bg-blue-600 text-white hover:bg-blue-700 border-transparent')
                  : 'border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white'}
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
