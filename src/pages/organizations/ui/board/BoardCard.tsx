import type { Organization } from "@shared/types";
import { FaDollarSign, FaUsers } from "react-icons/fa";

type Props = {
  data: Organization;
};
export const BoardCard = ({ data }: Props) => {
  return (
    <div className="board_card">
      <div className="board_card-top">
        <div>
          <div className="board_card-title">{data.company}</div>
          <div className="board_card-subtitle">{data.kind}</div>
        </div>
        <div className="board_card-image">
          <img src={data.brandImg} alt="img" />
        </div>
      </div>
      <div className="board_card-bottom">
        <div className="board_card-count">
          <div className="board_card-icon">
            <FaDollarSign size={14} color="var(--bg-primary)" />
          </div>
          <div className="board_card-subtitle">Revenue</div>
          <div className="board_card-title">{data.revenue}</div>
        </div>
        <div className="board_card-count">
          <div className="board_card-icon">
            <FaUsers size={14} color="var(--bg-primary)" />
          </div>
          <div className="board_card-subtitle">Employees</div>
          <div className="board_card-title">{data.employees}</div>
        </div>
      </div>
    </div>
  );
};
