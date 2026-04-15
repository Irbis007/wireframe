import type { ReactNode } from "react";
import "./style.css";
type Props = {
  title: string;
  description?: string;
  rightContent?: ReactNode;
  children: ReactNode;
  withoutHeaderGap?: boolean;
};

export const PageMarkup = ({
  title,
  description,
  rightContent,
  children,
  withoutHeaderGap,
}: Props) => {
  return (
    <div className="page_markup">
      <div className={`page_markup-top ${withoutHeaderGap && 'without-gap'}`}>
        <div className="page_markup-top_right">
          <div className="page_markup-title">{title}</div>
          <div className="page_markup-description">{description}</div>
        </div>
        <div className="page_markup-top_left">{rightContent}</div>
      </div>
      {children}
    </div>
  );
};
