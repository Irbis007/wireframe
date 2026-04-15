import { useState } from "react";
import { List } from "@widgets/list";
import { data, columns } from "../model/consts";
import type { SortingState } from "@tanstack/react-table";
import {
  Button,
  SearchInput,
  PageMarkup,
} from "@shared/ui";
import { PageCard } from "@features/pageCard";
import "./style.css";
import { Dropdown } from "@features/dropdown";

export const Customers = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [search, setSearch] = useState<string>("");
  const rows = data.filter((d) => d.name.includes(search));

  return (
    <PageMarkup
      title="customers"
      description="Aenean consectetur odio in condimentum tristique. In blandit ante dui condimentum."
      rightContent={
        <div className="buttons">
          <Dropdown
            title="Actions"
            withShadow
            width="140px"
            dropdownItems={[{ title: "Title 1" }, { title: "Title 2" }]}
          />
          <Button title="Add customer" />
        </div>
      }
    >
      <div className="page_cards" style={{ marginTop: "40px" }}>
        <PageCard title="2,120" subtitle="Total Customers" percent={20} />
        <PageCard title="1,220" subtitle="Members" percent={15} />
        <PageCard
          title="316"
          subtitle="Active now"
          users={["User 1", "User 2", "User 3"]}
        />
      </div>
      <div className="customers_search">
        <SearchInput value={search} onChange={setSearch} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <List
          data={rows}
          columns={columns}
          setSorting={setSorting}
          sorting={sorting}
          isSearching={!!search.length}
        />
      </div>
    </PageMarkup>
  );
};
