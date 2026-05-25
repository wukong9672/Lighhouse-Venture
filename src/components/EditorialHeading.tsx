import { motion } from "framer-motion";

interface EditorialHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const EditorialHeading = ({
  title,
  subtitle,
  align = "center",
}: EditorialHeadingProps) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    {subtitle ? (
      <motion.span
        className="mb-4 block text-[0.63rem] font-bold uppercase tracking-[0.4em] text-burntOrange"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {subtitle}
      </motion.span>
    ) : null}
    <motion.h2
      className="text-5xl font-black uppercase leading-[0.85] tracking-[-0.08em] text-white md:text-8xl"
      initial={{ opacity: 0, y: 30 }}
      transition={{ delay: 0.1, duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {title}
    </motion.h2>
  </div>
);
