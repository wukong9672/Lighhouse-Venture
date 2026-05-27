import { IPOIntelTracker } from "./sections/IPOIntelTracker";

function App() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      {/* Nav bar */}
      <nav className="flex h-[60px] items-center justify-between border-b border-hairline bg-canvas px-6 sm:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center bg-primary">
            <span className="text-sm font-bold text-ink">M</span>
          </div>
          <span className="text-sm font-bold uppercase tracking-wider text-ink">
            MY IPO Intel
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-sm font-bold text-mute sm:block">
            Bursa Malaysia
          </span>
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-bold text-ink">
            LIVE
          </span>
        </div>
      </nav>

      {/* Hero — black storytelling mode */}
      <section className="bg-surface-dark px-6 py-20 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            Malaysia Institutional IPO Intelligence
          </p>
          <h1 className="max-w-5xl text-[clamp(2.5rem,7vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-white">
            Build the market
            <br />
            intelligence layer
            <br />
            <span className="text-primary">before the crowd</span>
            <br />
            sees the narrative.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70">
            Institutional-grade IPO analytics, pattern recognition, and
            narrative intelligence for Bursa Malaysia — built for the
            disciplined investor.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button className="rounded-xs bg-primary px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-primary-deep">
              Explore IPO Database
            </button>
            <button className="rounded-xs border border-white/16 bg-transparent px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/5">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Feature tiles — white catalogue mode with one yellow accent */}
      <section className="bg-canvas px-6 py-20 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-px bg-hairline sm:grid-cols-3">
          {[
            {
              label: "Framework",
              value: "Narrative & Liquidity",
              variant: "light" as const,
            },
            {
              label: "Market",
              value: "Bursa Malaysia",
              variant: "dark" as const,
            },
            {
              label: "Focus",
              value: "IPO Intelligence",
              variant: "yellow" as const,
            },
          ].map(({ label, value, variant }) => (
            <div
              className={`p-8 ${
                variant === "dark"
                  ? "bg-surface-dark text-white"
                  : variant === "yellow"
                    ? "bg-primary text-ink"
                    : "bg-canvas text-ink"
              }`}
              key={label}
            >
              <p
                className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                  variant === "dark"
                    ? "text-white/50"
                    : variant === "yellow"
                      ? "text-ink/50"
                      : "text-mute"
                }`}
              >
                {label}
              </p>
              <p className="mt-4 text-xl font-bold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IPO Intelligence Tracker */}
      <IPOIntelTracker />

      {/* Footer — black closing */}
      <footer className="bg-surface-dark px-6 py-16 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <div className="flex h-10 w-10 items-center justify-center bg-primary">
            <span className="text-lg font-bold text-ink">M</span>
          </div>
          <p className="text-sm text-white/50">
            Malaysia IPO Intelligence Platform
          </p>
          <p className="text-xs text-white/30">
            Built for institutional-grade market analysis.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
