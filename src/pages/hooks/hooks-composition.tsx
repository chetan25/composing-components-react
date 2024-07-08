import { ChangeEvent, useState } from "react";
import useUndo from "../../components/Hook-based-Composition/undoHook";
import "./hooks.css";

const HookComposition = () => {
  const [message, setMessage, undoMessage, redoMessageMessage] =
    useUndo<string>(useState(""));

  const onMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const [items, setNewItem, undoAdd, redoAdd] = useUndo<number[]>(
    useState<number[]>([])
  );

  const addItem = () => {
    setNewItem([...items, items.length + 1]);
  };

  return (
    <div className="App">
      <h1>Usage of Undo Hook</h1>
      <div className="wrapper">
        <div className="item">
          <h2>Simple Input State Undo</h2>
          <div className="form">
            <label>Enter Message</label>
            <input value={message} onChange={onMessageChange} />
            <div>
              <button onClick={undoMessage}>Undo </button>
              <button onClick={redoMessageMessage}>Redo </button>
            </div>
          </div>
        </div>
        <div className="item">
          <h2>Undo with complex state</h2>
          <div className="form">
            <button onClick={addItem}>Add New Item</button>
            <button onClick={undoAdd}>Undo </button>
            <button onClick={redoAdd}>Redo </button>
            <div>
              <h4>List of Items </h4>
              {items.map((item) => {
                return <p key={item}> Item number is {item} </p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HookComposition;
