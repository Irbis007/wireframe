import { useId } from "react";

import "./style.css";

type Props = {
  isActive: boolean;
  onChange: (value: boolean) => void;
};

export const Switcher = ({ isActive, onChange }: Props) => {
  const id = useId();
  const switcherId = `switcher-${id}`;
  return (
    <label className={`switcher ${isActive && "active"}`} htmlFor={switcherId}>
      <input
        type="checkbox"
        id={switcherId}
        checked={isActive}
        onChange={() => onChange(!isActive)}
      />
    </label>
  );
};
