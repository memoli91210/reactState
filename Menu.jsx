import React, { useState } from "react";

export default function Menu() {
  const [text, settext] = useState("hidden");
  const [btntog, setbtntog] = useState("show");
  return (
    <div>
      <button
        onClick={() => {
          settext((data) => (data === "hidden" ? "visible" : "hidden"));
          setbtntog((data) => (data === "show" ? "hide" : "show"));
        }}
      >
        {btntog}
      </button>

      <div style={{ visibility: text }}>
        <h1>Menu Secret</h1>
        <ul>
          <li>nourir le chien</li>
          <li>faire mes devoirs</li>
          <li>essayer des trucs en React</li>
        </ul>
      </div>
    </div>
  );
}


//correction

// import React, { useState } from "react";

// export default function Menu() {
//   const [afficher, setafficher] = useState(true);

//   return (
//     <div>
//       {/* {afficher ? (
//         <button onClick={() => setafficher(false)}> Cacher </button>
//       ) : (
//         <button onClick={() => setafficher(true)}> Afficher </button>
//       )} */}
//       <button onClick={() => setafficher((prevAfficher) => !prevAfficher)}>
//         {afficher ? "Cacher" : "Afficher"}
//       </button>
//       {afficher && (
//         <div>
//           <h1>Menu Secret</h1>
//           <ul>
//             <li>nourir le chien</li>
//             <li>faire mes devoir</li>
//             <li>essayer des trucs en React</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }