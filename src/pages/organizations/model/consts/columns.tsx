import { FaDollarSign, FaUsers } from "react-icons/fa";
import type { Organization } from "@shared/types";
import type { ColumnType } from "@widgets/list/model/types";

export const columns: ColumnType<Organization>[] = [
  {
    name: "Brand",
    id: "brandImg",
    type: "image",
  },
  {
    name: "Company",
    id: "company",
    type: "text-bold",
  },
  {
    name: "Kind",
    id: "kind",
    type: "text",
  },
  {
    name: "Revenue",
    id: "revenue",
    type: "count",
    icon: <FaDollarSign size={20} color="var(--bg-primary)" />,
    subtitle: "Revenue",
  },
  {
    name: "Employees",
    id: "employees",
    type: "count",
    icon: <FaUsers size={20} color="var(--bg-primary)" />,
    subtitle: "Employees",
  },
];
