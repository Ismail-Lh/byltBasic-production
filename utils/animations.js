const easing = [0.6, -0.05, 0.01, 0.99];

const transition = {
  transition: {
    type: 'spring',
    bounce: 0,
    ease: easing,
  },
};

export const pageTransition = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easing },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const heroImageAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.2,
      duration: 0.3,
      ease: easing,
      when: 'beforeChildren',
    },
  },
};

export const leftToRight = {
  initial: { opacity: 0, x: '-100vw' },
  animate: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

export const rightToLeft = {
  initial: { opacity: 0, x: '100vw' },
  animate: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.25 } },
};

export const cartVariants = {
  initial: { opacity: 0, x: '100%', transition: transition },
  animate: {
    opacity: 1,
    x: 0,
    transition: transition,
  },
};

export const sideBarVariants = {
  initial: { opacity: 0, x: '-100%', transition: transition },
  animate: {
    opacity: 1,
    x: 0,
    transition: transition,
  },
};

export const productModalVariants = {
  initial: { opacity: 0, zIndex: '-100', transition: transition },
  animate: { opacity: 1, zIndex: '100', x: 0, transition: transition },
};
