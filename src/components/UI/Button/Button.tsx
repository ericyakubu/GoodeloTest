import { FunctionComponent, MouseEvent, ReactNode } from "react";
import classes from "./Button.module.scss";

interface Props {
  text: string;
  type: "button" | "submit";
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  icon?: ReactNode;
  className?: string;
}

const Button: FunctionComponent<Props> = ({
  text,
  type,
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      className={`${classes.Button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {text} {icon}
    </button>
  );
};

export default Button;
