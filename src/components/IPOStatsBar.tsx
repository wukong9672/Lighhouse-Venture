import { motion } from "framer-motion";
import { Activity, ArrowDown, ArrowUp, BarChart3, TrendingUp } from "lucide-react";

interface Props {
  totalCount: number;
  bestReturn: number;
  worstReturn: number;
  avgReturn: number;
  avgOversubscription: number;
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function IPOStatsBar({
  totalCount,
  bestReturn,
  worstReturn,
  avgReturn,
  avgOversubscription,
}: Props) {
  const items = [
    {
      label: "Total IPOs",
      value: String(totalCount),
      icon: BarChart3,
      accent: false,
    },
    {
      label: "Best Return",
      value: `+${bestReturn.toFixed(1)}%`,
      icon: ArrowUp,
      accent: true,
    },
    {
      label: "Worst Return",
      value: `${worstReturn.toFixed(1)}%`,
      icon: ArrowDown,
      accent: false,
    },
    {
      label: "Avg Return",
      value: `${avgReturn >= 0 ? "+" : ""}${avgReturn.toFixed(1)}%`,
      icon: TrendingUp,
      accent: avgReturn >= 0,
    },
    {
      label: "Avg Oversubscription",
      value: `${avgOversubscription.toFixed(1)}x`,
      icon: Activity,
      accent: false,
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 gap-px border border-white/5 bg-white/5 sm:grid-cols-3 lg:grid-cols-5"
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      transition={{ staggerChildren: 0.07 }}
      variants={{ hidden: {}, visible: {} }}
    >
      {items.map(({ label, value, icon: Icon, accent }) => (
        <motion.div
          key={label}
          className="flex flex-col items-center bg-pitchBlack p-5 text-center sm:p-7"
          variants={reveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Icon
            className={accent ? "text-burntOrange" : "text-white/30"}
            size={18}
            strokeWidth={1.5}
          />
          <p
            className={`mt-3 font-mono text-2xl font-bold tracking-tight sm:text-3xl ${
              accent ? "text-burntOrange" : "text-white"
            }`}
          >
            {value}
          </p>
          <p className="mt-2 text-[0.56rem] uppercase tracking-[0.28em] text-white/35">
            {label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
