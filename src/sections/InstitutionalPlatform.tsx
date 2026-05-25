import { FinalCTA } from "./FinalCTA";
import { HeroSection } from "./HeroSection";
import { IPOIntelTracker } from "./IPOIntelTracker";
import { MarketStats } from "./MarketStats";
import { NLFFramework } from "./NLFFramework";
import { SectorIntelligence } from "./SectorIntelligence";

export const InstitutionalPlatform = () => (
  <div className="bg-pitchBlack font-sans text-white selection:bg-burntOrange/30 selection:text-white">
    <HeroSection />
    <NLFFramework />
    <MarketStats />
    <div id="ipo-intelligence">
      <IPOIntelTracker />
    </div>
    <SectorIntelligence />
    <FinalCTA />
    <footer className="border-t border-white/5 px-6 py-10 text-center text-[0.63rem] uppercase tracking-[0.42em] text-white/20">
      © 2026 Malaysia Stock Intelligence Platform // Narrative & Liquidity
      Framework
    </footer>
  </div>
);
