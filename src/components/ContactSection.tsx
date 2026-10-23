import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch (err) {
      console.warn("Failed to copy email", err);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a brief message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real network submission turnaround
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <section id="contact" className="py-20 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
            Get in Touch
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-stone-900 dark:text-stone-50">
            Let's Build Something Together
          </h2>
          <p className="text-base text-stone-600 dark:text-stone-400 max-w-2xl font-sans">
            Whether you have an upcoming project, are seeking an architectural frontend audit, or want to discuss modern web standards—my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Inquiries & Availability (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-sm">
              <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider">
                Direct Contact
              </span>
              <h3 className="text-lg font-bold font-display text-stone-900 dark:text-stone-100 mt-1 mb-2">
                Email & Correspondence
              </h3>
              <p className="text-sm font-mono text-stone-600 dark:text-stone-300 mb-4 break-all">
                {PERSONAL_INFO.email}
              </p>

              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 px-4 text-xs font-mono font-medium rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400">Copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-stone-500" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-sm">
              <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider">
                Working Engagement
              </span>
              <h3 className="text-lg font-bold font-display text-stone-900 dark:text-stone-100 mt-1 mb-2">
                Availability & Timelines
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-3 font-sans">
                Currently booking select frontend architecture design, component systems engineering, and senior contractor engagements.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
                <span>Turnaround: &lt; 24h</span>
                <span aria-hidden="true">·</span>
                <span>Timezone: US Pacific (UTC-7)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Semantic Form (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              {submitSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-stone-900 dark:text-stone-50">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto font-sans">
                    Thank you, <strong className="text-stone-900 dark:text-stone-100">{formData.name}</strong>. Your inquiry has been received. I will review it and reply directly to <span className="font-mono text-xs text-stone-800 dark:text-stone-200">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-4 py-2 text-xs font-mono font-medium rounded-lg border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-form-name" className="block text-xs font-mono font-semibold text-stone-700 dark:text-stone-300">
                        Your Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-form-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-stone-50 dark:bg-stone-950 border text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-stone-200 dark:border-stone-800 focus:border-stone-900 dark:focus:border-stone-100'
                        }`}
                        required
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-form-email" className="block text-xs font-mono font-semibold text-stone-700 dark:text-stone-300">
                        Email Address <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-form-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@studio.io"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-stone-50 dark:bg-stone-950 border text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-stone-200 dark:border-stone-800 focus:border-stone-900 dark:focus:border-stone-100'
                        }`}
                        required
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-form-subject" className="block text-xs font-mono font-semibold text-stone-700 dark:text-stone-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-form-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Web Architecture / New Project"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="contact-form-message" className="block text-xs font-mono font-semibold text-stone-700 dark:text-stone-300">
                        Message <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-stone-400">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="contact-form-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your timeline, project scope, or what you'd like to build together..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-stone-50 dark:bg-stone-950 border text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none transition-colors resize-y ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-stone-200 dark:border-stone-800 focus:border-stone-900 dark:focus:border-stone-100'
                      }`}
                      required
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 hover:bg-stone-800 dark:hover:bg-stone-200 disabled:opacity-50 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
