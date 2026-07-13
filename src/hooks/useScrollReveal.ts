import { useEffect, useRef } from 'react';
import { useInView, useAnimation } from 'framer-motion';

/**
 * Hook that triggers Framer Motion animations when element enters viewport.
 * Uses IntersectionObserver via framer-motion's useInView for performance.
 */
interface UseScrollRevealOptions {
  threshold?: number;
  once?: boolean;
  delay?: number;
}

interface UseScrollRevealReturn {
  ref: React.RefObject<HTMLDivElement | null>;
  controls: ReturnType<typeof useAnimation>;
  isInView: boolean;
}

export function useScrollReveal({
  threshold = 0.1,
  once = true,
}: UseScrollRevealOptions = {}): UseScrollRevealReturn {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: threshold, once });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  return { ref, controls, isInView };
}
