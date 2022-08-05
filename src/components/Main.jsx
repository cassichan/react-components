import React from "react";
import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <main>
      <h2>Main section is here!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h3>Counter: {count}</h3>
      <button onClick={handleClick}>Click me!</button>
    </main>
  );
}

export default Main;
