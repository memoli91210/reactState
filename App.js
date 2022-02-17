import "./App.css";
import CompteurState from "./components/exo2/CompteurState";
import Menu from "./components/exo3/Menu";

function App() {
  let listPrenom = ["toto1", "toto2", "toto3", "toto4", "toto5", "toto6"];
  const arr = [
    { id: 34, nom: "Abadi", prenom: "Alex" },
    { id: 86, nom: "Harris", prenom: "Tyler" },
    { id: 76, nom: "Falcone", prenom: "Hailee" },
    { id: 73, nom: "Evans", prenom: "Amelia" },
    { id: 39, nom: "Fabbiano", prenom: "Jacob" },
  ];

  return (
    <div className="App">
      <h1 onClick={() => console.log("click titre")}>Utilisation du State</h1>

      <CompteurState />
      <Menu />

      <ul>
        {listPrenom.map((prenom, index) => (
          <li key={index}>{prenom}</li>
        ))}
      </ul>

      <ul>
        {arr.map(({ nom, prenom, id }) => (
          <li key={id}>
            {nom}
            {prenom}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
