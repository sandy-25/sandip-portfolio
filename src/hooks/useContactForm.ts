// src/hooks/useContactForm.ts
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import type { ContactFormData, FormStatus } from '@/types';

interface UseContactFormReturn {
  formData: ContactFormData;
  status: FormStatus;
  errorMessage: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  reset: () => void;
}

const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

/**
 * Manages contact form state, validation, and EmailJS submission.
 */
export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Message must be at least 10 characters.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validate()) {
      setStatus('error');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMessage(
        'EmailJS is not configured. Please add your VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to .env.local.'
      );
      return;
    }

    setStatus('loading');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );
      setStatus('success');
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or email me directly.');
    }
  };

  const reset = () => {
    setStatus('idle');
    setErrorMessage('');
    setFormData(INITIAL_FORM_DATA);
  };

  return { formData, status, errorMessage, handleChange, handleSubmit, reset };
}
