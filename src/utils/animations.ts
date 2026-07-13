// src/utils/animations.ts
import type { Variants } from 'framer-motion';

/**
 * Centralized Framer Motion animation variants.
 * Consistent timing and easing across the entire application.
 */

// Easing curves
export const EASING = {
  smooth: [0.4, 0, 0.2, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
  enter: [0, 0, 0.2, 1] as const,
  exit: [0.4, 0, 1, 1] as const,
};

// ================================
// Fade Variants
// ================================
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASING.smooth },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING.smooth },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING.smooth },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASING.smooth },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASING.smooth },
  },
};

// ================================
// Stagger Container
// ================================
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

// ================================
// Scale Variants
// ================================
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASING.spring },
  },
};

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

// ================================
// Slide Variants
// ================================
export const slideInFromLeft: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASING.smooth },
  },
};

export const slideInFromRight: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASING.smooth },
  },
};

// ================================
// Card Hover
// ================================
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: EASING.smooth },
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.3, ease: EASING.smooth },
  },
};

// ================================
// Text Reveal (character by character)
// ================================
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: EASING.smooth,
    },
  }),
};

// ================================
// Navbar
// ================================
export const navbarVariants: Variants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASING.smooth, delay: 0.2 },
  },
};

// ================================
// Timeline
// ================================
export const timelineItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASING.smooth },
  },
};
