import "./Card.css";

type CardProps = {
  id: string;
  title: string;
  description: string;
  imgUrl?: string;
  handleAddToCart?: (id: string) => void;
  style?: Record<string, Record<string, string>>;
};

const Card = ({
  id,
  title,
  description,
  imgUrl,
  handleAddToCart,
  style,
}: CardProps) => {
  return (
    <div className="card">
      <h2 className="card-title" style={style?.title ? { ...style.title } : {}}>
        {title}
      </h2>
      <div className="card-body">
        <div className="card-desc" style={style?.body ? { ...style.body } : {}}>
          <p>{description}</p>
        </div>
        <div className="card-img">
          {imgUrl && <img src={imgUrl} alt="Product Image" />}
        </div>
      </div>
      <div className="card-action">
        {handleAddToCart && (
          <button onClick={() => handleAddToCart(id)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Card;
