import { createColumnHelper, type ColumnDef } from "@tanstack/react-table";
import type { ColumnType, EntityType } from "../model/types";
import { FaUser } from "react-icons/fa";
import { Checkbox } from "@shared/ui";

export const useGetColumns = <EType extends EntityType>(
  columns: ColumnType<EType>[],
): ColumnDef<EType, EType[keyof EType & string]>[] => {
  const columnHelper = createColumnHelper<EType>();

  const t: ColumnDef<EType, EType[keyof EType & string]>[] = columns.map(
    (column) => {
      const cellDefaultOptions: ColumnDef<EType, EType[keyof EType & string]> =
        {
          header: typeof column.name == "string" ? column.name : "",
          enableSorting: !!column.isSortable,
          id: column.id,
        };

      switch (column.type) {
        case "text":
          return columnHelper.accessor((row) => row[column.id], {
            ...cellDefaultOptions,
          });
        case "image":
          return columnHelper.accessor((row) => row[column.id], {
            ...cellDefaultOptions,
            cell: ({ cell }) => (
              <div style={{ maxWidth: "100px", maxHeight: "40px" }}>
                <img
                  style={{ height: "41px" }}
                  src={cell.getValue() as string}
                  alt="image"
                />
              </div>
            ),
          });
        case "avatar":
          return columnHelper.accessor((row) => row[column.id], {
            ...cellDefaultOptions,
            cell: () => (
              <div
                className="list_user"
                style={{ position: "relative", right: "-15px" }}
              >
                <FaUser color="white" />
              </div>
            ),
          });
        case "status":
          return columnHelper.accessor((row) => row[column.id], {
            ...cellDefaultOptions,
            cell: ({ getValue }) => {
              const value = getValue() as string;
              return <div className="list_status">{value}</div>;
            },
          });
        case "count":
          return columnHelper.accessor((row) => row[column.id], {
            ...cellDefaultOptions,
            cell: ({ getValue }) => {
              const value = getValue() as string;
              return (
                <div className="list_count">
                  <div className="list_count-icon">{column.icon}</div>
                  <div className="list_count-subtitle">{column.subtitle}</div>
                  <div className="list_count-title">{value}</div>
                </div>
              );
            },
          });
        default:
          return columnHelper.accessor((row) => row[column.id], {
            ...cellDefaultOptions,
          });
      }
    },
  );
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          argAsFunc
          onChange={table.getToggleAllRowsSelectedHandler()} //or getToggleAllPageRowsSelectedHandler
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    },
    ...t,
  ];
};
