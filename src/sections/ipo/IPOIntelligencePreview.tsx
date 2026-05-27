import { Reveal } from "../../animations/Reveal";
import { labModules } from "../../data/homeExperience";

export const IPOIntelligencePreview = () => (
  <section className="section-shell relative isolate overflow-hidden" id="lab">
    <div className="absolute inset-x-8 top-0 -z-10 h-72 rounded-full bg-bmwBlue/10 blur-3xl" />
    <Reveal className="mx-auto max-w-5xl text-center">
      <p className="section-kicker">IPO Intelligence Lab</p>
      <h2 className="section-title">
        A curated learning path from listing preparation to first-day behavior.
      </h2>
      <p className="section-copy mx-auto mt-6">
        The homepage becomes a visual syllabus. Each module teaches one part of
        IPO interpretation before the platform expands into deeper case studies
        and historical yearbooks.
      </p>
    </Reveal>

    <div className="mt-16 grid gap-5 md:grid-cols-2">
      {labModules.map((module, index) => (
        <Reveal
          className="glass-panel group min-h-[300px] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/25"
          delay={index * 0.07}
          key={module.title}
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted">
            {module.eyebrow}
          </p>
          <h3 className="mt-10 text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
            {module.title}
          </h3>
          <p className="mt-6 max-w-xl text-sm font-light leading-7 text-body">
            {module.copy}
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-white/50 via-bmwBlue/50 to-transparent" />
        </Reveal>
      ))}
    </div>
  </section>
);
