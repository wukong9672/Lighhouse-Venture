import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StatBlockProps {
  label: string;
  value: string;
  description: string;
  icon: ReactNode;
}

export const StatBlock = ({
  label,
  value,
  description,
  icon,
}: StatBlockProps) => (
  <motion.article
    className="bg-pitchBlack p-8 transition-colors sm:p-10 lg:p-12"
    transition={{ duration: 0.35, ease: "easeOut" }}
    whileHover={{ backgroundColor: "rgba(255, 106, 0, 0.035)" }}
  >
    <div className="mb-6 text-burntOrange">{icon}</div>
    <div className="mb-3 text-5xl font-black tracking-[-0.08em] text-white sm:text-6xl">
      {value}
    </div>
    <div className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-white">
      {label}
    </div>
    <div className="text-[0.63rem] uppercase leading-relaxed tracking-[0.22em] text-white/35">
      {description}
    </div>
  </motion.article>
);
