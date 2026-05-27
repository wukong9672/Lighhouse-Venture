import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, BarChart3, Search } from "lucide-react";
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
      [
        ipo.companyName,
        ipo.sector,
        ipo.underwriter,
        ipo.status,
        ipo.businessModel,
        ipo.listingBoard,
      ].some((value) => value.toLowerCase().includes(normalizedQuery)),
    );
  }, [query]);

  return (
    <section className="section-shell border-t border-white/10 bg-canvas" id="database">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker mb-4">
              IPO data preview
            </p>
            <h2 className="section-title max-w-5xl">
              A calm data surface for learning how listings behave.
            </h2>
            <p className="section-copy mt-6">
              Filter by company, sector, underwriter, or status. Each card keeps
              the core listing mechanics visible without turning research into a
              spreadsheet.
            </p>
          </div>

          <div className="group relative w-full md:w-72">
            <Search
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted transition-colors group-focus-within:text-blueChrome"
              size={16}
            />
            <label className="sr-only" htmlFor="ipo-filter">
              Filter IPO listings
            </label>
            <input
              className="h-12 w-full border border-white/10 bg-white/[0.06] py-3 pl-11 pr-4 text-xs uppercase tracking-[0.18em] text-white outline-none backdrop-blur transition-colors placeholder:text-muted focus:border-blueChrome"
              id="ipo-filter"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter database..."
              type="text"
              value={query}
            />
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredIpos.map((ipo) => {
              const roi = calculateRoi(ipo);
              const isPositive = roi >= 0;

              return (
                <motion.article
                  animate={{ opacity: 1, y: 0 }}
                  className="group relative overflow-hidden bg-[#030508] p-6 transition-colors sm:p-8 lg:p-10"
                  exit={{ opacity: 0, y: 16 }}
                  initial={{ opacity: 0, y: 16 }}
                  key={ipo.id}
                  layout
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={{ backgroundColor: "#0b111a" }}
                >
                  <div className="absolute inset-x-0 top-0 h-1">
                    <div
                      className={`h-full ${isPositive ? "m-stripe" : "bg-white/15"}`}
                    />
                  </div>

                  <div className="absolute right-0 top-0 p-6 text-right sm:p-8">
                    <div
                      className={`flex items-start justify-end text-3xl font-bold leading-none ${
                        isPositive ? "text-blueChrome" : "text-muted"
                      }`}
                    >
                      {isPositive ? "+" : ""}
                      {roi.toFixed(0)}%
                      {isPositive ? (
                        <ArrowUpRight
                          aria-hidden="true"
                          className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                          size={16}
                        />
                      ) : (
                        <ArrowDownRight
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                          size={16}
                        />
                      )}
                    </div>
                    <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.32em] text-muted">
                      Day 1
                    </span>
                  </div>

                  <div className="mb-12 max-w-[68%]">
                    <span className="mb-4 block text-[0.68rem] font-bold uppercase tracking-[0.24em] text-muted">
                      {ipo.sector} / {ipo.underwriter}
                    </span>
                    <h3 className="text-2xl font-bold uppercase leading-tight text-white transition-colors group-hover:text-bodyStrong sm:text-3xl">
                      {ipo.companyName}
                    </h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <p className="border border-hairline px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-body">
                        {ipo.status}
                      </p>
                      <p className="border border-hairline px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-body">
                        {ipo.listingBoard}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-[0.95fr_1.05fr] sm:items-end">
                    <div className="grid grid-cols-2 gap-px bg-white/10">
                      <div className="bg-black/40 p-4">
                        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted">
                          IPO Price
                        </p>
                        <p className="font-mono text-lg font-bold text-white">
                          RM {ipo.ipoPrice.toFixed(2)}
                        </p>
                      </div>
                      <div className="bg-black/40 p-4">
                        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted">
                          First Day
                        </p>
                        <p className="font-mono text-lg font-bold text-white">
                          RM {ipo.firstDayClose.toFixed(2)}
                        </p>
                      </div>
                      <div className="bg-black/40 p-4">
                        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted">
                          Subscription
                        </p>
                        <p className="font-mono text-lg font-bold text-white">
                          {ipo.oversubscription}x
                        </p>
                      </div>
                      <div className="bg-black/40 p-4">
                        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted">
                          Market Cap
                        </p>
                        <p className="font-mono text-lg font-bold text-white">
                          {ipo.marketCap}
                        </p>
                      </div>
                    </div>

                    <div className="border border-white/10 bg-white/[0.07] p-5">
                      <p className="mb-2 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-blueChrome">
                        <BarChart3 aria-hidden="true" size={12} />
                        Signal Note
                      </p>
                      <p className="text-sm font-light leading-7 text-body">
                        {ipo.businessModel}. {ipo.narrative}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredIpos.length === 0 ? (
          <div className="border border-white/10 bg-surfaceCard p-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-body">
              No IPO records match this filter.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
};
