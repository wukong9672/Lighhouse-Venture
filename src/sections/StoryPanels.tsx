import { motion } from "framer-motion";
import { BarChart3, Shield, TrendingUp, TriangleAlert } from "lucide-react";

const revealTransition = {
  duration: 0.85,
  ease: [0.22, 1, 0.36, 1],
} as const;

const reveal = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0 },
};

const storyStats = [
  {
    label: "Top IPO Surge Avg",
    value: "+186%",
    icon: TrendingUp,
  },
  {
    label: "Oversubscription",
    value: "95x",
    icon: BarChart3,
  },
  {
    label: "Capital Raised",
    value: "RM2.3B",
    icon: TriangleAlert,
  },
];

export const StoryPanels = () => (
  <div id="top">
    <section className="story-panel relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-pitchBlack px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:44px_44px] opacity-10" />

      <motion.div
        className="relative z-10 max-w-6xl text-center"
        initial="hidden"
        transition={{ staggerChildren: 0.13 }}
        viewport={{ once: true, margin: "-80px" }}
        whileInView="visible"
      >
        <motion.div
          className="mb-8 inline-block border border-burntOrange/30 bg-burntOrange/5 px-4 py-2 text-[0.63rem] font-bold uppercase tracking-[0.4em] text-burntOrange"
          transition={revealTransition}
          variants={reveal}
        >
          Institutional Storytelling
        </motion.div>
        <motion.h1
          className="mb-8 text-6xl font-black uppercase leading-[0.85] tracking-[-0.09em] text-white md:text-9xl"
          transition={revealTransition}
          variants={reveal}
        >
          Malaysia IPO
          <br />
          <span className="text-white/30">Intelligence</span>
        </motion.h1>
        <motion.p
          className="mx-auto mb-12 max-w-xl text-lg font-light leading-relaxed tracking-wide text-white/45"
          transition={revealTransition}
          variants={reveal}
        >
          5 years of Malaysian IPO data, deep research patterns, and
          proprietary institutional insight.
        </motion.p>
        <motion.div
          className="flex flex-col items-center justify-center gap-4 md:flex-row"
          transition={revealTransition}
          variants={reveal}
        >
          <a
            className="bg-burntOrange px-10 py-4 text-xs font-bold uppercase tracking-[0.24em] text-black transition-transform hover:scale-[1.02]"
            href="#ipo-intelligence"
          >
            Explore Dashboard
          </a>
          <a
            className="border border-white/10 px-10 py-4 text-xs font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/5"
            href="#nlf-framework"
          >
            View Research
          </a>
        </motion.div>
      </motion.div>
    </section>

    <section className="story-panel relative z-20 flex min-h-screen items-center justify-center bg-charcoal px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:gap-20">
        <motion.div
          initial="hidden"
          transition={{ staggerChildren: 0.14 }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView="visible"
        >
          <motion.h2
            className="mb-8 text-4xl font-bold leading-tight tracking-[-0.06em] text-white md:text-6xl"
            transition={revealTransition}
            variants={reveal}
          >
            Why most retail
            <br />
            investors <span className="text-burntOrange">fail</span> to
            scale.
          </motion.h2>
          <motion.p
            className="mb-10 text-lg font-light leading-relaxed text-white/45 sm:text-xl"
            transition={revealTransition}
            variants={reveal}
          >
            Retail players react to news. Institutions react to{" "}
            <span className="text-white">market structure</span>. The platform
            bridges the gap with cleaner IPO demand, sector, and liquidity
            context.
          </motion.p>
          <motion.div
            className="space-y-4"
            transition={revealTransition}
            variants={reveal}
          >
            {["Information Asymmetry", "Poor Entry Timing"].map((item) => (
              <div
                className="flex items-center gap-4 text-xs uppercase tracking-[0.26em] text-white/60"
                key={item}
              >
                <div className="h-px w-10 bg-burntOrange" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="glass-card orange-glow p-8 sm:p-12"
          initial="hidden"
          transition={revealTransition}
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          whileInView="visible"
        >
          <div className="mb-4 text-[7rem] font-black leading-none tracking-[-0.12em] text-burntOrange sm:text-[8rem]">
            84<span className="text-3xl tracking-normal">%</span>
          </div>
          <p className="text-sm uppercase leading-loose tracking-[0.2em] text-white/50">
            Retail investors often miss early IPO momentum because historical
            oversubscription and float context are difficult to interpret.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="story-panel relative z-30 flex min-h-screen items-center justify-center bg-pitchBlack px-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-px border border-white/5 bg-white/5 md:grid-cols-3">
          {storyStats.map(({ label, value, icon: Icon }, index) => (
            <motion.article
              className="flex flex-col items-center border border-white/5 bg-pitchBlack p-10 text-center sm:p-16"
              initial={reveal.hidden}
              key={label}
              transition={{ ...revealTransition, delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.4 }}
              whileInView={reveal.visible}
            >
              <Icon
                className="mb-8 text-burntOrange"
                size={34}
                strokeWidth={1.5}
              />
              <div className="mb-4 text-6xl font-bold tracking-[-0.08em] text-white">
                {value}
              </div>
              <div className="text-[0.63rem] uppercase tracking-[0.3em] text-white/35">
                {label}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="story-panel relative z-40 flex min-h-screen items-center justify-center overflow-hidden bg-charcoal px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,106,0,0.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.07),transparent_46%)] opacity-80" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-10" />
      <motion.div
        className="relative z-10 max-w-4xl px-2 text-center"
        initial="hidden"
        transition={{ staggerChildren: 0.16 }}
        viewport={{ once: true, amount: 0.35 }}
        whileInView="visible"
      >
        <motion.h2
          className="mb-10 text-5xl font-black italic uppercase leading-[0.9] tracking-[-0.08em] text-white md:text-8xl"
          transition={revealTransition}
          variants={reveal}
        >
          AI & Data Centre <span className="text-burntOrange">Boom</span>
        </motion.h2>
        <motion.p
          className="mb-12 text-lg font-light leading-relaxed text-white/50 sm:text-xl"
          transition={revealTransition}
          variants={reveal}
        >
          The next Malaysian IPO wave is shifting toward high-growth
          infrastructure. We track liquidity rotation before it becomes the
          mainstream market story.
        </motion.p>
        <motion.div
          className="inline-flex flex-col items-center gap-4 border border-burntOrange/20 bg-burntOrange/10 px-8 py-4 sm:flex-row sm:gap-6"
          transition={revealTransition}
          variants={reveal}
        >
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-burntOrange">
            Upcoming Tech Pipeline
          </span>
          <span className="hidden h-4 w-px bg-burntOrange/30 sm:block" />
          <span className="font-mono text-xl font-bold tracking-[-0.05em] text-white">
            07 PROJECTS
          </span>
        </motion.div>
      </motion.div>
    </section>

    <section
      className="story-panel relative z-50 flex min-h-screen items-center justify-center bg-pitchBlack px-6"
      id="inner-circle"
    >
      <div className="w-full max-w-3xl text-center">
        <motion.div
          className="mb-12 sm:mb-16"
          initial="hidden"
          transition={{ staggerChildren: 0.16 }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView="visible"
        >
          <motion.div
            className="mx-auto mb-10 flex h-16 w-16 items-center justify-center bg-burntOrange"
            transition={revealTransition}
            variants={reveal}
          >
            <Shield color="#050505" size={32} strokeWidth={3} />
          </motion.div>
          <motion.h2
            className="mb-6 text-4xl font-bold uppercase leading-[0.9] tracking-[-0.07em] text-white md:text-7xl"
            transition={revealTransition}
            variants={reveal}
          >
            Ready for the
            <br />
            <span className="text-burntOrange">Inner Circle?</span>
          </motion.h2>
          <motion.p
            className="text-lg font-light uppercase tracking-[0.22em] text-white/40"
            transition={revealTransition}
            variants={reveal}
          >
            Limited to 50 institutional members
          </motion.p>
        </motion.div>
        <motion.a
          className="inline-flex w-full justify-center bg-white px-8 py-7 text-sm font-black uppercase tracking-[0.32em] text-black transition-colors duration-500 hover:bg-burntOrange hover:text-white"
          href="mailto:apply@example.com"
          initial={reveal.hidden}
          transition={revealTransition}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={reveal.visible}
        >
          Apply for Access Now
        </motion.a>
      </div>
    </section>
  </div>
);
