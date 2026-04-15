import type { ReactNode } from "react";
import type { EntityType } from "./EntityType";

export type ColumnType<EType extends EntityType> = {
  isSortable?: boolean;
  id: keyof EType & string;
} & (
  | {
      withoutName: true;
      name?: undefined;
    }
  | {
      withoutName?: undefined;
      name: string;
    }
) &
  (
    | {
        type: "count";
        icon: ReactNode;
        subtitle: string;
      }
    | {
        type: "text" | "image" | "status" | "text-bold" | "price" | "avatar";
        icon?: undefined;
        subtitle?: undefined;
      }
  );
