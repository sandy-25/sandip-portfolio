// src/components/ui/Button.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string; // Renders as anchor if provided
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-accent text-white',
    'hover:bg-accent-hover',
    'shadow-accent hover:shadow-accent-strong',
    'border border-transparent'
  ),
  secondary: cn(
    'bg-surface-tertiary text-text-primary',
    'hover:bg-surface-overlay',
    'border border-border hover:border-border-hover'
  ),
  ghost: cn(
    'bg-transparent text-text-secondary',
    'hover:bg-surface-tertiary hover:text-text-primary',
    'border border-transparent'
  ),
  outline: cn(
    'bg-transparent text-accent',
    'hover:bg-accent-subtle',
    'border border-accent/30 hover:border-accent/60'
  ),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
};

/**
 * Premium button component with multiple variants and Framer Motion hover effects.
 * Supports both button and anchor rendering.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      href,
      external,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center',
      'font-medium rounded-xl',
      'transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'relative overflow-hidden',
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <motion.span
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </>
    );

    if (href) {
      return (
        <motion.a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={baseStyles}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={baseStyles}
        disabled={disabled || isLoading}
        whileHover={!disabled && !isLoading ? { scale: 1.02 } : {}}
        whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
