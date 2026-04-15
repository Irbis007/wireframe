import {
  antonyStudio,
  designHub,
  iconic,
  natural,
  newWave,
  travel,
} from "@shared/assets";
import type { Organization } from "@shared/types";

export const boardData: Organization[] = [
  {
    company: "Natural",
    kind: "Boxing platforms",
    brandImg: natural,
    revenue: "80k",
    employees: 90,
  },
  {
    company: "Iconic",
    kind: "Email marketing",
    brandImg: iconic,
    revenue: "80k",
    employees: 90,
  },
  {
    company: "New wave",
    kind: "Phone solutions",
    brandImg: newWave,
    revenue: "80k",
    employees: 90,
  },
  {
    company: "Anthony studio",
    kind: "Fashion",
    brandImg: antonyStudio,
    revenue: "80k",
    employees: 90,
  },
  {
    company: "Acme inc.",
    kind: "Boxing platforms",
    brandImg: travel,
    revenue: "80k",
    employees: 90,
  },
  {
    company: "Lemon republic",
    kind: "Email marketing",
    brandImg: designHub,
    revenue: "80k",
    employees: 90,
  },
];
