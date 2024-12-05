import Home from "./pages/Home/Home.tsx";
import GamePage from "@/pages/GamePage/GamePage.tsx";
import Leaderboard from "@/pages/Leaderboard/LeaderboardPage.tsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/game/:name",
    element: <GamePage />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
];

export default routes;
