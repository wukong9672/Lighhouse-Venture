import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { IPO_DATABASE } from "../data/ipoListings";
import type { IPOListing } from "../types/ipo";

const calculateRoi = (ipo: IPOListing) =>
  ((ipo.firstDayClose - ipo.ipoPrice) / ipo.ipoPrice) * 100;

const statusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "booming":
      return "bg-primary text-ink";
    case "resilient":
      return "bg-success text-ink";
    case "neutral":
      return "bg-stone text-ink";
    case "weak":
      return "bg-error text-white";
    default:
      return "bg-stone text-ink";
  }
};

export const IPOIntelTracker = () => {
  const [query, setQuery] = useState("");

  const filteredIpos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return IPO_DATABASE;
    }

    return IPO_DATABASE.filter((ipo) =>
      [ipo.companyName, ipo.sector, ipo.underwriter, ipo.status].some((value) =>
        value.toLowerCase().includes(normalizedQuery),
      ),
    );
  }, [query]);

  return (
    <section className="bg-surface-dark px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Phase 2 &middot; Pattern Recognition Database
            </p>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold uppercase leading-[0.95] text-white">
              IPO <span className="text-primary">Intelligence</span>
            </h2>
          </div>

          <div className="group relative w-full md:w-72">
            <Search
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors group-focus-within:text-primary"
              size={16}
            />
            <label className="sr-only" htmlFor="ipo-filter">
              Filter IPO listings
            </label>
            <input
              className="w-full rounded-xs border border-white/10 bg-surface-deep py-3 pl-11 pr-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary"
              id="ipo-filter"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter by sector..."
              type="text"
              value={query}
            />
          </div>
        </div>

        {/* IPO cards grid */}
        <motion.div
          className="grid grid-cols-1 gap-px bg-white/5 lg:grid-cols-2"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredIpos.map((ipo) => {
              const roi = calculateRoi(ipo);
              const isPositive = roi >= 0;

              return (
                <motion.article
                  animate={{ opacity: 1, y: 0 }}
                  className="group relative overflow-hidden bg-surface-deep p-6 transition-colors sm:p-8"
                  exit={{ opacity: 0, y: 16 }}
                  initial={{ opacity: 0, y: 16 }}
                  key={ipo.id}
                  layout
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{ backgroundColor: "#111111" }}
                >
                  {/* ROI badge — top right */}
                  <div className="absolute right-6 top-6 text-right sm:right-8 sm:top-8">
                    <div
                      className={`flex items-center gap-1 text-2xl font-bold leading-none ${
                        isPositive ? "text-primary" : "text-error"
                      }`}
                    >
                      {isPositive ? "+" : ""}
                      {roi.toFixed(0)}%
                      <ArrowUpRight
                        aria-hidden="true"
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        size={14}
                      />
                    </div>
                    <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      ROI
                    </span>
                  </div>

                  {/* Company info */}
                  <div className="mb-8 max-w-[65%]">
                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
                      {ipo.sector} &middot; {ipo.underwriter}
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white transition-colors group-hover:text-primary">
                      {ipo.companyName}
                    </h3>
                    <span
                      className={`mt-3 inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${statusColor(ipo.status)}`}
                    >
                      {ipo.status}
                    </span>
                  </div>

                  {/* Metrics + narrative */}
                  <div className="grid gap-6 sm:grid-cols-2 sm:items-end">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                          Oversubscription
                        </p>
                        <p className="text-lg font-bold tabular-nums text-white">
                          {ipo.oversubscription}x
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                          Market Cap
                        </p>
                        <p className="text-lg font-bold text-white">
                          {ipo.marketCap}
                        </p>
                      </div>
                    </div>

                    <div className="border-l-2 border-primary/40 bg-white/[0.03] p-4">
                      <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                        <BarChart3 aria-hidden="true" size={10} />
                        NLF Narrative
                      </p>
                      <p className="text-xs leading-relaxed text-white/55">
                        &ldquo;{ipo.narrative}&rdquo;
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredIpos.length === 0 ? (
          <div className="bg-surface-deep p-10 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-white/35">
              No IPO records match this filter.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
};
