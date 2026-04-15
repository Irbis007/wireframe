import { useId, type ChangeEvent } from "react";

import "./style.css";
type Props = {
  checked: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
} & (
  | {
      argAsFunc?: undefined;
      onChange: (value: boolean) => void;
    }
  | {
      argAsFunc: true;
      onChange: (value: ChangeEvent) => void;
    }
);

export const Checkbox = ({ checked, onChange, disabled, argAsFunc, indeterminate }: Props) => {
  const checkboxId = useId();
  return (
    <>
      <label className="checkbox" htmlFor={`checkbox-${checkboxId}`}>
        <input
          id={`checkbox-${checkboxId}`}
          type="checkbox"
          checked={checked}
          data-indeterminate={indeterminate}
          onChange={(e) => {
            if (argAsFunc) {
              onChange(e);
            } else {
              onChange(!!e.target.value);
            }
          }}
          disabled={disabled}
        />
      </label>
    </>
  );
};
