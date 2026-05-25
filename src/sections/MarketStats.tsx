import { EditorialHeading } from "../components/EditorialHeading";
import { StatBlock } from "../components/StatBlock";
import { platformStats } from "../data/platformStats";

export const MarketStats = () => (
  <section className="bg-pitchBlack px-6 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl">
      <EditorialHeading
        subtitle="5-Year Historical Performance"
        title="The Pattern of Alpha"
      />

      <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-3">
        {platformStats.map(({ label, value, description, icon: Icon }) => (
          <StatBlock
            description={description}
            icon={<Icon size={34} strokeWidth={1.5} />}
            key={label}
            label={label}
            value={value}
          />
        ))}
      </div>
    </div>
  </section>
);
