import { Layers, PieChart, Shield, Zap } from "lucide-react";
import { EditorialHeading } from "../components/EditorialHeading";

const frameworkPillars = [
  {
    label: "Market Cycle",
    icon: PieChart,
  },
  {
    label: "Sector Rotation",
    icon: Layers,
  },
  {
    label: "Institutional Flow",
    icon: Zap,
  },
  {
    label: "Risk Framework",
    icon: Shield,
  },
];

export const NLFFramework = () => (
  <section
    className="border-y border-white/5 bg-charcoal px-6 py-24 sm:py-32"
    id="nlf-framework"
  >
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-16 md:grid-cols-2 md:items-end lg:gap-20">
        <EditorialHeading
          align="left"
          subtitle="The Core Philosophy"
          title="Liquidity moves markets."
        />

        <div className="pb-10">
          <p className="mb-8 text-lg font-light leading-relaxed text-white/55 sm:text-xl">
            Markets do not lack information. What is truly scarce is the
            ability to interpret it. The{" "}
            <span className="font-bold text-burntOrange underline decoration-burntOrange/60 underline-offset-8">
              NLF Framework
            </span>{" "}
            trains investors to observe liquidity, narrative strength, and
            capital rotation with institutional discipline.
          </p>

          <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10">
            {frameworkPillars.map(({ label, icon: Icon }) => (
              <div className="bg-charcoal p-4" key={label}>
                <Icon className="mb-4 text-burntOrange" size={18} />
                <span className="text-[0.63rem] font-bold uppercase tracking-[0.24em] text-white/70">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
