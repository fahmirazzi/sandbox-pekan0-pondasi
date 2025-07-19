import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const tambah = (): void => {
    setCount((prev) => prev + 1);
  };

  const kurang = (): void => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>Hitungan</h1>
      <h2>{count}</h2>
      <button onClick={kurang}>-</button>
      <button onClick={tambah}>+</button>
    </div>
  );
}

export default Counter;
