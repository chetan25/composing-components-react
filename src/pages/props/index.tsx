import Card from "../../components/Props-Composition/Card";

const CardsProps = () => {
  return (
    <div>
      <h2>Props Composed Card Examples</h2>
      <Card
        title="Props Composed Card"
        body="This is a simple Props Composed Card Description"
      />
      <Card
        title={<h3>Props Composed Card Header as h2</h3>}
        body={
          <div>
            <p>This is a simple Props Composed Card Description</p>
            <div style={{ width: "200px", margin: "1rem" }}>
              <img
                src="/assets/pic.jpg"
                alt="Product Image"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        }
        action={
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <button
              onClick={() => {
                console.log("Action Clicked");
              }}
            >
              Add
            </button>
          </div>
        }
      />
    </div>
  );
};

export default CardsProps;
