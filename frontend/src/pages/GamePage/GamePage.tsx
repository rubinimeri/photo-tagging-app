import Header from "@/components/Header.tsx";
import CharacterAvatar from "@/pages/GamePage/CharacterAvatar.tsx";
import Game from "@/pages/GamePage/Game.tsx";
import Footer from "@/components/Footer.tsx";
import { EXAMPLE_CHARACTERS } from "@/constants.ts";

function GamePage() {
  return (
    <>
      <Header>
        <div className="flex items-center">
          {EXAMPLE_CHARACTERS.map((character) => (
            <CharacterAvatar
              key={character.id}
              url={character.url}
              name={character.name}
            />
          ))}
        </div>
      </Header>
      <Game />
      <Footer />
    </>
  );
}

export default GamePage;
