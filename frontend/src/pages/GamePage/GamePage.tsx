import Header from "@/components/Header.tsx";
import CharacterAvatar from "@/pages/GamePage/CharacterAvatar.tsx";

const EXAMPLE_CHARACTERS = [
  {
    url: "https://github.com/shadcn.png",
    name: "Character 1",
  },
  {
    url: "https://github.com/shadcn.png",
    name: "Character 2",
  },
  {
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
            <CharacterAvatar url={character.url} name={character.name} />
          ))}
        </div>
      </Header>
    </>
  );
}

export default GamePage;
