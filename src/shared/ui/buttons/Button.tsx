import "./style.css";

type Props = {
  title: string;
  onClick?: () => void;
  colorType?: "black" | "white";
};

export const Button = ({ title, onClick, colorType = "black" }: Props) => {
  return (
    <button className={`button ${colorType}`} onClick={onClick}>
      {title}
    </button>
  );
};
