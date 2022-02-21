import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="grid h-screen place-content-center">
      <div className=" flex gap-10 border-sm shadow px-4 py-20 items-center">
        <button className="border py-1 px-2 rounded" onClick={decrement}>
          Minus
        </button>
        <span>{count}</span>
        <button className="border py-1 px-2 rounded" onClick={increment}>
          Plus
        </button>
      </div>
    </div>
  );
}
