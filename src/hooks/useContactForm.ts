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

    setStatus('loading');

    try {
      // Replace with your actual EmailJS credentials
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? ''
      );
      setStatus('success');
      setFormData(INITIAL_FORM_DATA);
    } catch {
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
