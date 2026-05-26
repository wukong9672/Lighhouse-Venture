import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { IPOMalaysia } from "../types/ipoMalaysia";

interface Props {
  title: string;
  subtitle: string;
  data: IPOMalaysia[];
  variant: "strong" | "weak";
}

export function IPORankingCards({ title, subtitle, data, variant }: Props) {
  const isStrong = variant === "strong";

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold uppercase tracking-[-0.04em] text-white sm:text-3xl">
          {title}
        </h3>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/35">
          {subtitle}
        </p>
      </div>

      <div className="space-y-px">
        {data.map((ipo, i) => (
          <motion.div
            key={ipo.id}
            className="flex items-center gap-4 border-b border-white/5 bg-charcoal/50 px-4 py-3 transition-colors hover:bg-burntOrange/5"
            initial={{ opacity: 0, x: isStrong ? -16 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <span className="w-6 font-mono text-xs font-bold text-white/25">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0">
              <p className="truncate text-xs font-semibold text-white">
                {ipo.companyName}
              </p>
              <p className="text-[0.56rem] text-white/35">
                {ipo.sectorTheme ?? "N/A"} &middot; {ipo.listingYear}
              </p>
            </div>
            <div className="flex items-center gap-1">
              {isStrong ? (
                <ArrowUpRight size={12} className="text-burntOrange" />
              ) : (
                <ArrowDownRight size={12} className="text-red-400" />
              )}
              <span
                className={`font-mono text-sm font-bold ${
                  isStrong ? "text-burntOrange" : "text-red-400"
                }`}
              >
                {ipo.firstDayReturn !== null
                  ? `${ipo.firstDayReturn >= 0 ? "+" : ""}${ipo.firstDayReturn.toFixed(1)}%`
                  : "-"}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
