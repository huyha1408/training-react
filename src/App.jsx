import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="grid h-screen place-content-center">
      <h1>Minhdeo</h1>
      <div className="flex items-center gap-10 px-4 py-20 shadow  border-sm">
        <button className="px-2 py-1 border rounded" onClick={decrement}>
          Minus
        </button>
        <span>{count}</span>
        <button className="px-2 py-1 border rounded" onClick={increment}>
          Plus
        </button>
      </div>
    </div>
  );
}
