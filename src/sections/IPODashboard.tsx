import { motion } from "framer-motion";
import { IPOFiltersBar } from "../components/IPOFilters";
import { IPORankingCards } from "../components/IPORankingCards";
import { IPOStatsBar } from "../components/IPOStatsBar";
import { IPOTable } from "../components/IPOTable";
import { useIPOData } from "../hooks/useIPOData";
import { IPOInsights } from "./IPOInsights";

export function IPODashboard() {
  const {
    data,
    allData,
    filters,
    setFilters,
    years,
    sectors,
    segments,
    stats,
    top10,
    bottom10,
  } = useIPOData();

  return (
    <div id="ipo-intelligence">
      {/* Header */}
      <section className="border-t border-white/5 bg-pitchBlack px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/35">
              Malaysia IPO Intelligence Database
            </p>
            <h2 className="mb-3 text-4xl font-black uppercase tracking-[-0.08em] text-white sm:text-6xl">
              IPO <span className="italic text-burntOrange">Dashboard</span>
            </h2>
            <p className="mb-12 max-w-2xl text-sm leading-relaxed text-white/45">
              {allData.length} IPO records analyzed. Filter, search, and explore
              patterns across listing years, sectors, and market segments.
            </p>
          </motion.div>

          {/* Stats */}
          <IPOStatsBar {...stats} />

          {/* Filters */}
          <div className="mt-10">
            <IPOFiltersBar
              filters={filters}
              setFilters={setFilters}
              years={years}
              sectors={sectors}
              segments={segments}
            />
          </div>

          {/* Rankings */}
          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <IPORankingCards
              title="Top 10 Strongest"
              subtitle="Highest first-day return"
              data={top10}
              variant="strong"
            />
            <IPORankingCards
              title="Top 10 Weakest"
              subtitle="Lowest first-day return"
              data={bottom10}
              variant="weak"
            />
          </div>

          {/* Table */}
          <div className="mt-16">
            <h3 className="mb-6 text-xl font-bold uppercase tracking-[-0.03em] text-white">
              Full IPO Table
            </h3>
            <IPOTable data={data} />
          </div>
        </div>
      </section>

      {/* Visual Insight Sections */}
      <IPOInsights data={allData} />
    </div>
  );
}
