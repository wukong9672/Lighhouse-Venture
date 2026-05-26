import { motion } from "framer-motion";
import type { IPOMalaysia } from "../types/ipoMalaysia";

interface Props {
  data: IPOMalaysia[];
}

export function IPOTable({ data }: Props) {
  return (
    <motion.div
      className="overflow-x-auto border border-white/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <table className="w-full min-w-[900px] text-left">
        <thead>
          <tr className="border-b border-white/10 bg-charcoal">
            {[
              "Company",
              "Listing Date",
              "IPO Price",
              "Close",
              "Return %",
              "Oversub (x)",
              "Sector",
              "Underwriter",
            ].map((h) => (
              <th
                key={h}
                className="px-4 py-4 text-[0.56rem] font-bold uppercase tracking-[0.24em] text-white/40"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((ipo) => {
            const ret = ipo.firstDayReturn;
            const isPositive = ret !== null && ret >= 0;
            return (
              <tr
                key={ipo.id}
                className="border-b border-white/5 transition-colors hover:bg-burntOrange/5"
              >
                <td className="px-4 py-3 text-xs font-semibold text-white">
                  {ipo.companyName}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-white/60">
                  {ipo.listingDate ?? "-"}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-white/80">
                  {ipo.ipoPrice !== null ? `RM ${ipo.ipoPrice.toFixed(2)}` : "-"}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-white/80">
                  {ipo.firstDayClose !== null
                    ? `RM ${ipo.firstDayClose.toFixed(2)}`
                    : "-"}
                </td>
                <td
                  className={`px-4 py-3 font-mono text-xs font-bold ${
                    ret === null
                      ? "text-white/40"
                      : isPositive
                        ? "text-burntOrange"
                        : "text-red-400"
                  }`}
                >
                  {ret !== null
                    ? `${isPositive ? "+" : ""}${ret.toFixed(2)}%`
                    : "-"}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-white/60">
                  {ipo.oversubscription !== null
                    ? `${ipo.oversubscription.toFixed(1)}x`
                    : "-"}
                </td>
                <td className="px-4 py-3 text-xs text-amberGold">
                  {ipo.sectorTheme ?? "-"}
                </td>
                <td className="px-4 py-3 text-xs text-white/50">
                  {ipo.underwriter ?? "-"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className="p-8 text-center text-xs uppercase tracking-[0.24em] text-white/30">
          No IPO records match your filters.
        </div>
      )}
    </motion.div>
  );
}
