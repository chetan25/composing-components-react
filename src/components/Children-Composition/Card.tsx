import { Children, ReactNode } from "react";
import "./Card.css";

const Card = ({
  children,
  type = "default",
}: {
  children: ReactNode;
  type?: "success" | "warning" | "default";
}) => {
  const arrayChildren = Children.toArray(children);
  let hasValidChildrens = true;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arrayChildren.forEach((chld: Record<string, any> | string | number) => {
    console.log(typeof chld);
    if (
      typeof chld === "object" &&
      chld.$$typeof === Symbol.for("react.element") &&
      chld.type.name !== "Title" &&
      chld?.type.name !== "Body" &&
      chld?.type.name !== "Action" &&
      chld?.type.name !== "Image"
    ) {
      hasValidChildrens = false;
    }
  });

  if (!hasValidChildrens) {
    return (
      <div className="card-wrapper default">
        Sorry Childrens passed are of not correct type
      </div>
    );
  }

  return <div className={`card-wrapper ${type}`}>{children}</div>;
};

const Title = ({ children }: { children: ReactNode }) => {
  return <h2 className="title">{children}</h2>;
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div className="body">{children}</div>;
};

const Image = ({ url }: { url: string }) => {
  return <img src={url} alt="Product Image" style={{ width: "100%" }} />;
};

const Action = ({ children }: { children: ReactNode }) => {
  return <div className="action">{children}</div>;
};

Card.Title = Title;
Card.Body = Body;
Card.Image = Image;
Card.Action = Action;

export default Card;
