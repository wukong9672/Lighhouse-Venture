import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const FinalCTA = () => (
  <section className="px-6 py-28 text-center sm:py-40">
    <motion.div
      className="mx-auto max-w-4xl"
      initial={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <Shield
        className="mx-auto mb-8 text-burntOrange"
        size={60}
        strokeWidth={1}
      />
      <h2 className="mb-10 text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] text-white md:text-8xl">
        Join the
        <br />
        <span className="text-burntOrange">Inner Circle</span>
      </h2>
      <p className="mb-12 text-lg font-light leading-relaxed text-white/45 sm:text-xl">
        Limited to 50 members per quarter.
        <br />
        Built for serious participants of the Malaysian capital market.
      </p>
      <a
        className="group relative inline-flex overflow-hidden bg-white px-10 py-6 text-sm font-black uppercase tracking-[0.26em] text-black transition-colors sm:px-16"
        href="mailto:apply@example.com"
      >
        <span className="relative z-10 transition-colors group-hover:text-white">
          Apply for Membership
        </span>
        <span className="absolute inset-0 translate-y-full bg-burntOrange transition-transform duration-300 group-hover:translate-y-0" />
      </a>
    </motion.div>
  </section>
);
