// src/sections/Contact/index.tsx
import type { ComponentType, SVGProps } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { useContactForm } from '@/hooks/useContactForm';
import { SOCIAL_LINKS } from '@/data/social';
import { fadeInLeft, fadeInRight } from '@/utils/animations';
import { cn } from '@/utils/cn';

const ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  FiGithub,
  FiLinkedin,
  FiMail,
};

/**
 * Contact section with professional form and social links.
 */
export function ContactSection() {
  const { formData, status, errorMessage, handleChange, handleSubmit } = useContactForm();

  const inputClass = cn(
    'w-full px-4 py-3 rounded-xl text-sm',
    'bg-surface-tertiary border border-border',
    'text-text-primary placeholder:text-text-muted',
    'focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20',
    'transition-all duration-200'
  );

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Work"
          titleAccent="Together"
          description="Open to new opportunities, collaborations, and interesting projects. Let's connect."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — Contact Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <GlassCard hover={false} className="p-8">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Ready to Build Something Great?
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                I'm currently open to full-time opportunities, freelance projects, and
                technical consultations. Whether you need an enterprise .NET backend,
                a React frontend, or a complete full-stack solution — let's talk.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-subtle border border-accent/20 flex items-center justify-center">
                    <FiMail size={15} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">Email</div>
                    {(() => {
                      const emailLink = SOCIAL_LINKS.find((link) => link.icon === 'FiMail');
                      const mailto = emailLink?.url ?? 'mailto:prajapatisandip625@gmail.com';
                      return (
                        <a
                          href={mailto}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-text-primary hover:text-accent transition-colors"
                        >
                          {emailLink?.label ?? 'prajapatisandip625@gmail.com'}
                        </a>
                      );
                    })()}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-subtle border border-accent/20 flex items-center justify-center">
                    <FiMapPin size={15} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">Location</div>
                    <span className="text-sm text-text-primary">Ahmedabad, Gujarat, India, 380015</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs text-text-muted mb-4 uppercase tracking-wider">Find me on</p>
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = ICON_MAP[link.icon];
                    return (
                      <motion.a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className={cn(
                          'w-10 h-10 rounded-xl',
                          'bg-surface-tertiary border border-border',
                          'flex items-center justify-center',
                          'text-text-secondary hover:text-text-primary',
                          'hover:border-border-hover hover:bg-surface-overlay',
                          'transition-all duration-200'
                        )}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {Icon && <Icon />}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <GlassCard hover={false} className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, job opportunity..."
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={cn(inputClass, 'resize-none')}
                    required
                  />
                </div>

                {/* Error message */}
                {status === 'error' && errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg px-4 py-2"
                  >
                    {errorMessage}
                  </motion.p>
                )}

                {/* Success message */}
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2"
                  >
                    ✓ Message sent successfully! I'll get back to you within 24 hours.
                  </motion.p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  isLoading={status === 'loading'}
                  disabled={status === 'loading' || status === 'success'}
                  rightIcon={<FiSend size={15} />}
                >
                  {status === 'success' ? 'Message Sent!' : 'Send Message'}
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
