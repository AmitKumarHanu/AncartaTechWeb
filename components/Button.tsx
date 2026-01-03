import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 inline-block text-center';
  
  const variantStyles = {
    primary: 'bg-blue-700 text-white hover:bg-blue-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
