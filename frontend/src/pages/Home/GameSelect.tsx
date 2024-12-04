import GameCard from "@/components/GameCard.tsx";
import { Link } from "react-router-dom";
import EXAMPLE_GAMES from "@/exampleData.ts";

function GameSelect() {
  return (
    <main className="min-h-[87vh] flex justify-center items-center gap-4 p-4 ">
      {EXAMPLE_GAMES.map((game) => (
        <GameCard key={game.id} imageUrl={game.url} name={game.name}>
          <Link
            to={`/game/${game.name}`}
            className="p-2 bg-primary text-primary-foreground hover:bg-primary/90 w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          >
            Start Game
          </Link>
        </GameCard>
      ))}
    </main>
  );
}

export default GameSelect;
