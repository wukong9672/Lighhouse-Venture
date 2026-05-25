import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const ambientY = useTransform(scrollYProgress, [0, 0.35], [0, 120]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.16),transparent_42%)]"
        style={{ y: ambientY }}
      />

      <div className="relative z-10 w-full max-w-7xl">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="mb-10 border border-burntOrange/30 bg-burntOrange/5 px-4 py-2 text-[0.63rem] font-bold uppercase tracking-[0.3em] text-burntOrange">
            Bursa Malaysia Intelligence v1.0
          </div>

          <h1 className="mb-8 text-[18vw] font-black uppercase leading-none tracking-[-0.1em] text-white sm:text-[14vw] lg:text-[9vw]">
            Bursa <span className="stroke-text text-transparent">IPO</span>
            <br />
            <span className="text-burntOrange">Strategy</span>
          </h1>

          <p className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/45 md:text-xl">
            Beyond standard research. We interpret market structure through{" "}
            <span className="font-medium italic text-white">
              Narrative & Liquidity Framework (NLF)
            </span>
            .
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-6">
            <a
              className="bg-burntOrange px-8 py-5 text-center text-xs font-black uppercase tracking-[0.24em] text-black transition-colors hover:bg-white sm:px-10"
              href="#ipo-intelligence"
            >
              Access Intel Dashboard
            </a>
            <a
              className="border border-white/10 px-8 py-5 text-center text-xs font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/5 sm:px-10"
              href="#nlf-framework"
            >
              The NLF Framework
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-6 hidden items-center gap-4 text-white/20 sm:left-10 md:flex">
        <div className="h-px w-20 bg-white" />
        <span className="text-[0.63rem] uppercase tracking-[0.4em]">
          Scroll to Explore
        </span>
      </div>
    </section>
  );
};
