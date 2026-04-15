import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import "./style.css";
import { useClickOutside } from "@shared/lib";
type Props = {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  style?: CSSProperties;
  placeholder?: string;
  label?: string;
  isActivateByClick?: boolean;
} & (
  | {
      type: "text";
      value: string;
      onChange: (value: string) => void;
    }
  | {
      type: "number";
      value: number;
      onChange: (value: number) => void;
    }
);

export const Input = ({
  type,
  value,
  onChange,
  icon,
  iconPosition,
  style,
  placeholder,
  label,
  isActivateByClick,
}: Props) => {
  const labelId = useId();
  const [isActive, setIsActive] = useState(false);

  const inputWrapper = useRef<HTMLInputElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isActive) {
      inputRef.current?.focus();
    }
  }, [isActive]);
  useClickOutside(inputWrapper, () => setIsActive(false));

  return (
    <div className={`input_wrapper`}>
      {!!label && <label htmlFor={labelId}>{label}</label>}
      <div
        className={`
          input ${iconPosition === "left" ? "icon_left" : "icon_right"}  
          ${isActivateByClick && "activatable"} 
          ${isActive && "active"}
        `}
        style={style}
        ref={inputWrapper}
      >
        <input
          id={labelId}
          type={type}
          value={value}
          ref={inputRef}
          onChange={(e) => {
            if (type === "number") {
              onChange(+e.target.value);
            } else {
              onChange(e.target.value);
            }
          }}
          placeholder={placeholder}
        />
        <span
          style={
            isActivateByClick
              ? { display: "flex", marginLeft: "auto", cursor: "pointer" }
              : {}
          }
          onClick={() => setIsActive((prev) => !prev)}
        >
          {icon}
        </span>
      </div>
    </div>
  );
};
