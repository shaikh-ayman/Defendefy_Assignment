import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const MotionSection: React.FC<React.ComponentProps<typeof motion.section>> = ({ children, ...rest }) => (
  <motion.section
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.18 }}
    variants={stagger}
    {...rest}
  >
    {children}
  </motion.section>
);

export const MotionDiv: React.FC<React.ComponentProps<typeof motion.div>> = ({ children, ...rest }) => (
  <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger} {...rest}>
    {children}
  </motion.div>
);

export default motion;
