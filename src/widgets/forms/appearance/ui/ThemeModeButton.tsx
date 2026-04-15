import { IoCheckmark } from "react-icons/io5";
import type { ThemeType } from "../model/types";

type Props = {
  type: ThemeType;
  isActive: boolean;
  onChange: (theme: ThemeType) => void;
};

export const ThemeModeButton = ({ type, isActive, onChange }: Props) => {
  return (
    <div className={`theme_button ${type}`} onClick={() => onChange(type)}>
      <div className="theme_button-content">
        <div className="theme_button-aside">
          <div className="aside-dots">
            <div className="aside-dot theme_button-circle"></div>
            <div className="aside-dot theme_button-circle"></div>
            <div className="aside-dot theme_button-circle"></div>
          </div>
          <div className="aside-top">
            <div className="aside-circle theme_button-circle"></div>
            <div className="aside-line theme_button-line"></div>
          </div>
          <div className="aside-line theme_button-line"></div>
          <div className="aside-line theme_button-line line-70"></div>
          <div className="aside-line theme_button-line line-70"></div>
          <div className="aside-line theme_button-line"></div>
          <div className="aside-line theme_button-line line-70"></div>
        </div>

        <div className="theme_button-main">
          <div className="main-circle theme_button-circle"></div>
          <div className="main-line theme_button-line"></div>

          <div className="main-list">
            <div className="main-list_item">
              <div className="list_item-circle theme_button-circle"></div>
              <div className="list_item-line theme_button-line line-60"></div>
            </div>
            <div className="main-list_item">
              <div className="list_item-circle theme_button-circle"></div>
              <div className="list_item-line theme_button-line"></div>
            </div>
            <div className="main-list_item">
              <div className="list_item-circle theme_button-circle"></div>
              <div className="list_item-line theme_button-line line-80"></div>
            </div>
            <div className="main-list_item">
              <div className="list_item-circle theme_button-circle"></div>
              <div className="list_item-line theme_button-line line-70"></div>
            </div>
            <div className="main-list_item">
              <div className="list_item-circle theme_button-circle"></div>
              <div className="list_item-line theme_button-line line-60"></div>
            </div>
            <div className="main-list_item">
              <div className="list_item-circle theme_button-circle"></div>
              <div className="list_item-line theme_button-line"></div>
            </div>
            <div className="main-list_item">
              <div className="list_item-circle theme_button-circle"></div>
              <div className="list_item-line theme_button-line"></div>
            </div>
            <div className="main-list_item">
              <div className="list_item-circle theme_button-circle"></div>
              <div className="list_item-line theme_button-line"></div>
            </div>
          </div>
        </div>
      </div>
      {isActive && (
        <div className="theme_button-active_circle">
          <IoCheckmark
            color={
              type === "light" ? "var(--accent)" : "var(--bg-primary)"
            }
            size={12}
          />
        </div>
      )}
    </div>
  );
};
