import { useState } from "react";

export default function useLocalStorage(stateKey, initalState) {
  const [state, setState] = useState(() => {
    const localStorageState = localStorage.getItem(stateKey);
    if (!localStorageState) {
      return typeof initalState === "function" ? initalState() : initalState;
    }
    const localStorageData = JSON.parse(localStorageState);
    return localStorageData;
  });

  const setLocalStorageState = (input) => {
    const data = typeof input === "function" ? input(state) : input;
    const localStorageData = JSON.stringify(data);
    localStorage.setItem(stateKey, localStorageData);
    setState(data);
  };

  return [state, setLocalStorageState];
}
