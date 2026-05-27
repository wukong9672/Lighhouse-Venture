import { motion } from "framer-motion";
import { heroMetrics } from "../../data/homeExperience";

export const IPOHero = () => (
  <section
    className="relative isolate flex min-h-screen overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-10"
    id="top"
  >
    <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_22%,rgb(28_105_212/.22),transparent_30rem),linear-gradient(135deg,#000_0%,#05080d_42%,#000_100%)]" />
    <div
      className="absolute inset-0 -z-10 opacity-45"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,.84), rgba(0,0,0,.34), rgba(0,0,0,.88)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=80)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
    <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-canvas via-canvas/70 to-transparent" />

    <div className="mx-auto grid w-full max-w-[1440px] items-end gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,.85fr)]">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.34em] text-blueChrome sm:text-sm">
          Malaysia IPO Intelligence Lab
        </p>
        <h1 className="max-w-6xl text-5xl font-bold uppercase leading-[0.95] text-white sm:text-7xl lg:text-[6.6rem]">
          Learn how IPO markets move before the noise begins.
        </h1>
        <p className="mt-8 max-w-3xl text-base font-light leading-8 text-bodyStrong sm:text-xl sm:leading-9">
          A luxury financial education experience for reading Bursa IPO
          structure, listing demand, sector narrative, liquidity behavior and
          market psychology with institutional calm.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a className="button-luxury bg-white text-black" href="#lab">
            Enter IPO Lab
          </a>
          <a className="button-luxury border-white/70 text-white" href="#cycle">
            Study Market Cycle
          </a>
        </div>
      </motion.div>

      <motion.aside
        className="glass-panel p-5 sm:p-7"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="m-stripe mb-8 h-1 w-36" />
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted">
          Intelligence cockpit
        </p>
        <div className="mt-7 grid gap-px bg-white/10">
          {heroMetrics.map((metric) => (
            <div className="bg-black/70 p-5" key={metric.label}>
              <p className="text-xs uppercase tracking-[0.22em] text-muted">
                {metric.label}
              </p>
              <p className="mt-2 text-xl font-bold uppercase text-white">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </motion.aside>
    </div>
  </section>
);
