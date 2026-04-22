import { useThemeStore } from "@shared/model";
import { Header, Sidebar } from "@widgets";
import { useEffect } from "react";

import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflow: 'auto'
        }}
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
