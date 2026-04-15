import type { ListStatus } from "../listStatus";

export type Customer = {
  userAvatar: string;
  name: string;
  email: string;
  status: ListStatus;
  timeZone: string;
  lastUpdates: string;
};
