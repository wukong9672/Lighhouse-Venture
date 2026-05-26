/**
 * Converts the IPO Malaysia Excel file to a frontend-friendly JSON file.
 *
 * Usage:
 *   node scripts/convert-excel.mjs
 *
 * Expects:
 *   data/IPO MALAYSIA 26 MAY.xlsx  (sheet: "IPO Database Enriched")
 *
 * Outputs:
 *   src/data/ipoMalaysia.json
 */

import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import XLSX from "xlsx";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const INPUT = resolve(ROOT, "data", "IPO MALAYSIA 26 MAY.xlsx");
const OUTPUT = resolve(ROOT, "src", "data", "ipoMalaysia.json");

const workbook = XLSX.readFile(INPUT);
const sheet = workbook.Sheets["IPO Database Enriched"];

if (!sheet) {
  console.error('Sheet "IPO Database Enriched" not found.');
  console.error("Available sheets:", workbook.SheetNames.join(", "));
  process.exit(1);
}

const raw = XLSX.utils.sheet_to_json(sheet);

const clean = (val) => {
  if (val === undefined || val === null || val === "" || val === "-") return null;
  return val;
};

const toNumber = (val) => {
  if (val === undefined || val === null || val === "" || val === "-") return null;
  const n = Number(val);
  return isNaN(n) ? null : n;
};

const records = raw.map((row, index) => ({
  id: String(index + 1),
  companyName: clean(row["Company Name"]) ?? "Unknown",
  listingDate: clean(row["Listing Date"]) ?? null,
  listingYear: toNumber(row["Listing Year"]),
  ipoPrice: toNumber(row["IPO Price (RM)"]),
  firstDayClose: toNumber(row["First Day Closing Price (RM)"]),
  firstDayReturn: toNumber(row["First Day Return %"]),
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
}));

writeFileSync(OUTPUT, JSON.stringify(records, null, 2), "utf-8");

console.log(`✅ Converted ${records.length} IPO records → ${OUTPUT}`);
