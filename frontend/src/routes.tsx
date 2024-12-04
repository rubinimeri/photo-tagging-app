import Home from "./pages/Home/Home.tsx";
import GamePage from "@/pages/GamePage/GamePage.tsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/game/:name",
    element: <GamePage />,
  },
];

export default routes;
