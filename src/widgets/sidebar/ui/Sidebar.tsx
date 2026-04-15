import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { GoOrganization } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import './style.css'

export const Sidebar = () => {
  const defaultIconSettings = {
    color: "white",
    size: 28,
  };
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <SidebarLink to={"/dashboard"}>
            <IoHomeOutline {...defaultIconSettings} />
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to={"/views"}>
            <MdDashboard {...defaultIconSettings} />
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to={"/customers"}>
            <HiUsers {...defaultIconSettings} />
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to={"/organizations"}>
            <GoOrganization {...defaultIconSettings} />
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to={"/settings"}>
            <IoMdSettings {...defaultIconSettings} />
          </SidebarLink>
        </li>
      </ul>
    </aside>
  );
};

const SidebarLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `active_sidebar_link sidebar_link` : "sidebar_link"
      }
    >
      {children}
    </NavLink>
  );
};
