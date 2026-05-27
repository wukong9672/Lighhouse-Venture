import { IPOIntelTracker } from "../sections/IPOIntelTracker";
import { IPOHero } from "../sections/ipo/IPOHero";
import { IPOIntelligencePreview } from "../sections/ipo/IPOIntelligencePreview";
import { IPOLearningJourney } from "../sections/ipo/IPOLearningJourney";
import { IPOPatternAnalysis } from "../sections/ipo/IPOPatternAnalysis";
import { MarketCycleTimeline } from "../sections/ipo/MarketCycleTimeline";
import { SectorNarrativePreview } from "../sections/ipo/SectorNarrativePreview";

const navItems = [
  ["Lab", "#lab"],
  ["Cycle", "#cycle"],
  ["Patterns", "#patterns"],
  ["Preview Data", "#database"],
];

export const Home = () => (
  <main className="min-h-screen bg-canvas text-onDark">
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8">
        <a
          className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em]"
          href="#top"
        >
          <span className="grid h-4 w-12 grid-cols-3" aria-hidden="true">
            <span className="bg-mBlueLight" />
            <span className="bg-mBlueDark" />
            <span className="bg-mRed" />
          </span>
          IPO Lab
        </a>

        <div className="hidden items-center gap-8 text-sm tracking-[0.05em] text-body md:flex">
          {navItems.map(([label, href]) => (
            <a className="transition-colors hover:text-white" href={href} key={href}>
              {label}
            </a>
          ))}
        </div>

        <a className="button-luxury hidden border-white/70 text-white sm:inline-flex" href="#database">
          Explore
        </a>
      </div>
    </nav>

    <IPOHero />
    <IPOIntelligencePreview />
    <MarketCycleTimeline />
    <SectorNarrativePreview />
    <IPOLearningJourney />
    <IPOPatternAnalysis />
    <IPOIntelTracker />

    <section className="relative isolate overflow-hidden px-5 py-24 text-center sm:px-8 lg:px-10 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgb(28_105_212/.22),transparent_34rem),linear-gradient(180deg,#05080d,#000)]" />
      <div className="mx-auto max-w-4xl">
        <div className="m-stripe mx-auto mb-8 h-1 w-40" />
        <p className="section-kicker">Next layer</p>
        <h2 className="section-title">
          Build a calmer way to understand Malaysia IPO markets.
        </h2>
        <p className="section-copy mx-auto mt-6">
          Future phases can expand this structure into IPO yearbooks, ranking
          tables, timeline interactions, case studies and strength scoring
          without changing the premium learning flow.
        </p>
      </div>
    </section>
  </main>
);
