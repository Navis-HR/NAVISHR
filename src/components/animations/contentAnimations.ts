import type { Variants } from "framer-motion";

export const subtitleVariants: Variants = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const titleVariants: Variants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
};

export const descriptionVariants: Variants = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export const buttonVariants: Variants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const navbarVariants: Variants = {
  hidden: {
    y: -32,
    opacity: 0,
    pointerEvents: "none",
  },
  visible: {
    y: 0,
    opacity: 1,
    pointerEvents: "auto",
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    y: -24,
    opacity: 0,
    pointerEvents: "none",
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const compactNavbarVariants: Variants = {
  hidden: {
    y: -16,
    opacity: 0,
    pointerEvents: "none",
  },
  visible: {
    y: 0,
    opacity: 1,
    pointerEvents: "auto",
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    y: -12,
    opacity: 0,
    pointerEvents: "none",
    transition: {
      duration: 0.22,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const navListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

export const navItemVariants: Variants = {
  hidden: { y: 14, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.22, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    y: -8,
    opacity: 0,
    transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] },
  },
};

export const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -6,
    pointerEvents: "none",
  },
  visible: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto",
    transition: {
      duration: 0.25,
      ease: [0.33, 1, 0.68, 1],
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    pointerEvents: "none",
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};
