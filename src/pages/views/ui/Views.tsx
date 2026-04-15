import { useState } from "react";
import {
  Button,
  PageMarkup,
  SearchInput,
} from "@shared/ui";
import "./style.css";
import type { Filter } from "../model/types";
import { List } from "@widgets";
import { columns, data } from "../model/consts";
import type { SortingState } from "@tanstack/react-table";
import { Dropdown } from "@features/dropdown";

const filtersName: Filter[] = ["Open", "In review", "Closed", "All"];

export const Views = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [sorting, setSorting] = useState<SortingState>([]);
  const rows = data
    .filter((r) => r.status === activeFilter || activeFilter === "All")
    .filter((r) => r.subject.includes(search));
  return (
    <PageMarkup
      title="Views"
      description="Aenean consectetur odio in condimentum tristique. In blandit."
      rightContent={
        <div style={{ display: "flex", gap: "30px" }}>
          <h5>March 30, 2023</h5>
          <a href="#" style={{ textDecoration: "underline", fontSize: "14px" }}>
            Link content
          </a>
        </div>
      }
    >
      <div className="views_list-settings_wrapper">
        <h5>Opened tickets</h5>
        <div className="views_list-settings">
          <div className="views_filters">
            {filtersName.map((filter) => (
              <button
                className={`
                  views_filter-button 
                  ${activeFilter === filter && "active"}
                `}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="views_search">
            <SearchInput value={search} onChange={setSearch} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        <h4>Opened and assigned tickets</h4>
        <div className="buttons">
          <Button title="Deselect All" />
          <Dropdown
            title="Edit tickets"
            withShadow
            dropdownItems={[
              {
                title: "Merge tickets",
              },
              {
                title: "Delete",
              },
              {
                title: "Mark as spam",
              },
            ]}
          />
        </div>
      </div>
      <div className="views_list">
        <List
          columns={columns}
          data={rows}
          sorting={sorting}
          setSorting={setSorting}
          isSearching={!!search.length}
          withSelect
        />
      </div>
    </PageMarkup>
  );
};
