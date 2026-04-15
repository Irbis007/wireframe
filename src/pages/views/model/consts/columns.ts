import type { View } from "@shared/types";
import type { ColumnType } from "@widgets/list/model/types";

export const columns: ColumnType<View>[] = [
  {
    name: "Status",
    id: "status",
    type: "status",
    isSortable: true,
  },
  {
    name: "ID",
    id: "id",
    type: "text",
    isSortable: true,
  },
  {
    name: "Subject",
    id: "subject",
    type: "text",
    isSortable: true,
  },
  {
    name: "Petitioner",
    id: "petitioner",
    type: "text",
    isSortable: true,
  },
  {
    name: "Requested",
    id: "requested",
    type: "text",
    isSortable: true,
  },
  {
    name: "Actualization",
    id: "actualization",
    type: "text",
    isSortable: true,
  },
  {
    name: "Group",
    id: "group",
    type: "text",
    isSortable: true,
  },
];
