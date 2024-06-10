import Card from "../../components/Children-Composition/Card";

const Dummy = () => {
  return <p>Dummy</p>;
};

const CardChildren = () => {
  return (
    <div>
      <h1>Children Composed Card Examples</h1>
      <Card>
        <Card.Title>Children Composed Card</Card.Title>
        <Card.Body>
          <div>
            <div style={{ width: "200px" }}>
              <Card.Image url="/assets/pic.jpg" />
            </div>
            <p>This is a simple Children Composed Card Description</p>
          </div>
        </Card.Body>
        <Card.Action>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            <button
              onClick={() => {
                console.log("Action Clicked");
              }}
            >
              Add
            </button>
            <button
              onClick={() => {
                console.log("Action Clicked");
              }}
            >
              Fav
            </button>
          </div>
        </Card.Action>
      </Card>

      <Card type="success">
        <Card.Title>Children Composed Card</Card.Title>
        <Card.Body>
          <div>
            <p>This is a simple Children Composed Card Description</p>
            <div style={{ width: "200px" }}>
              <Card.Image url="/assets/pic.jpg" />
            </div>
          </div>
        </Card.Body>
        <Card.Action>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
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
        </Card.Action>
      </Card>

      <Card>
        <Card.Title>Children Composed Card</Card.Title>
        <Dummy />
      </Card>
    </div>
  );
};

export default CardChildren;
