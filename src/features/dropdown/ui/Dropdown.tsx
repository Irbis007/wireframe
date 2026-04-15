import { useRef, useState, type ReactNode } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import { useClickOutside } from "@shared/lib";
import "./style.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  title: ReactNode;
  arrow?: ReactNode;
  contentPosition?: "top" | "bottom" | "left" | "right";
  withShadow?: boolean;
  label?: string;
  colorType?: "white" | "black";
  isOpen?: boolean;
  width?: string;
} & (
  | {
      customContent: true;
      content: ReactNode;
      dropdownItems?: undefined;
    }
  | {
      customContent?: undefined;
      content?: undefined;
      dropdownItems: {
        title: string;
        onClick?: () => void;
      }[];
    }
);

export const Dropdown = ({
  arrow,
  title,
  content,
  contentPosition,
  customContent,
  dropdownItems,
  withShadow,
  label,
  colorType = "white",
  isOpen: defaultIsOpen,
  width,
}: Props) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef}>
      {!!label && (
        <span className="dropdown_label" onClick={() => setIsOpen(true)}>
          Role
        </span>
      )}
      <div
        className={`dropdown ${withShadow && "with_shadow"} ${colorType}`}
        style={{ width }}
      >
        <div
          className="dropdown_top"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="dropdown_text">{title}</div>
          <div
            className={`dropdown_arrow ${isOpen ? "dropdown_arrow_open" : ""}`}
          >
            {arrow || withShadow ? (
              <MdOutlineKeyboardArrowDown size={20} />
            ) : (
              <IoMdArrowDropdown size={20} />
            )}
          </div>
        </div>
        <div
          className={`dropdown_content ${isOpen ? "dropdown_content_open" : ""}`}
          data-position={contentPosition}
        >
          {customContent
            ? content
            : dropdownItems.map((item) => (
                <div
                  className="dropdown_item"
                  onClick={() => {
                    item.onClick?.();
                    setIsOpen(false);
                  }}
                >
                  {item.title}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
