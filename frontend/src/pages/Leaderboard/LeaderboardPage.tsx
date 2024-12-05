import Header from "@/components/Header.tsx";
import { Link } from "react-router-dom";
import LeaderboardTable from "@/pages/Leaderboard/LeaderboardTable.tsx";
import Footer from "@/components/Footer.tsx";
import EXAMPLE_GAMES from "@/exampleData.ts";
import GameCard from "@/components/GameCard.tsx";

function LeaderboardPage() {
  return (
    <>
      <Header>
        <Link
          to="/leaderboard"
          className="font-bold text-primary underline hover:no-underline"
        >
          Leaderboard
        </Link>
      </Header>
      <main className="min-h-[87vh] flex flex-col items-center justify-center gap-10">
        <div className="flex gap-4">
          {EXAMPLE_GAMES.map((game) => (
            <GameCard key={game.id} name={game.name} imageUrl={game.url} />
          ))}
        </div>
        <LeaderboardTable />
      </main>
      <Footer />
    </>
  );
}

export default LeaderboardPage;
