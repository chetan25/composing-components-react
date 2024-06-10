import Card from "../../components/Basic/Card";

const CardBasic = () => {
  return (
    <div className="cards-container">
      <h2>Basic Card Examples</h2>
      <Card
        id="1"
        title="Basic Card"
        description="This is a basic card, that takes in props"
        imgUrl="/assets/pic.jpg"
      />
      <Card
        id="1"
        title="Basic Card"
        description="This is a basic card, that takes in props"
        imgUrl="/assets/pic.jpg"
        handleAddToCart={(id: string) => {
          console.log(`The Card Id is ${id}`);
        }}
        style={{
          title: {
            color: "blue",
            fontStyle: "oblique",
          },
          body: {
            flexDirection: "column-reverse",
          },
        }}
      />
    </div>
  );
};

export default CardBasic;
