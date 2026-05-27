import { Reveal } from "../../animations/Reveal";
import { narrativeSectors } from "../../data/homeExperience";

export const SectorNarrativePreview = () => (
  <section className="section-shell">
    <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      <Reveal>
        <p className="section-kicker">Sector narrative</p>
        <h2 className="section-title">
          Sectors do not move alone. Stories move with liquidity.
        </h2>
        <p className="section-copy mt-6">
          Sector/category context appears as an analytical lens inside IPO
          education. The experience teaches why attention clusters around
          certain themes and why weak narratives struggle even when the headline
          looks attractive.
        </p>
      </Reveal>

      <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
        {narrativeSectors.map((item, index) => (
          <Reveal
            className="grid gap-5 bg-[#05070b] p-6 sm:grid-cols-[160px_1fr_110px] sm:items-center"
            delay={index * 0.06}
            key={item.sector}
          >
            <h3 className="text-2xl font-bold uppercase text-white">
              {item.sector}
            </h3>
            <p className="text-sm font-light leading-7 text-body">
              {item.thesis}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blueChrome sm:text-right">
              {item.strength}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
