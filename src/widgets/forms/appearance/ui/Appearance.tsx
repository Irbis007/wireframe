import { useState } from "react";
import "./style.css";
import { ThemeModeButton } from "./ThemeModeButton";
import type { SidebarFeatures } from "../model/types";
import { Switcher } from "@shared/ui";
import { Dropdown } from "@features/dropdown";
import { useThemeStore } from "@shared/model";

export const Appearance = () => {
  const [isTransparentSidebar, setIsTransparentSidebar] = useState(false);
  const [sidebarFeatures, setSidebarFeatures] =
    useState<SidebarFeatures>("Recent changes");

  const setTheme = useThemeStore((state) => state.setNewTheme);
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className="appearance">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "25px 0",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div>
          <div className="appearance-title">Interface theme</div>
          <div className="appearance-subtitle">
            Aenean consectetur adio in condimentum tristique atum.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <ThemeModeButton
              type="dark"
              isActive={theme === "dark"}
              onChange={setTheme}
            />
            <p style={{ fontSize: "12px", fontWeight: "300" }}>Dark</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <ThemeModeButton
              type="light"
              isActive={theme === "light"}
              onChange={setTheme}
            />
            <p style={{ fontSize: "12px", fontWeight: "300" }}>Light</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "25px 0",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <div>
          <div className="appearance-title">Transparent sidebar</div>
          <div className="appearance-subtitle">
            Aenean in condimentum ante dui.
          </div>
        </div>
        <Switcher
          isActive={isTransparentSidebar}
          onChange={setIsTransparentSidebar}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "25px 0",
        }}
      >
        <div>
          <div className="appearance-title">Sidebar feature</div>
          <div className="appearance-subtitle">
            Aenean consectetur in condimentum.
          </div>
        </div>
        <Dropdown
          title={sidebarFeatures}
          width="260px"
          dropdownItems={[
            {
              title: "Recent changes",
              onClick: () => setSidebarFeatures("Recent changes"),
            },
            {
              title: "Previous changes",
              onClick: () => setSidebarFeatures("Previous changes"),
            },
            {
              title: "Historic content",
              onClick: () => setSidebarFeatures("Historic content"),
            },
          ]}
          withShadow
        />
      </div>
    </div>
  );
};
