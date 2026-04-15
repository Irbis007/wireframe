import type { OnChangeFn, SortingState } from "@tanstack/react-table";
import type { ColumnType } from "./ColumnType";
import type { EntityType } from "./EntityType";

export type ListProps<EType extends EntityType> = {
  data: EType[];
  columns: ColumnType<EType>[];
  isSearching?: boolean;
  withSelect?: boolean;
} & (
  | {
      sorting: SortingState;
      setSorting: OnChangeFn<SortingState>;
    }
  | {
      sorting?: undefined;
      setSorting?: undefined;
    }
);
