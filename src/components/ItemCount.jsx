import React from "react";
import { useState } from "react";
import "../css/style.css";

export function ItemCount() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <button className="BotonDisminuirCantidad" onClick={decrement}>
        -
      </button>
      <spam className="NumeroCantidad"> {count} </spam>
      <button className="BotonAumentarCantidad" onClick={increment}>
        +
      </button>
    </div>
  );
}

// export default ItemCount;
