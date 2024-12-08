import React from "react";
import EXAMPLE_GAMES from "@/exampleData.ts";
import TargetingBox, { Crosshair } from "@/pages/GamePage/TargetingBox";
import { useParams } from "react-router-dom";
import { useState } from "react";

const CROSSHAIR_WIDTH = 22;
const CROSSHAIR_HEIGHT = 22;

type Coordinates = {
  x: number | null;
  y: number | null;
};

function Game() {
  const { name } = useParams();
  const [coordinates, setCoordinates] = useState<Coordinates>({
    x: null,
    y: null,
  });
  const game = EXAMPLE_GAMES.find((g) => g.name === name) ?? { url: "" };

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = (e.target as HTMLElement).getBoundingClientRect();

    const x = e.clientX - left - CROSSHAIR_WIDTH;
    const y = e.clientY - top - CROSSHAIR_HEIGHT;

    console.log(x, y);

    setCoordinates({ x, y });
  }

  return (
    <main className="relative">
      {coordinates.x && (
        <div className="absolute">
          <Crosshair x={coordinates.x} y={coordinates.y} />
          <TargetingBox x={coordinates.x} y={coordinates.y} />
        </div>
      )}
      <img src={game.url} alt="" onClick={handleClick} />
    </main>
  );
}

export default Game;
