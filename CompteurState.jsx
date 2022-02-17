import React, { useState } from "react";

export default function CompteurState() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>Variable d etat</h1>
      <button
        onClick={() => {
          setcount((data) => data - 1);
        }}
      >
        Decrementer
      </button>
      <b>{count}</b>
      <button
        onClick={() => {
          setcount((data) => data + 1);
        }}
      >
        Incrementer
      </button>
    </div>
  );
}


//cas 1 : on a pas besoin de la valeur precedente -> setter (valeur)

//cas 2 : on a  besoin de la valeur precedente -> setter ((valeur)=>valeurModifier)