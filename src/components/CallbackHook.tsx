import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
import React from "react";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  const incrementFatherConParametros = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
