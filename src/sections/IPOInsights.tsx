import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, TrendingDown, TrendingUp, Users } from "lucide-react";
import { useMemo } from "react";
import type { IPOMalaysia } from "../types/ipoMalaysia";

interface Props {
  data: IPOMalaysia[];
}

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function IPOInsights({ data }: Props) {
  const strongIPOs = useMemo(
    () => data.filter((d) => d.firstDayReturn !== null && d.firstDayReturn > 30),
    [data],
  );

  const weakIPOs = useMemo(
    () => data.filter((d) => d.firstDayReturn !== null && d.firstDayReturn < 0),
    [data],
  );

  const sectorPerformance = useMemo(() => {
    const map: Record<string, { total: number; count: number }> = {};
    data.forEach((d) => {
      if (d.sectorTheme && d.firstDayReturn !== null) {
        if (!map[d.sectorTheme]) map[d.sectorTheme] = { total: 0, count: 0 };
        map[d.sectorTheme].total += d.firstDayReturn;
        map[d.sectorTheme].count += 1;
      }
    });
    return Object.entries(map)
      .map(([sector, { total, count }]) => ({
        sector,
        avgReturn: total / count,
        count,
      }))
      .sort((a, b) => b.avgReturn - a.avgReturn);
  }, [data]);

  const underwriterFrequency = useMemo(() => {
    const map: Record<string, { count: number; avgReturn: number; total: number }> = {};
    data.forEach((d) => {
      if (d.underwriter) {
        if (!map[d.underwriter]) map[d.underwriter] = { count: 0, avgReturn: 0, total: 0 };
        map[d.underwriter].count += 1;
        if (d.firstDayReturn !== null) {
          map[d.underwriter].total += d.firstDayReturn;
        }
      }
    });
    return Object.entries(map)
      .map(([name, { count, total }]) => ({
        name,
        count,
        avgReturn: count > 0 ? total / count : 0,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }, [data]);

  const strongTraits = useMemo(() => {
    if (strongIPOs.length === 0) return [];
    const avgOversub =
      strongIPOs
        .filter((d) => d.oversubscription !== null)
        .reduce((s, d) => s + d.oversubscription!, 0) /
      strongIPOs.filter((d) => d.oversubscription !== null).length;
    const avgNarrative =
      strongIPOs
        .filter((d) => d.narrativeStrength !== null)
        .reduce((s, d) => s + d.narrativeStrength!, 0) /
      strongIPOs.filter((d) => d.narrativeStrength !== null).length;
    return [
      { label: "Avg Oversubscription", value: `${avgOversub.toFixed(1)}x` },
      { label: "Avg Narrative Score", value: `${avgNarrative.toFixed(1)}/10` },
      { label: "Count", value: String(strongIPOs.length) },
    ];
  }, [strongIPOs]);

  const weakTraits = useMemo(() => {
    if (weakIPOs.length === 0) return [];
    const avgOversub =
      weakIPOs
        .filter((d) => d.oversubscription !== null)
        .reduce((s, d) => s + d.oversubscription!, 0) /
      weakIPOs.filter((d) => d.oversubscription !== null).length;
    const avgNarrative =
      weakIPOs
        .filter((d) => d.narrativeStrength !== null)
        .reduce((s, d) => s + d.narrativeStrength!, 0) /
      weakIPOs.filter((d) => d.narrativeStrength !== null).length;
    return [
      { label: "Avg Oversubscription", value: `${avgOversub.toFixed(1)}x` },
      { label: "Avg Narrative Score", value: `${avgNarrative.toFixed(1)}/10` },
      { label: "Count", value: String(weakIPOs.length) },
    ];
  }, [weakIPOs]);

  return (
    <section className="border-t border-white/5 bg-charcoal px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl space-y-24">
        {/* Strong IPOs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1 }}
          variants={{ hidden: {}, visible: {} }}
        >
          <motion.div variants={reveal} transition={{ duration: 0.6 }}>
            <div className="mb-2 flex items-center gap-3">
              <TrendingUp className="text-burntOrange" size={20} />
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-burntOrange">
                Pattern Analysis
              </p>
            </div>
            <h2 className="mb-4 text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl">
              What kind of IPO went up{" "}
              <span className="text-burntOrange">strongly?</span>
            </h2>
            <p className="mb-10 max-w-2xl text-sm leading-relaxed text-white/45">
              IPOs with first-day returns above +30% share common characteristics:
              high oversubscription, strong narrative scores, and exposure to trending sectors.
            </p>
          </motion.div>
          <motion.div
            className="grid gap-px border border-white/5 bg-white/5 sm:grid-cols-3"
            variants={reveal}
            transition={{ duration: 0.5 }}
          >
            {strongTraits.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center bg-pitchBlack p-6 text-center"
              >
                <p className="font-mono text-3xl font-bold text-burntOrange">{value}</p>
                <p className="mt-2 text-[0.56rem] uppercase tracking-[0.26em] text-white/35">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
          {strongIPOs.length > 0 && (
            <motion.div
              className="mt-6 border-l-2 border-burntOrange/40 bg-burntOrange/5 p-5"
              variants={reveal}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs leading-relaxed text-white/60">
                <span className="font-bold text-burntOrange">Key Insight:</span>{" "}
                Strong IPOs typically have oversubscription above 40x, narrative strength
                above 7/10, and ride a sector-wide liquidity wave (Technology, Data Centre,
                Semiconductor).
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Weak IPOs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1 }}
          variants={{ hidden: {}, visible: {} }}
        >
          <motion.div variants={reveal} transition={{ duration: 0.6 }}>
            <div className="mb-2 flex items-center gap-3">
              <TrendingDown className="text-red-400" size={20} />
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-red-400">
                Risk Patterns
              </p>
            </div>
            <h2 className="mb-4 text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl">
              What kind of IPO performed{" "}
              <span className="text-red-400">badly?</span>
            </h2>
            <p className="mb-10 max-w-2xl text-sm leading-relaxed text-white/45">
              IPOs with negative first-day returns share warning signs: low oversubscription,
              weak narrative scores, and sectors facing headwinds.
            </p>
          </motion.div>
          <motion.div
            className="grid gap-px border border-white/5 bg-white/5 sm:grid-cols-3"
            variants={reveal}
            transition={{ duration: 0.5 }}
          >
            {weakTraits.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center bg-pitchBlack p-6 text-center"
              >
                <p className="font-mono text-3xl font-bold text-red-400">{value}</p>
                <p className="mt-2 text-[0.56rem] uppercase tracking-[0.26em] text-white/35">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
          {weakIPOs.length > 0 && (
            <motion.div
              className="mt-6 border-l-2 border-red-400/40 bg-red-400/5 p-5"
              variants={reveal}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs leading-relaxed text-white/60">
                <span className="font-bold text-red-400">Warning Sign:</span>{" "}
                Weak IPOs often have oversubscription below 6x, narrative scores below 4/10,
                and are listed during unfavorable market conditions or in declining sectors.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Sector Performance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.08 }}
          variants={{ hidden: {}, visible: {} }}
        >
          <motion.div variants={reveal} transition={{ duration: 0.6 }}>
            <div className="mb-2 flex items-center gap-3">
              <BarChart3 className="text-amberGold" size={20} />
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-amberGold">
                Sector Intelligence
              </p>
            </div>
            <h2 className="mb-4 text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl">
              Which sectors had{" "}
              <span className="text-amberGold">stronger</span> IPO performance?
            </h2>
            <p className="mb-10 max-w-2xl text-sm leading-relaxed text-white/45">
              Average first-day return by sector reveals where institutional liquidity concentrated.
            </p>
          </motion.div>
          <div className="space-y-2">
            {sectorPerformance.map(({ sector, avgReturn, count }, i) => {
              const maxReturn = sectorPerformance[0]?.avgReturn ?? 1;
              const barWidth = Math.max(
                Math.abs(avgReturn) / Math.max(Math.abs(maxReturn), 1) * 100,
                4,
              );
              const isPositive = avgReturn >= 0;

              return (
                <motion.div
                  key={sector}
                  className="flex items-center gap-4 bg-pitchBlack p-3"
                  variants={reveal}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="w-48 shrink-0 truncate text-xs font-medium text-white/70 sm:w-56">
                    {sector}
                    <span className="ml-2 text-[0.56rem] text-white/25">({count})</span>
                  </div>
                  <div className="relative flex-1 h-6">
                    <div
                      className={`h-full rounded-sm ${
                        isPositive ? "bg-burntOrange/60" : "bg-red-400/50"
                      }`}
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                  <span
                    className={`w-20 text-right font-mono text-xs font-bold ${
                      isPositive ? "text-burntOrange" : "text-red-400"
                    }`}
                  >
                    {isPositive ? "+" : ""}
                    {avgReturn.toFixed(1)}%
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Underwriter Frequency */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.08 }}
          variants={{ hidden: {}, visible: {} }}
        >
          <motion.div variants={reveal} transition={{ duration: 0.6 }}>
            <div className="mb-2 flex items-center gap-3">
              <Users className="text-amberGold" size={20} />
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-amberGold">
                Underwriter Analysis
              </p>
            </div>
            <h2 className="mb-4 text-3xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl">
              Which underwriters appeared{" "}
              <span className="text-amberGold">frequently?</span>
            </h2>
            <p className="mb-10 max-w-2xl text-sm leading-relaxed text-white/45">
              Frequency and average first-day return by principal adviser reveals
              underwriter quality patterns.
            </p>
          </motion.div>
          <div className="grid gap-px border border-white/5 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {underwriterFrequency.map(({ name, count, avgReturn }, i) => (
              <motion.div
                key={name}
                className="flex flex-col bg-pitchBlack p-5"
                variants={reveal}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <p className="mb-3 text-xs font-semibold text-white">{name}</p>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <p className="font-mono text-2xl font-bold text-white">{count}</p>
                    <p className="text-[0.5rem] uppercase tracking-[0.2em] text-white/30">
                      IPOs handled
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-mono text-sm font-bold ${
                        avgReturn >= 0 ? "text-burntOrange" : "text-red-400"
                      }`}
                    >
                      {avgReturn >= 0 ? "+" : ""}
                      {avgReturn.toFixed(1)}%
                    </p>
                    <p className="text-[0.5rem] uppercase tracking-[0.2em] text-white/30">
                      Avg return
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1">
                  <ArrowUpRight
                    size={10}
                    className={avgReturn >= 0 ? "text-burntOrange" : "text-red-400"}
                  />
                  <div className="h-1 flex-1 bg-white/5">
                    <div
                      className={`h-full ${avgReturn >= 0 ? "bg-burntOrange/50" : "bg-red-400/50"}`}
                      style={{
                        width: `${Math.min(Math.abs(avgReturn) / 1.5, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
