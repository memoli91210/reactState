import React from "react";

let count = 0;
export default function Compteur() {
    console.log(count);
  return (
    <div>
      <button
        onClick={() => {
          count--;
        }}
      >
        Decrementer
      </button>
      <b>{count}</b>
      <button
        onClick={() => {
          count++;
        }}
      >
        Incrementer
      </button>
    </div>
  );
}
