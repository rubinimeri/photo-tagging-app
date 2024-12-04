import Header from "@/components/Header.tsx";
import CharacterAvatar from "@/pages/GamePage/CharacterAvatar.tsx";
import Game from "@/pages/GamePage/Game.tsx";

const EXAMPLE_CHARACTERS = [
  {
    id: 1,
    url: "https://github.com/shadcn.png",
    name: "Character 1",
  },
  {
    id: 2,
    url: "https://github.com/shadcn.png",
    name: "Character 2",
  },
  {
    id: 3,
    url: "https://github.com/shadcn.png",
    name: "Character 3",
  },
];

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
    </>
  );
}

export default GamePage;
