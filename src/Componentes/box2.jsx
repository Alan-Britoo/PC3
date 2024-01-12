import React, { useState } from "react";

export function BoxTwo({ ide, valor, tex, onButtonClick, selected }) {
  return (
    <>
      <li id={ide}>
        <button
          type="button"
          className="percentage-button"
          value={valor}
          style={{ backgroundColor: selected ? "var(--primary)" : "" }}
          onClick={onButtonClick}
        >
          {tex}
        </button>
      </li>
    </>
  );
}