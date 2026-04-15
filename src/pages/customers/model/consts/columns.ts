import type { ColumnType } from "@widgets/list/model/types";
import type { Customer } from "@shared/types";

export const columns: ColumnType<Customer>[] = [
  {
    withoutName: true,
    type: "avatar",
    id: "userAvatar",
  },
  {
    name: "Name",
    type: "text",
    isSortable: true,
    id: "name",
  },
  {
    name: "Email",
    type: "text",
    isSortable: true,
    id: "email",
  },
  {
    name: "Status",
    type: "status",
    isSortable: true,
    id: "status",
  },
  {
    name: "Time zone",
    type: "text",
    isSortable: true,
    id: "timeZone",
  },
  {
    name: "Last updates",
    type: "text",
    isSortable: true,
    id: "lastUpdates",
  },
];
