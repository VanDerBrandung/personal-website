'use client'

import { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AnimatedText({ text, letterDelay = 0.05 }: { text: string, letterDelay?: number }) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start('visible');
    }
    if (!inView) {
      ctrls.start('hidden');
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <div aria-label={text}>
      {text.split('').map((character, index) => {
        return (
          <motion.span
            ref={ref}
            aria-hidden='true'
            key={index}
            initial='hidden'
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * letterDelay,
              staggerChildren: letterDelay,
            }}
          >
            <motion.span
              aria-hidden='true'
              key={index}
              variants={characterAnimation}
            >
              {character}
            </motion.span>
          </motion.span>
        );
      })}
    </div>
  );
}
