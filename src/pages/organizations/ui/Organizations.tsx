import { useState } from "react";
import {
  Button,
  PageMarkup,
  SearchInput,
} from "@shared/ui";
import { FaList } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";

import "./style.css";
import { List } from "@widgets";
import { boardData, columns, listData } from "../model/consts";
import { Board } from "./board/Borad";
import { searchData } from "@shared/lib";
import { Dropdown } from "@features/dropdown";

export const Organizations = () => {
  const [search, setValue] = useState("");
  const [organizationMode, setOrganizationsMode] = useState<"list" | "grid">(
    "list",
  );
  const listRows = listData.filter((row) => searchData(row.company, search));
  const boardCards = boardData.filter((card) =>
    searchData(card.company, search),
  );

  return (
    <PageMarkup
      title="Organization"
      description="Aenean consectetur odio in condimentum tristique. In blandit ante dui condimentum."
      rightContent={
        <div className="buttons">
          <Dropdown
            title="Actions"
            colorType="white"
            withShadow
            dropdownItems={[
              {
                title: "Actions",
              },
              {
                title: "import CSV",
              },
              {
                title: "Export CSV",
              },
            ]}
          />
          <Button title="Add organization" />
        </div>
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <SearchInput value={search} onChange={setValue} />
        <div className="organizations_modes">
          <button onClick={() => setOrganizationsMode("list")}>
            <FaList
              size={20}
              color={organizationMode == "list" ? "var(--accent)" : "var(--icon-color)"}
            />
          </button>
          <button onClick={() => setOrganizationsMode("grid")}>
            <CgMenuGridR
              size={22}
              color={organizationMode == "grid" ? "var(--accent)" : "var(--icon-color)"}
            />
          </button>
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        {organizationMode === "list" ? (
          <List data={listRows} columns={columns} />
        ) : (
          <Board data={boardCards} />
        )}
      </div>
    </PageMarkup>
  );
};
