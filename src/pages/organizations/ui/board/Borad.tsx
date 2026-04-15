import type { Organization } from "@shared/types";
import { BoardCard } from "./BoardCard";
import './style.css'

type Props = {
  data: Organization[];
};

export const Board = ({ data }: Props) => {
  return (
    <div className="board">
      {data.map((card, i) => (
        <BoardCard data={card} key={i} />
      ))}
    </div>
  );
};
