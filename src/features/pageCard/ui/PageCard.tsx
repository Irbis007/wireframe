import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";
import './style.css'
type Props = {
  title: string;
  subtitle?: string;
} & (
  | {
      percent: number;
      users?: undefined;
    }
  | {
      users: string[];
      percent?: undefined;
    }
);

export const PageCard = ({ title, subtitle, percent, users }: Props) => {
  return (
    <div className="page_card">
      <div className="page_card-top">
        <div className="page_card-subtitle">{subtitle}</div>
        <div className="icon_button">
          <BsThreeDotsVertical size={20} color="var(--icon-color)" />
        </div>
      </div>
      <div className="page_card-bottom">
        <div className="page_card-title">{title}</div>

        {users ? (
          <div className="page_card-users">
            {users.map((_, index) => (
              <div key={index} className="page_card-user">
                <FaUser color="white" size={14} />
              </div>
            ))}
          </div>
        ) : (
          <div className="page_card-percent">
            <GoArrowUp size={20} />
            <p>{percent}%</p>
          </div>
        )}
      </div>
    </div>
  );
};
