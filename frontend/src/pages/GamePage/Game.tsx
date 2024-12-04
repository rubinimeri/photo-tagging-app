import EXAMPLE_GAMES from "@/exampleData.ts";
import { useParams } from "react-router-dom";

function Game() {
  const { name } = useParams();
  const game = EXAMPLE_GAMES.find((g) => g.name === name) ?? { url: "" };

  return (
    <main className="">
      <img src={game.url} alt="" />
    </main>
  );
}

export default Game;
