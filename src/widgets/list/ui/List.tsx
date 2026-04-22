import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type RowSelectionState,
  type SortingState,
  type Updater,
} from "@tanstack/react-table";
import type { ListProps, EntityType } from "../model/types";
import { useGetColumns } from "../lib/useGetColumns";

import "./style.css";
import { useCallback, useEffect, useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

export const List = <EType extends EntityType>({
  data,
  columns,
  sorting,
  setSorting,
  isSearching,
  withSelect,
}: ListProps<EType>) => {
  const [selectedRows, setSelectedRows] = useState<RowSelectionState>({});

  useEffect(() => {
    setSelectedRows({});
  }, [data]);

  const onSortingChange = useCallback(
    (updater: Updater<SortingState>) => {
      if (sorting) {
        const newSorting =
          typeof updater == "function" ? updater(sorting) : updater;
        setSorting(newSorting);
      }
    },
    [sorting, setSorting],
  );

  const onSelectChange = useCallback(
    (updater: Updater<RowSelectionState>) => {
      if (selectedRows) {
        const newSelect =
          typeof updater == "function" ? updater(selectedRows) : updater;
        setSelectedRows(newSelect);
      }
    },
    [selectedRows, setSelectedRows],
  );

  const table = useReactTable({
    columns: useGetColumns(columns),
    data: data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting, rowSelection: selectedRows },
    onSortingChange: onSortingChange,
    enableRowSelection: withSelect,
    enableSubRowSelection: false,
    enableMultiRowSelection: true,
    onRowSelectionChange: onSelectChange,
  });

  const tableRows = table.getRowModel().rows;

  return (
    <div className="list_container">
      <table className="list">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const column = header.column;
                  const sorted = column.getIsSorted();
                  return (
                    <th
                      className={header.id}
                      key={header.id}
                      data-select={withSelect ?? false}
                    >
                      {column.getCanSort() ? (
                        <div onClick={() => column.toggleSorting()}>
                          {flexRender(
                            column.columnDef.header,
                            header.getContext(),
                          )}
                          <div>
                            <GoArrowUp
                              size={18}
                              color={sorted === "asc" ? "var(--accent)" : "var(--icon-color)"}
                            />
                            <GoArrowDown
                              size={18}
                              color={sorted === "desc" ? "var(--accent)" : "var(--icon-color)"}
                            />
                          </div>
                        </div>
                      ) : (
                        flexRender(column.columnDef.header, header.getContext())
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {tableRows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    className={cell.column.id}
                    key={cell.id}
                    data-select={withSelect ?? false}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {!tableRows.length && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "40px",
          }}
        >
          {isSearching ? "No searched data" : "No data"}
        </div>
      )}
    </div>
  );
};
