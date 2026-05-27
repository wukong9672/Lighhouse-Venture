import { Reveal } from "../../animations/Reveal";
import { marketCycleMoments } from "../../data/homeExperience";

export const MarketCycleTimeline = () => (
  <section className="section-shell" id="cycle">
    <Reveal className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
      <div>
        <p className="section-kicker">Market psychology</p>
        <h2 className="section-title">
          IPO behavior changes when the market cycle changes.
        </h2>
      </div>
      <p className="section-copy">
        The same IPO structure can be rewarded in one cycle and ignored in
        another. Users learn to connect listing demand with market temperature,
        sector rotation and investor risk appetite.
      </p>
    </Reveal>

    <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-5">
      {marketCycleMoments.map((moment, index) => (
        <Reveal
          className="group min-h-[260px] bg-[linear-gradient(180deg,#101722,#020305)] p-6 transition-colors hover:bg-surfaceElevated"
          delay={index * 0.06}
          key={moment.year}
        >
          <p className="text-4xl font-bold uppercase text-white">
            {moment.year}
          </p>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-blueChrome">
            {moment.mood}
          </p>
          <p className="mt-5 text-sm font-light leading-7 text-body">
            {moment.signal}
          </p>
        </Reveal>
      ))}
    </div>
  </section>
);
