import React from "react";
import { useEffect, useState } from "react";

export default function Checkout() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(1);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); //now using array, useEffect will only be action for count. 

  return (
    <>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setData(data + 1)}>Update</button>
      <p>You clicked Click Me {data} times</p>

    </>
  );
}
