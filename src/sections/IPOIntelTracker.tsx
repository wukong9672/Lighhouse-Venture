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
    <section
      className="border-t border-hairline bg-canvas px-5 py-20 sm:px-10 lg:py-24"
      id="database"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-body">
              Pattern Recognition Database
            </p>
            <h2 className="max-w-4xl text-4xl font-bold uppercase leading-[1.05] text-white sm:text-6xl">
              IPO Intelligence, tuned like race telemetry.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-light leading-8 text-body">
              Filter by company, sector, underwriter, or status. Each card keeps
              the core listing mechanics visible without turning research into a
              spreadsheet.
            </p>
          </div>

          <div className="group relative w-full md:w-72">
            <Search
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted transition-colors group-focus-within:text-white"
              size={16}
            />
            <label className="sr-only" htmlFor="ipo-filter">
              Filter IPO listings
            </label>
            <input
              className="h-12 w-full border border-hairline bg-surfaceCard py-3 pl-11 pr-4 text-xs uppercase tracking-[0.18em] text-white outline-none transition-colors placeholder:text-muted focus:border-white"
              id="ipo-filter"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter database..."
              type="text"
              value={query}
            />
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-px border border-hairline bg-hairline lg:grid-cols-2"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredIpos.map((ipo) => {
              const roi = calculateRoi(ipo);
              const isPositive = roi >= 0;

              return (
                <motion.article
                  animate={{ opacity: 1, y: 0 }}
                  className="group relative overflow-hidden bg-canvas p-6 transition-colors sm:p-8 lg:p-10"
                  exit={{ opacity: 0, y: 16 }}
                  initial={{ opacity: 0, y: 16 }}
                  key={ipo.id}
                  layout
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={{ backgroundColor: "#0d0d0d" }}
                >
                  <div className="absolute inset-x-0 top-0 h-1">
                    <div
                      className={`h-full ${
                        isPositive ? "m-stripe" : "bg-hairline"
                      }`}
                    />
                  </div>

                  <div className="absolute right-0 top-0 p-6 text-right sm:p-8">
                    <div
                      className={`flex items-start justify-end text-3xl font-bold leading-none ${
                        isPositive ? "text-white" : "text-muted"
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
                    <div className="grid grid-cols-2 gap-px bg-hairline">
                      <div className="bg-surfaceSoft p-4">
                        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted">
                          IPO Price
                        </p>
                        <p className="font-mono text-lg font-bold text-white">
                          RM {ipo.ipoPrice.toFixed(2)}
                        </p>
                      </div>
                      <div className="bg-surfaceSoft p-4">
                        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted">
                          First Day
                        </p>
                        <p className="font-mono text-lg font-bold text-white">
                          RM {ipo.firstDayClose.toFixed(2)}
                        </p>
                      </div>
                      <div className="bg-surfaceSoft p-4">
                        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted">
                          Subscription
                        </p>
                        <p className="font-mono text-lg font-bold text-white">
                          {ipo.oversubscription}x
                        </p>
                      </div>
                      <div className="bg-surfaceSoft p-4">
                        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted">
                          Market Cap
                        </p>
                        <p className="font-mono text-lg font-bold text-white">
                          {ipo.marketCap}
                        </p>
                      </div>
                    </div>

                    <div className="border-l border-white bg-white p-5 text-black">
                      <p className="mb-2 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-black">
                        <BarChart3 aria-hidden="true" size={12} />
                        Signal Note
                      </p>
                      <p className="text-sm font-light leading-7 text-black/75">
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
          <div className="border border-hairline bg-surfaceCard p-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-body">
              No IPO records match this filter.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
};
