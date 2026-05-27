import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

export const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, amount: 0.22 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    {children}
  </motion.div>
);
