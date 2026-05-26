import { Search } from "lucide-react";
import type { IPOFilters as Filters } from "../hooks/useIPOData";

interface Props {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  years: number[];
  sectors: string[];
  segments: string[];
}

export function IPOFiltersBar({ filters, setFilters, years, sectors, segments }: Props) {
  const selectClass =
    "appearance-none border border-white/10 bg-charcoal px-4 py-3 text-xs uppercase tracking-[0.18em] text-white outline-none transition-colors focus:border-burntOrange";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <div className="group relative flex-1 sm:max-w-xs">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 transition-colors group-focus-within:text-burntOrange"
          size={14}
        />
        <input
          className="w-full border border-white/10 bg-charcoal py-3 pl-9 pr-4 text-xs uppercase tracking-[0.18em] text-white outline-none transition-colors placeholder:text-white/25 focus:border-burntOrange"
          placeholder="Search company..."
          type="text"
          value={filters.search}
          onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
        />
      </div>

      <select
        className={selectClass}
        value={filters.year}
        onChange={(e) => setFilters((f) => ({ ...f, year: e.target.value }))}
      >
        <option value="">All Years</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      <select
        className={selectClass}
        value={filters.sector}
        onChange={(e) => setFilters((f) => ({ ...f, sector: e.target.value }))}
      >
        <option value="">All Sectors</option>
        {sectors.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select
        className={selectClass}
        value={filters.segment}
        onChange={(e) => setFilters((f) => ({ ...f, segment: e.target.value }))}
      >
        <option value="">All Segments</option>
        {segments.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}
