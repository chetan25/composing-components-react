import { Dispatch, SetStateAction, useRef, useState } from "react";

type UndoPros<T> = [state: T, setState: Dispatch<SetStateAction<T>>];

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

export default useUndo;
