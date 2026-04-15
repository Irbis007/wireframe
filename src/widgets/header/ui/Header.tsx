import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { URLS } from "@shared/consts";
import { Dropdown } from "@features/dropdown";
import { useState } from "react";
import { LuMessageSquare } from "react-icons/lu";
import { RiCalendarEventFill } from "react-icons/ri";
import { FaRegBell, FaUser } from "react-icons/fa";
import { SearchInput } from "@shared/ui";
export const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="header">
      <nav>
        <ul className="header_nav">
          <li>
            <Link to={URLS.home.dashboard}>Home</Link>
          </li>
          <li>
            <Link to={URLS.customers}>Customers</Link>
          </li>
          <li>
            <Dropdown
              dropdownItems={[
                {
                  title: "Organizations",
                  onClick: () => navigate(URLS.organizations),
                },
                {
                  title: "Profile",
                  onClick: () => navigate(URLS.organizations),
                },
                {
                  title: "Settings",
                  onClick: () => navigate(URLS.settings),
                },
              ]}
              title={"Organizations"}
            />
          </li>
          <li className="disabled">
            <Link to="/">Upgrade account</Link>
          </li>
        </ul>
      </nav>
      <div className="header_right">
        <SearchInput
          value={searchValue}
          onChange={setSearchValue}
          isActivateByClick
          iconPosition="right"
        />
        <div className="header_icon">
          <LuMessageSquare size={20} color="var(--icon-color)" />
        </div>
        <div className="header_icon">
          <RiCalendarEventFill size={20} color="var(--icon-color)" />
        </div>
        <div className="header_icon">
          <FaRegBell size={20} color="var(--icon-color)" />
        </div>
        <div className="header_user">
          <Dropdown
            contentPosition="right"
            customContent
            isOpen={isUserMenuOpen}
            title={
              <div className="user_avatar">
                <FaUser size={16} color="white" />
              </div>
            }
            content={
              <div className="user_menu">
                <ul>
                  <li className="user_menu_item user_menu_profile">
                    <div className="user_avatar">
                      <FaUser size={16} color="white" />
                    </div>
                    <div className="user_info">
                      <div className="user_name">Username</div>
                      <Link
                        className="user_link"
                        to={URLS.home.dashboard}
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        View profile
                      </Link>
                    </div>
                  </li>
                  <li
                    className="user_menu_item user_menu_border"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <Link to={URLS.settings}>Last updates</Link>
                  </li>
                  <li
                    className="user_menu_item "
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <Link to={URLS.settings}>Help center</Link>
                  </li>
                  <li
                    className="user_menu_item "
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <Link to={URLS.settings}>Shortcuts</Link>
                  </li>
                  <li
                    className="user_menu_item "
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <Link to={URLS.settings}>Send feedback</Link>
                  </li>
                  <li
                    className="user_menu_item user_menu_border"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <Link to={URLS.settings}>Privacy policy</Link>
                  </li>
                  <li
                    className="user_menu_item"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <Link to={URLS.settings}>Close session</Link>
                  </li>
                </ul>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};
