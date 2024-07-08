---
Title: Component Composition in React.
Excerpt: A simple vite based React app, demonstrating different principles of building components in React.
Tech: "React, Vite, Typescript"
---

# Component Composition with React

Component composition is a technique of combining smaller components, usaually called as building blocks to create complex UI (Components, Layouts or Templates).

- This is a simple Vite scaffolded App that has 3 routes that demonstrate different ways to compose components in React.
- Note - This repo focuses on the concept of composition and that's why in some cases have taken short cut to use inline style but that could easily be switched with classes or styled components.

## Basic Composition

[Basic composition]("./src/pages/basic/index.tsx) is the simplest way of building Complex Component, by passing prop value as string to the orchestrator(Container) component that encapsulates the design and business logic. This design is usefull when:

- The requirement for the design is more so stable and not much variation in design is needed.
- Consumer just needs a plug and play component w/o worrying about the internals.
- Limited flexibility is avialable in terms of data, that is passed through props, and that can control what to render but not how.

[Code]("./src/components/Basic/Card.tsx)

```tsx
<Card
  id="1"
  title="Basic Card"
  description="This is a basic card, that takes in props"
  imgUrl="/assets/pic.jpg"
  handleAddToCart={(id: string) => {
    console.log(`The Card Id is ${id}`);
  }}
/>
```

## Prop Based Composition

In [Prop Based Composition]("./src/pages/props/index.tsx) approach we slightly invert the control a bit by providing some flexibility to the consumers in terms of design. The consumer now can control "What" to render along with the data, but the flexibility of "how" is still not provided. The design now uses props as "Slots" and let's the user control the configuration of each slot. The Card component just orchestrates how these Slots are rendered and all the logic is shifted to the consumer. The desing is usefull when:

- We need more flexibility in Component design.
- The Consumer needs more control on the "What" to render along with control of the bussiness logic.
- We still need the Card component to asthetically look the same in different variations.

[Code]("./src/components/Props-Composition/Card.tsx)

```tsx
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
      <div style={{...}}>
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
```

## Children Based Composition

[Children Based Composition]("./src/pages/children/index.tsx) is based on the same principles of Inversion of Control, where we transfer control to the consumer to decide the what and the how. But since in most cases we want our component to look asthetically the same in different places, we still control the design aspects by providing a contract in terms of Sub Components the Root component can be composed off. In the Card component case, we have provided components like Title, Body, Image and Action, to control what can be used to compose the Card as we want all card to be simialar in feel but what and how those sub component are composed off that is up to the consumer. This design is usefull when:

- We want full flexibility in our design.
- Our designs have different variations to support.

[Code]("./src/components/Children-Composition/Card.tsx)

```tsx
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
      style={{...}}
    >
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
```

## Hook Based Composition

[Hook Based Composition]("./src/pages/hooks/hooks-composition.tsx) is a way to compopose functionality as needed. Its based on Javascript composition philosophy, where functionalites are added as function, rather than inheritance.

```js
// JS based example of composition. Here we are creating helper functions
// that perform a certain functionality.
const eater = (state) => ({
  eat(amount) {
    console.log("I can Eat");
    state.energy += amount;
  },
});

const friender = (state) => ({
  befriend(friend) {
    console.log("I can be a friend");
    state.friends.push(friend);
  },
});

// Now we can create entities and add functionality as needed
function Animal(name, energy, capabilities) {
  let animal = {
    name,
    energy,
    friends: [],
  };

  const providedCapabilities = capabilities.map((capability) => {
    return capability(animal);
  });
  return Object.assign(animal, ...providedCapabilities);
}

const dog = new Animal("Bruno", 10, [eater, friender]);

console.log(dog.name); // "Bruno
console.log(dog.eat());
console.log(dog.energy); // 11
console.log(dog.befriend("Paul"));
console.log(dog.friends); // ["Paul"]
```

Using the same philosophy we can use `hooks` in React to compose functionalities and even UI as needed. Here is an example.

```ts
// the composable hook
const useUndo = <T>([state, setState]: UndoPros<T>) => {
  const histroyStateRef = useRef([state]);
  const [index, setIndex] = useState(0);

  const setHistoryState = (newState: T) => {
    const newIndex = index + 1;
    histroyStateRef.current[newIndex] = newState;
    setIndex(newIndex);
    setState(newState);
  };

  const undo = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };

  const redo = () => {
    if (
      histroyStateRef.current.length === 1 ||
      histroyStateRef.current.length === index + 1
    ) {
      return;
    }
    setIndex(index + 1);
  };

  return [histroyStateRef.current[index], setHistoryState, undo, redo] as const;
};

// how we consume it
const [message, setMessage, undoMessage, redoMessageMessage] = useUndo<string>(
  useState("")
);
```

## Local Development

- Run the following commands for local development

```bash
npm install
npm run dev
```
