import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { IPO_DATABASE } from "../data/ipoListings";
import type { IPOListing } from "../types/ipo";

const calculateRoi = (ipo: IPOListing) =>
  ((ipo.firstDayClose - ipo.ipoPrice) / ipo.ipoPrice) * 100;

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
    <section className="border-t border-white/5 bg-pitchBlack px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/35">
              Phase 2: Pattern Recognition Database
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[-0.08em] text-white sm:text-6xl">
              IPO{" "}
              <span className="italic text-burntOrange">Intelligence</span>
            </h2>
          </div>

          <div className="group relative w-full md:w-72">
            <Search
              aria-hidden="true"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 transition-colors group-focus-within:text-burntOrange"
              size={16}
            />
            <label className="sr-only" htmlFor="ipo-filter">
              Filter IPO listings
            </label>
            <input
              className="w-full border-0 border-b border-white/10 bg-transparent py-3 pl-10 text-xs uppercase tracking-[0.22em] text-white outline-none transition-colors placeholder:text-white/25 focus:border-burntOrange"
              id="ipo-filter"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter by sector..."
              type="text"
              value={query}
            />
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-px border border-white/5 bg-white/5 lg:grid-cols-2"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredIpos.map((ipo) => {
              const roi = calculateRoi(ipo);
              const isPositive = roi >= 0;

              return (
                <motion.article
                  animate={{ opacity: 1, y: 0 }}
                  className="group relative overflow-hidden bg-pitchBlack p-6 transition-colors sm:p-10"
                  exit={{ opacity: 0, y: 16 }}
                  initial={{ opacity: 0, y: 16 }}
                  key={ipo.id}
                  layout
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={{ backgroundColor: "rgba(255, 106, 0, 0.035)" }}
                >
                  <div className="absolute right-0 top-0 p-6 text-right">
                    <div
                      className={`flex items-start justify-end text-3xl font-black leading-none ${
                        isPositive ? "text-burntOrange" : "text-white/45"
                      }`}
                    >
                      {isPositive ? "+" : ""}
                      {roi.toFixed(0)}%
                      <ArrowUpRight
                        aria-hidden="true"
                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                        size={16}
                      />
                    </div>
                    <span className="mt-1 block text-[0.5rem] uppercase tracking-[0.32em] text-white/25">
                      ROI
                    </span>
                  </div>

                  <div className="mb-12 max-w-[70%]">
                    <span className="mb-3 block text-[0.63rem] uppercase tracking-[0.28em] text-white/40">
                      {ipo.sector} // {ipo.underwriter}
                    </span>
                    <h3 className="text-2xl font-bold uppercase tracking-[-0.04em] text-white transition-colors group-hover:text-burntOrange">
                      {ipo.companyName}
                    </h3>
                    <p className="mt-4 inline-flex border border-white/10 px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-amberGold">
                      {ipo.status}
                    </p>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2 sm:items-end">
                    <div className="grid grid-cols-2 gap-5 sm:block sm:space-y-5">
                      <div>
                        <p className="mb-1 text-[0.56rem] font-bold uppercase tracking-[0.28em] text-white/25">
                          Oversubscription
                        </p>
                        <p className="font-mono text-lg font-bold text-white">
                          {ipo.oversubscription}x
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-[0.56rem] font-bold uppercase tracking-[0.28em] text-white/25">
                          Market Cap
                        </p>
                        <p className="font-mono text-lg font-bold text-white">
                          {ipo.marketCap}
                        </p>
                      </div>
                    </div>

                    <div className="border-l-2 border-burntOrange/30 bg-burntOrange/5 p-4">
                      <p className="mb-2 flex items-center gap-2 text-[0.56rem] font-bold uppercase tracking-[0.2em] text-burntOrange">
                        <BarChart3 aria-hidden="true" size={10} />
                        NLF Narrative
                      </p>
                      <p className="text-xs font-light italic leading-relaxed text-white/60">
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
          <div className="border border-white/5 bg-charcoal p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
              No IPO records match this institutional filter.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
};
