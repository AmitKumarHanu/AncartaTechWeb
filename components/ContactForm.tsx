'use client';

import React, { useState } from 'react';
import Button from './Button';

interface FormField {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    message?: string;
  };
}

interface ContactFormProps {
  title?: string;
  description?: string;
  fields?: FormField[];
  submitButtonText?: string;
  successMessage?: string;
  onSubmit?: (data: Record<string, string>) => Promise<void> | void;
}

const defaultFields: FormField[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'John Doe',
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'john@example.com',
    required: true,
  },
  {
    name: 'phone',
    label: 'Phone (Optional)',
    type: 'tel',
    placeholder: '+918755910457',
  },
  {
    name: 'service',
    label: 'Service Interest',
    type: 'select',
    options: [
      { value: '', label: 'Select a service' },
      { value: 'IT Consulting', label: 'IT Consulting' },
      { value: 'Custom Software Development', label: 'Custom Software Development' },
      { value: 'Web Application Development', label: 'Web Application Development' },
      { value: 'Mobile Application Development', label: 'Mobile Application Development' },
      { value: 'Cloud & Smart Digital Solutions', label: 'Cloud & Smart Digital Solutions' },
      { value: 'Software Maintenance & Support', label: 'Software Maintenance & Support' },
      { value: 'Other', label: 'Other' },
    ],
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Tell us about your project...',
    required: true,
    validation: {
      minLength: 10,
      message: 'Message must be at least 10 characters long',
    },
  },
];

export default function ContactForm({
  title = 'Send Us a Message',
  description = "Fill out the form below and our team will get back to you within 24 hours. We're excited to learn about your project and discuss how we can help.",
  fields = defaultFields,
  submitButtonText = 'Send Message',
  successMessage = "Thank you for contacting us! We've received your message and will respond shortly.",
  onSubmit,
}: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: FormField, value: string): string => {
    if (field.required && !value.trim()) {
      return `${field.label} is required`;
    }

    if (field.type === 'email' && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }

    if (field.validation?.minLength && value.trim().length < field.validation.minLength) {
      return field.validation.message || `Minimum ${field.validation.minLength} characters required`;
    }

    if (field.validation?.maxLength && value.trim().length > field.validation.maxLength) {
      return `Maximum ${field.validation.maxLength} characters allowed`;
    }

    if (field.name === 'phone' && value.trim()) {
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      const cleanPhone = value.replace(/[-\s()]/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        return 'Please enter a valid phone number format (e.g., +918755910457)';
      }
    }

    return '';
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      const error = validateField(field, formData[field.name] || '');
      if (error) {
        newErrors[field.name] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      
      setIsSubmitted(true);
      setFormData({});
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const getInputClassName = (fieldName: string) => {
    const baseClasses = 'w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500';
    const errorClasses = errors[fieldName] ? 'border-red-500' : 'border-gray-300';
    return `${baseClasses} ${errorClasses}`;
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg
          className="h-16 w-16 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700">{successMessage}</p>
        <Button
          variant="primary"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 bg-green-600 hover:bg-green-700"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div>
      {title && <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>}
      {description && <p className="text-gray-600 mb-8">{description}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                rows={6}
                className={getInputClassName(field.name)}
                placeholder={field.placeholder}
              />
            ) : field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                className={getInputClassName(field.name)}
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type || 'text'}
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                className={getInputClassName(field.name)}
                placeholder={field.placeholder}
              />
            )}

            {errors[field.name] && (
              <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-700 hover:bg-blue-800 transform hover:scale-105'
          }`}
        >
          {isSubmitting ? 'Sending...' : submitButtonText}
        </button>
      </form>
    </div>
  );
}
