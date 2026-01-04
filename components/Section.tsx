import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'light' | 'dark' | 'gradient' | 'primary';
  as?: 'section' | 'div' | 'main';
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
  as: Component = 'section',
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    light: 'bg-slate-50',
    dark: 'bg-gray-900',
    gradient: 'bg-gradient-to-br from-blue-700 to-cyan-600',
    primary: 'bg-blue-700',
  };

  return (
    <Component
      id={id}
      className={`py-16 md:py-20 ${backgroundStyles[background]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Component>
  );
}
