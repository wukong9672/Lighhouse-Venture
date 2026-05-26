import { useMemo, useState } from "react";
import type { IPOMalaysia } from "../types/ipoMalaysia";
import rawData from "../data/ipoMalaysia.json";

const ipoData = rawData as IPOMalaysia[];

export interface IPOFilters {
  year: string;
  sector: string;
  segment: string;
  search: string;
}

export function useIPOData() {
  const [filters, setFilters] = useState<IPOFilters>({
    year: "",
    sector: "",
    segment: "",
    search: "",
  });

  const years = useMemo(() => {
    const set = new Set<number>();
    ipoData.forEach((d) => {
      if (d.listingYear) set.add(d.listingYear);
    });
    return Array.from(set).sort((a, b) => b - a);
  }, []);

  const sectors = useMemo(() => {
    const set = new Set<string>();
    ipoData.forEach((d) => {
      if (d.sectorTheme) set.add(d.sectorTheme);
    });
    return Array.from(set).sort();
  }, []);

  const segments = useMemo(() => {
    const set = new Set<string>();
    ipoData.forEach((d) => {
      if (d.marketSegment) set.add(d.marketSegment);
    });
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    return ipoData.filter((ipo) => {
      if (filters.year && ipo.listingYear !== Number(filters.year)) return false;
      if (filters.sector && ipo.sectorTheme !== filters.sector) return false;
      if (filters.segment && ipo.marketSegment !== filters.segment) return false;
      if (filters.search) {
        const q = filters.search.toLowerCase();
        if (!ipo.companyName.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  }, [filters]);

  const stats = useMemo(() => {
    const withReturn = filtered.filter((d) => d.firstDayReturn !== null);
    const returns = withReturn.map((d) => d.firstDayReturn!);
    const oversubs = filtered
      .filter((d) => d.oversubscription !== null)
      .map((d) => d.oversubscription!);

    return {
      totalCount: filtered.length,
      bestReturn: returns.length ? Math.max(...returns) : 0,
      worstReturn: returns.length ? Math.min(...returns) : 0,
      avgReturn: returns.length
        ? returns.reduce((a, b) => a + b, 0) / returns.length
        : 0,
      avgOversubscription: oversubs.length
        ? oversubs.reduce((a, b) => a + b, 0) / oversubs.length
        : 0,
    };
  }, [filtered]);

  const top10 = useMemo(() => {
    return [...filtered]
      .filter((d) => d.firstDayReturn !== null)
      .sort((a, b) => b.firstDayReturn! - a.firstDayReturn!)
      .slice(0, 10);
  }, [filtered]);

  const bottom10 = useMemo(() => {
    return [...filtered]
      .filter((d) => d.firstDayReturn !== null)
      .sort((a, b) => a.firstDayReturn! - b.firstDayReturn!)
      .slice(0, 10);
  }, [filtered]);

  return {
    data: filtered,
    allData: ipoData,
    filters,
    setFilters,
    years,
    sectors,
    segments,
    stats,
    top10,
    bottom10,
  };
}
