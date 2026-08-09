"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type MotionBaseProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: MotionBaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function HeroReveal({ children, className, delay = 0 }: MotionBaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.78, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className }: MotionBaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.11 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: MotionBaseProps) {
  return (
    <motion.div
      className={className}
      variants={itemVariants}
      transition={{ duration: 0.62, ease }}
    >
      {children}
    </motion.div>
  );
}

export function MotionArticle({ children, className }: MotionBaseProps) {
  return (
    <motion.article
      className={className}
      variants={itemVariants}
      transition={{ duration: 0.62, ease }}
    >
      {children}
    </motion.article>
  );
}

export function ProjectReveal({ children, className, delay = 0 }: MotionBaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28, clipPath: "inset(0 8% 0 0)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
      <motion.span
        aria-hidden="true"
        className="project-scan absolute inset-y-0 left-0 z-20 w-px bg-base-cyan/55 shadow-[0_0_18px_hsl(var(--signal-cyan)/0.42)]"
        initial={reduceMotion ? false : { x: "0%", opacity: 0 }}
        whileInView={reduceMotion ? undefined : { x: "min(80vw,72rem)", opacity: [0, 0.58, 0] }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2.8, delay: delay + 1.1, ease }}
      />
    </motion.article>
  );
}

export function Timeline({ children, className }: MotionBaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.ol
      className={className}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.13 } } }}
    >
      {children}
      <motion.li
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-5 top-8 w-px origin-top list-none bg-gradient-to-b from-base-cyan/80 via-base-cyan/30 to-transparent shadow-[0_0_18px_hsl(var(--signal-cyan)/0.32)] sm:left-6"
        initial={reduceMotion ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.25, ease }}
      />
    </motion.ol>
  );
}

export function TimelineItem({ children, className }: MotionBaseProps) {
  return (
    <motion.li className={className} variants={itemVariants} transition={{ duration: 0.58, ease }}>
      {children}
    </motion.li>
  );
}

export function DriftShape(props: HTMLMotionProps<"span"> & { distance?: number }) {
  const { distance = 18, ...rest } = props;
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      {...rest}
      initial={false}
      whileInView={reduceMotion ? undefined : { y: [distance * 0.45, -distance * 0.55] }}
      viewport={{ once: false, amount: 0 }}
      transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
    />
  );
}
