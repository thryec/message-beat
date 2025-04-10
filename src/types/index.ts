export interface App {
  id: string;
  name: string;
  protocol: string;
  userBase: string;
  userBaseNumber: number;
  decentralizationLevel:
    | "Low"
    | "Moderate"
    | "High"
    | "Very High"
    | "Extremely High";
  decentralizationScore: number;
  privacyRating: "Limited" | "Partial" | "Good" | "Strong";
  businessModel: string;
  e2ee: "Strong" | "Optional (default)" | "Autocrypt";
  metadataProtection: "Limited" | "Partial" | "Strong";
  idRequirement: string;
  serverDependence: string;
}

export type SortMethod = "userBase" | "decentralization" | "privacy";
