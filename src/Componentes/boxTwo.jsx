import React,{useState} from "react";

export function BoxTwo({ ide, valor, tex ,prueba}) {
  const [color, setColor] = useState(false);
  const coloresCambio = () => {
    setColor(!color);
  };
  return (
    <>
      <li
        id={ide}
        onClick={() => {
          coloresCambio();
          prueba();
        }}
      >
        <button
          type="button"
          class="percentage-button"
          value={valor}
          style={{ backgroundColor: color ? "var(--primary)" : "" }}
          onClick={() => {
            coloresCambio();
            prueba();
          }}
        >
          {tex}
        </button>
      </li>
    </>
  );
}
