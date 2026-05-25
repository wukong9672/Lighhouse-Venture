import { Activity, BarChart3, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PlatformStat {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export const platformStats: PlatformStat[] = [
  {
    label: "Avg. First Day Surge",
    value: "+186%",
    description: "Based on high-conviction technology IPO scenarios",
    icon: TrendingUp,
  },
  {
    label: "Subscription Ratio",
    value: "95.4x",
    description: "Median demand signal monitored by the NLF model",
    icon: Activity,
  },
  {
    label: "Capital Mobilized",
    value: "RM 2.3B",
    description: "Liquidity tracked across priority Bursa narratives",
    icon: BarChart3,
  },
];
