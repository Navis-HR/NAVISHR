import type { Variants } from "framer-motion";
import type { MotionProps } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0, overflow: "hidden" },
  visible: {
    opacity: 1,
    overflow: "hidden",
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const imageLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const imageRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const slideInFromLeft: MotionProps = {
  initial: { x: -20, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "-20px" },
};

export const slideInFromRight: MotionProps = {
  initial: { x: 20, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "-20px" },
};

export const slideInFromTop: MotionProps = {
  initial: { y: -20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "-20px" },
};

export const slideInFromBottom: MotionProps = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "-20px" },
};

export const createSlideAnimation = (
  direction: "left" | "right" | "top" | "bottom",
  delay: number = 0
): MotionProps => {
  const baseAnimation =
    direction === "left"
      ? slideInFromLeft
      : direction === "right"
      ? slideInFromRight
      : direction === "top"
      ? slideInFromTop
      : slideInFromBottom;

  return {
    ...baseAnimation,
    transition: { ...baseAnimation.transition, delay },
  };
};
