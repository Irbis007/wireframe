import type { ComponentProps } from "react";
import { Input } from "./Input";
import { IoSearchOutline } from "react-icons/io5";

type Props = {
  value: string;
  onChange: (value: string) => void;
  isActivateByClick?: boolean;
  iconPosition: ComponentProps<typeof Input>["iconPosition"];
};

export const SearchInput = ({
  value,
  onChange,
  isActivateByClick,
  iconPosition = "left",
}: Props) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      icon={<IoSearchOutline size={23} color="var(--icon-color)" />}
      iconPosition={iconPosition}
      style={{ minWidth: "360px" }}
      placeholder="Search..."
      isActivateByClick={isActivateByClick}
    />
  );
};
