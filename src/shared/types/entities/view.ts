import type { ListGroup } from "../listGroup";
import type { ListStatus } from "../listStatus";

export type View = {
  status: ListStatus;
  id: number;
  subject: string;
  petitioner: string;
  requested: string;
  actualization: string;
  group: ListGroup;
};
