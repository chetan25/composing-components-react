import { type ReactNode } from "react";
import "./Card.css";

type CardProps = {
  title: ReactNode;
  body: ReactNode;
  action?: ReactNode;
};

const Card = ({ title, body, action }: CardProps) => {
  return (
    <div className="card-props">
      <div className="card-props-title">{title}</div>
      <div className="card-props-body">{body}</div>
      <div className="card-props-action">{action}</div>
    </div>
  );
};

export default Card;
