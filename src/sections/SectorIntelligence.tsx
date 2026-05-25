import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { liquidityFlow, sectorCards } from "../data/sectorInsights";

export const SectorIntelligence = () => (
  <section className="bg-deepNavy px-6 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl">
      <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-white">
          Sector <span className="italic text-burntOrange">Rotation</span>{" "}
          Strategy
        </h2>
        <p className="max-w-sm text-sm uppercase leading-loose tracking-[0.22em] text-white/40">
          Capital does not leave the market. It rotates toward stronger
          narratives and cleaner liquidity.
        </p>
      </div>

      <div className="mb-8 border border-white/10 bg-pitchBlack/80 p-4 sm:p-6">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.63rem] font-bold uppercase tracking-[0.3em] text-burntOrange">
              Institutional Liquidity Flow
            </p>
            <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.05em] text-white">
              Data Centres / Utilities / Technology
            </h3>
          </div>
          <p className="text-[0.63rem] uppercase tracking-[0.24em] text-white/30">
            Indexed observation model
          </p>
        </div>

        <div className="h-80">
          <ResponsiveContainer height="100%" width="100%">
            <AreaChart
              data={liquidityFlow}
              margin={{ bottom: 0, left: -20, right: 10, top: 10 }}
            >
              <defs>
                <linearGradient id="dataCentres" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#FF6A00" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="#FF6A00" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="utilities" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#FFB347" stopOpacity={0.34} />
                  <stop offset="95%" stopColor="#FFB347" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis
                axisLine={false}
                dataKey="quarter"
                tick={{ fill: "rgba(255,255,255,0.38)", fontSize: 10 }}
                tickLine={false}
              />
              <YAxis
                axisLine={false}
                tick={{ fill: "rgba(255,255,255,0.32)", fontSize: 10 }}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 0,
                  color: "#ffffff",
                }}
                cursor={{ stroke: "rgba(255,106,0,0.45)" }}
                labelStyle={{ color: "#FFB347" }}
              />
              <Area
                dataKey="dataCentres"
                fill="url(#dataCentres)"
                name="Data Centres"
                stroke="#FF6A00"
                strokeWidth={2}
                type="monotone"
              />
              <Area
                dataKey="utilities"
                fill="url(#utilities)"
                name="Utilities"
                stroke="#FFB347"
                strokeWidth={2}
                type="monotone"
              />
              <Area
                dataKey="technology"
                fill="transparent"
                name="Technology"
                stroke="rgba(255,255,255,0.45)"
                strokeDasharray="5 5"
                strokeWidth={1.5}
                type="monotone"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {sectorCards.map((sector) => (
          <motion.article
            className="group relative min-h-[340px] overflow-hidden border border-white/10 bg-charcoal p-8 sm:p-10"
            key={sector.name}
            transition={{ duration: 0.45, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,106,0,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)] opacity-70 transition-opacity group-hover:opacity-100" />
            <div className="absolute -right-16 -top-16 h-44 w-44 border border-burntOrange/20" />
            <div className="relative z-10 flex min-h-[260px] flex-col justify-end">
              <div className="mb-5 flex flex-wrap gap-2">
                {sector.tags.map((tag) => (
                  <span
                    className="bg-burntOrange px-2 py-1 text-[0.5rem] font-bold uppercase tracking-[0.22em] text-black"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mb-5 text-3xl font-black uppercase tracking-[-0.06em] text-white transition-colors group-hover:text-burntOrange">
                {sector.name}
              </h3>
              <p className="max-w-xl text-sm leading-7 text-white/45">
                {sector.thesis}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[0.63rem] font-bold uppercase tracking-[0.22em] text-white/35 opacity-100 transition-colors group-hover:text-burntOrange md:opacity-0 md:group-hover:opacity-100">
                Explore Sector Thesis <ArrowUpRight size={12} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
