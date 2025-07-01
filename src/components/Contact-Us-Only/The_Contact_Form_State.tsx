import { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function useContactFormState(initialState: ContactFormData = { name: '', email: '', phone: '', subject: '', message: '' }) {
  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle');
  const [fieldFocus, setFieldFocus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent,
    onSuccess?: () => void,
    onError?: () => void
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(res => setTimeout(res, 2000));
      setStatus('success');
      setFormData(initialState);
      if (onSuccess) onSuccess();
    } catch {
      setStatus('error');
      if (onError) onError();
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    setIsSubmitting,
    status,
    setStatus,
    fieldFocus,
    setFieldFocus,
    handleChange,
    handleSubmit,
  };
} 