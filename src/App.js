import { useState } from "react";
import "./App.css";
import Content from "./components/Content.js";
import Overview from "./components/Overview.js";

let playersList = [
  {
    asset: "Foghammer Lead",
    playerName: "Dreamlurk The Unstoppable",
    realName: "Brianna Forbes",
  },
  {
    asset: "Secret Glowquake Gold",
    playerName: "Crystaldash",
    realName: "Darcy Candice Ball",
  },
  {
    asset: "Valkyries' Opal Adamant",
    playerName: "Seekvenom The Mystic",
    realName: "Elva Becky Hammond",
  },
  {
    asset: "Jewelevil Bronze Of Goddesses",
    playerName: "Coincurse The Ghoul",
    realName: "Enid Rose",
  },
  {
    asset: "Yellow Orichalcum Of Paladins",
    playerName: "Skulldart",
    realName: "Esmeralda Carrillo",
  },
  {
    asset: "Shifting Rainshadow Iron",
    playerName: "Speedsoul",
    realName: "Hillary Gibbs",
  },
];

function App() {
  const [players, setPlayers] = useState(playersList);

  // Fetching data from API
  // The function does not work! 
  // useEffect(() => {
  //   fetch("http://65.109.2.102:5000/api/players")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPlayers(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);


  // Functions for sorting players
  function sortAscOrder() {
    console.log("Sorting ASC...");
    const sortedPlayers = [...players].sort((a, b) =>
      a.realName > b.realName ? 1 : -1
    );
    setPlayers(sortedPlayers);
  }

  function sortDescOrder() {
    console.log("Sorting DESC...");
    const sortedPlayers = [...players].sort((a, b) =>
      a.realName < b.realName ? 1 : -1
    );
    setPlayers(sortedPlayers);
  }

  return (
    <div className="mt-5 mx-5">
      <Content onSortAsc={sortAscOrder} onSortDesc={sortDescOrder}/>
      <Overview players={players} />
    </div>
  );
}

export default App;
