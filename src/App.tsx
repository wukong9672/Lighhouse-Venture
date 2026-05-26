import { IPOIntelTracker } from "./sections/IPOIntelTracker";

const signalCards = [
  ["Market Cycle", "Rotation map"],
  ["Liquidity", "Demand heat"],
  ["Narrative", "Sector strength"],
];

const specCells = [
  ["6", "Tracked IPO listings"],
  ["125.4x", "Peak subscription"],
  ["150%", "Best first-day move"],
  ["7", "Sector themes"],
];

const researchPillars = [
  {
    title: "Cockpit View",
    label: "Live research surface",
    copy: "A single black-canvas workspace for IPO price, first-day close, subscription heat, underwriter, market cap, and sector context.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Track Pace",
    label: "Momentum scan",
    copy: "Compare which listings accelerated, which stalled, and where liquidity behaved like institutional demand instead of retail noise.",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Carbon Detail",
    label: "Signal inspection",
    copy: "Study each IPO through repeatable patterns: theme strength, subscription pressure, valuation gap, and underwriter track record.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-canvas text-onDark">
      <nav className="sticky top-0 z-50 border-b border-hairline bg-canvas/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8">
          <a
            className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em]"
            href="#top"
          >
            <span className="grid h-4 w-12 grid-cols-3" aria-hidden="true">
              <span className="bg-mBlueLight" />
              <span className="bg-mBlueDark" />
              <span className="bg-mRed" />
            </span>
            IPO Research
          </a>
          <div className="hidden items-center gap-8 text-sm tracking-[0.05em] text-body md:flex">
            <a className="transition-colors hover:text-white" href="#signals">
              Signals
            </a>
            <a className="transition-colors hover:text-white" href="#database">
              Database
            </a>
            <a className="transition-colors hover:text-white" href="#research">
              Framework
            </a>
          </div>
          <a
            className="border border-white px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-black"
            href="#database"
          >
            View Data
          </a>
        </div>
      </nav>

      <section
        className="hero-photo-band relative isolate flex min-h-[calc(100vh-4rem)] items-end overflow-hidden px-5 py-16 sm:px-10 lg:py-24"
        id="top"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(0_0_0/.92),rgb(0_0_0/.55),rgb(0_0_0/.88)),url('https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2200&q=80')] bg-cover bg-center" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-canvas to-transparent" />
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.32em] text-body">
              Bursa Malaysia Stock Intelligence
            </p>
            <h1 className="max-w-5xl text-5xl font-bold uppercase leading-none text-white sm:text-7xl lg:text-[5rem]">
              Engineer the signal before the market accelerates.
            </h1>
            <p className="mt-8 max-w-2xl text-base font-light leading-8 text-bodyStrong sm:text-lg">
              A motorsport-inspired stock information interface for studying IPO
              pace, liquidity pressure, first-day performance, and the narrative
              mechanics behind Bursa listings.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                className="border border-white bg-white px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-transparent hover:text-white"
                href="#database"
              >
                Scan IPOs
              </a>
              <a
                className="border border-white px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
                href="#research"
              >
                View Framework
              </a>
            </div>
          </div>

          <div className="border border-hairline bg-black/72 p-6 backdrop-blur">
            <div className="m-stripe mb-8 h-1 w-full" />
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-body">
              Signal Board
            </p>
            <div className="mt-8 grid gap-px bg-hairline">
              {signalCards.map(([label, value]) => (
                <div className="bg-surfaceSoft p-5" key={label}>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                    {label}
                  </p>
                  <p className="mt-2 text-2xl font-bold uppercase text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-canvas px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-px bg-hairline lg:grid-cols-4">
          {specCells.map(([value, label]) => (
            <div className="bg-surfaceSoft p-6 sm:p-8" key={label}>
              <p className="text-4xl font-bold uppercase leading-none text-white sm:text-5xl">
                {value}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-body">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <IPOIntelTracker />

      <section
        className="border-t border-hairline bg-canvas px-5 py-20 sm:px-10 lg:py-24"
        id="research"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-body">
                Research Framework
              </p>
              <h2 className="max-w-4xl text-4xl font-bold uppercase leading-[1.05] text-white sm:text-6xl">
                Market observation with engineered restraint.
              </h2>
            </div>
            <p className="max-w-xl text-base font-light leading-8 text-body">
              No hype layer. No decorative voltage. Just dark editorial surfaces,
              sharp data cells, and a repeatable way to observe liquidity.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {researchPillars.map((pillar) => (
              <article
                className="group border border-hairline bg-surfaceCard"
                key={pillar.title}
              >
                <div
                  className="h-64 bg-cover bg-center grayscale transition duration-500 group-hover:grayscale-0"
                  style={{
                    backgroundImage: `linear-gradient(180deg, transparent, rgba(0,0,0,.72)), url(${pillar.image})`,
                  }}
                />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                    {pillar.label}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold uppercase text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-7 text-body">
                    {pillar.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-photo-band relative isolate overflow-hidden px-5 py-20 text-center sm:px-10 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(0_0_0/.64),rgb(0_0_0/.94)),url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=80')] bg-cover bg-center" />
        <div className="mx-auto max-w-4xl">
          <div className="m-stripe mx-auto mb-8 h-1 w-40" />
          <h2 className="text-4xl font-bold uppercase leading-[1.05] text-white sm:text-6xl">
            Make stock research visible.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-8 text-bodyStrong">
            Turn IPO data into a disciplined client conversation about demand,
            narrative, liquidity, and risk.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
