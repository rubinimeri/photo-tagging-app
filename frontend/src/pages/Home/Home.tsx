import Header from "@/components/Header.tsx";
import GameSelect from "@/pages/Home/GameSelect.tsx";
import Footer from "@/components/Footer.tsx";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <Header>
      <Link
        to="/leaderboard"
        className="font-bold text-primary underline hover:no-underline"
      >
        Leaderboard
      </Link>
    </Header>
    <GameSelect />
    <Footer />
  </>
);

export default Home;
