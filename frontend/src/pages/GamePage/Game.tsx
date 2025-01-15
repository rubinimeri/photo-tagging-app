import React from "react";
import EXAMPLE_GAMES from "@/exampleData.ts";
import TargetingBox, { Crosshair } from "@/pages/GamePage/TargetingBox";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getCoordinates } from "@/utils/getCoordinates.ts";
import { Coordinates } from "@/types.ts";
import convertToPercentage from "@/utils/convertToPercentage.ts";

function Game() {
  const { name } = useParams();
  const [coordinates, setCoordinates] = useState<Coordinates>({
    x: null,
    y: null,
  });
  const [targetingBoxCoordinates, setTargetingBoxCoordinates] =
    useState<Coordinates>({
      x: null,
      y: null,
    });

  const game = EXAMPLE_GAMES.find((g) => g.name === name) ?? { url: "" };

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = (
      e.target as HTMLElement
    ).getBoundingClientRect();

    const x = convertToPercentage(e.clientX - left, width);
    const y = convertToPercentage(e.clientY - top, height);

    setTargetingBoxCoordinates(getCoordinates(x, y, width, height));
    setCoordinates({ x, y });
  }

  return (
    <main className="relative">
      {coordinates.x && (
        <>
          <Crosshair x={coordinates.x} y={coordinates.y} />
          <TargetingBox
            x={targetingBoxCoordinates.x}
            y={targetingBoxCoordinates.y}
          />
        </>
      )}
      <img src={game.url} alt="" onClick={handleClick} />
    </main>
  );
}

export default Game;
