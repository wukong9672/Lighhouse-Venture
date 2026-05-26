/**
 * Converts the IPO Malaysia Excel file to a frontend-friendly JSON file.
 *
 * Usage:
 *   node scripts/convert-excel.mjs
 *
 * Expects:
 *   "IPO MALAYSIA 26 MAY.xlsx.xlsx" at repo root  (or data/ subdirectory)
 *
 * Outputs:
 *   src/data/ipoMalaysia.json
 */

import { writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import XLSX from "xlsx";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const candidates = [
  resolve(ROOT, "IPO MALAYSIA 26 MAY.xlsx.xlsx"),
  resolve(ROOT, "IPO MALAYSIA 26 MAY.xlsx"),
  resolve(ROOT, "data", "IPO MALAYSIA 26 MAY.xlsx.xlsx"),
  resolve(ROOT, "data", "IPO MALAYSIA 26 MAY.xlsx"),
];

const INPUT = candidates.find((p) => existsSync(p));
if (!INPUT) {
  console.error("Excel file not found. Checked:", candidates);
  process.exit(1);
}
console.log("Reading:", INPUT);

const OUTPUT = resolve(ROOT, "src", "data", "ipoMalaysia.json");

const workbook = XLSX.readFile(INPUT);
const sheet = workbook.Sheets["IPO Database Enriched"];

if (!sheet) {
  console.error('Sheet "IPO Database Enriched" not found.');
  console.error("Available sheets:", workbook.SheetNames.join(", "));
  process.exit(1);
}

const raw = XLSX.utils.sheet_to_json(sheet);

function clean(val) {
  if (val === undefined || val === null || val === "" || val === "-") return null;
  if (typeof val === "string") return val.trim();
  return val;
}

function toNumber(val) {
  if (val === undefined || val === null || val === "" || val === "-") return null;
  if (typeof val === "number") return val;
  const stripped = String(val).replace(/[x%,]/gi, "").trim();
  const n = Number(stripped);
  return isNaN(n) ? null : n;
}

function excelDateToISO(serial) {
  if (typeof serial !== "number") return clean(serial);
  const epoch = new Date(Date.UTC(1899, 11, 30));
  const date = new Date(epoch.getTime() + serial * 86400000);
  return date.toISOString().split("T")[0];
}

const records = raw.map((row, index) => {
  const rawReturn = toNumber(row["First Day Return %"]);
  const firstDayReturn =
    rawReturn !== null && Math.abs(rawReturn) < 10
      ? Math.round(rawReturn * 10000) / 100
      : rawReturn;

  return {
    id: String(index + 1),
    companyName: clean(row["Company Name"]) ?? "Unknown",
    listingDate: excelDateToISO(row["Listing Date"]),
    listingYear: toNumber(row["Listing Year"]),
    ipoPrice: toNumber(row["IPO Price (RM)"]),
    firstDayClose: toNumber(row["First Day Closing Price (RM)"]),
    firstDayReturn,
    businessDescription: clean(row["Business Description"]) ?? null,
    sectorTheme: clean(row["Sector / Theme"]) ?? null,
    formalSector: clean(row["Formal Sector"]) ?? null,
    marketNarrative: clean(row["Market Theme / Narrative"]) ?? null,
    oversubscription: toNumber(row["Oversubscription (x)"]),
    underwriter: clean(row["Underwriter / Principal Adviser"]) ?? null,
    learningTags: clean(row["IPO Learning Tags"]) ?? null,
    outcomeCategory: clean(row["IPO Outcome Category"]) ?? null,
    narrativeStrength: toNumber(row["Narrative Strength Score"]),
    marketSegment: clean(row["Market Segment"]) ?? null,
  };
});

writeFileSync(OUTPUT, JSON.stringify(records, null, 2), "utf-8");

console.log(`\n✅ Converted ${records.length} IPO records → ${OUTPUT}`);
console.log(`   Years: ${[...new Set(records.map((r) => r.listingYear).filter(Boolean))].sort().join(", ")}`);
console.log(`   Sectors: ${[...new Set(records.map((r) => r.sectorTheme).filter(Boolean))].length}`);
console.log(`   Missing oversubscription: ${records.filter((r) => r.oversubscription === null).length}`);
console.log(`   Missing underwriter: ${records.filter((r) => r.underwriter === null).length}`);
