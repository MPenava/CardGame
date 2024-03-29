import { useState } from "react";
//import { useEffect } from "react";
import "./App.css";
import Details from "./components/Details.js";
import Controls from "./components/Controls.js";
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
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Fetching data from API
  // The function does not work!
  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       let response = await fetch(
  //         "http://65.109.2.102:5000/api/players"
  //       );
  //       if (response.status === 200) {
  //         let data = await response.json();
  //         setPlayers(data);
  //         console.log(data);
  //       } else {
  //         throw "Error fetching players list";
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   loadData();
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

  //Function for selecting active player
  function handleSelectedPlayer(selectedPlayer) {
    console.log("Selecting new active player...");
    setSelectedPlayer(selectedPlayer);
  }

  //Function for sending data of active player
  function sendData() {
    if (selectedPlayer) {
      console.log("Sending data of active player...");

      fetch("http://localhost:3000/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedPlayer),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <>
      <main className="flex flex-col md:flex-row space-x-0 md:space-x-5 mx-5">
        <Details activePlayer={selectedPlayer} />
        <Controls
          onSortAsc={sortAscOrder}
          onSortDesc={sortDescOrder}
          onSendData={sendData}
          selectedPlayer={selectedPlayer}
        />
      </main>
      <Overview
        onSelectPlayer={handleSelectedPlayer}
        activePlayer={selectedPlayer}
        players={players}
      />
    </>
  );
}

export default App;
