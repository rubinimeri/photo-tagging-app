import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <Header>
      <Link
        to="/leaderboard"
        className="font-bold text-blue-500 underline hover:no-underline"
      >
        Leaderboard
      </Link>
    </Header>
    <main className="min-h-[87vh]"></main>
    <Footer />
  </>
);

export default Home;
