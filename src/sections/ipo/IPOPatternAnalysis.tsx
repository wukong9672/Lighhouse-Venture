import { Reveal } from "../../animations/Reveal";
import { patternCards } from "../../data/homeExperience";

export const IPOPatternAnalysis = () => (
  <section className="section-shell" id="patterns">
    <Reveal className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
      <div>
        <p className="section-kicker">Pattern analysis</p>
        <h2 className="section-title">
          Surges and failures become easier to study when the structure is calm.
        </h2>
      </div>
      <p className="section-copy">
        This stage is not a full analytics engine yet. It is the visual
        storytelling framework that will later support rankings, case studies
        and IPO strength scoring.
      </p>
    </Reveal>

    <div className="mt-14 grid gap-6 lg:grid-cols-3">
      {patternCards.map((card, index) => (
        <Reveal
          className="group border border-white/10 bg-[linear-gradient(180deg,#111923,#050608)] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/30"
          delay={index * 0.08}
          key={card.title}
        >
          <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-white">
            {index + 1}
          </div>
          <h3 className="text-3xl font-bold uppercase leading-tight text-white">
            {card.title}
          </h3>
          <p className="mt-6 text-sm font-light leading-7 text-body">
            {card.copy}
          </p>
        </Reveal>
      ))}
    </div>
  </section>
);
