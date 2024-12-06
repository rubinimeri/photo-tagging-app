import EXAMPLE_GAMES from "@/exampleData.ts";
import { useParams } from "react-router-dom";
import TargetingBox from "@/pages/GamePage/TargetingBox.tsx";

function Game() {
  const { name } = useParams();
  const game = EXAMPLE_GAMES.find((g) => g.name === name) ?? { url: "" };

  return (
    <main className="">
      <TargetingBox />
      <img src={game.url} alt="" />
    </main>
  );
}

export default Game;
