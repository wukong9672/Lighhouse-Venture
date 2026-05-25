import { lazy, Suspense } from "react";
import { FinalCTA } from "./FinalCTA";
import { HeroSection } from "./HeroSection";
import { IPOIntelTracker } from "./IPOIntelTracker";
import { MarketStats } from "./MarketStats";
import { NLFFramework } from "./NLFFramework";

const SectorIntelligence = lazy(() =>
  import("./SectorIntelligence").then((module) => ({
    default: module.SectorIntelligence,
  })),
);

export const InstitutionalPlatform = () => (
  <div className="bg-pitchBlack font-sans text-white selection:bg-burntOrange/30 selection:text-white">
    <HeroSection />
    <NLFFramework />
    <MarketStats />
    <div id="ipo-intelligence">
      <IPOIntelTracker />
    </div>
    <Suspense
      fallback={
        <section className="bg-deepNavy px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl border border-white/10 bg-pitchBlack p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/35">
              Loading sector liquidity intelligence...
            </p>
          </div>
        </section>
      }
    >
      <SectorIntelligence />
    </Suspense>
    <FinalCTA />
    <footer className="border-t border-white/5 px-6 py-10 text-center text-[0.63rem] uppercase tracking-[0.42em] text-white/20">
      © 2026 Malaysia Stock Intelligence Platform // Narrative & Liquidity
      Framework
    </footer>
  </div>
);
