import Player from "./Player";
import { Players } from "./Players";
import React from "react";

function PlayerList() {
  const stylecard = {
    backgroundColor: "black",
    padding: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };
  return (
    <div style={stylecard}>
      {Players.map((playerdata) => (
        <Player key={playerdata.index} {...playerdata} />
      ))}
    </div>
  );
}

export default PlayerList;
