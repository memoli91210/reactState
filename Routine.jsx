import React from 'react'

export default function Routine() {
    return (
      <div>
        <button onClick={() => alert("je mange")}>Manger</button>
        <button onClick={() => alert("je dors")}>Dormir</button>
        <button onClick={() => alert("j'etudie")}>Etudier</button>
      </div>
    );
}
