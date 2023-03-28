import React from "react";
import { useEffect, useState } from "react";

export default function Checkout() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button>Done!</button>
    </>
  );
}
