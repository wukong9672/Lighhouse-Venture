export type IPOStatus = "Booming" | "Resilient" | "Neutral" | "Weak";

export interface IPOListing {
  id: string;
  companyName: string;
  sector: string;
  underwriter: string;
  businessModel: string;
  listingBoard: string;
  ipoPrice: number;
  firstDayClose: number;
  oversubscription: number;
  marketCap: string;
  status: IPOStatus;
  narrative: string;
}
