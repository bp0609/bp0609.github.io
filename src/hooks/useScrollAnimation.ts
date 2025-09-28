import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (threshold: number = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: true,
    margin: '0px 0px -50px 0px',
  });

  return { ref, isInView };
};
