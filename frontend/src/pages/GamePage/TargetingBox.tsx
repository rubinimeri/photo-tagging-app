import CharacterAvatar from "@/pages/GamePage/CharacterAvatar.tsx";

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

/*interface Target {
  id: number;
  url: string;
  name: string;
}

type TargetingBoxProps = {
  targets: Target[];
};*/

export function Crosshair({ x, y }: { x: number | null; y: number | null }) {
  return (
    <div
      style={{
        transform: `translate(${x}px,${y}px)`,
      }}
      className="rounded-full bg-black bg-opacity-20 border-2 border-primary p-4 w-min flex items-center justify-center"
    >
      <div className="rounded-full p-[4px] bg-primary" />
    </div>
  );
}

function TargetingBox({ x, y }: { x: number | null; y: number | null }) {
  return (
    <div
      className="flex flex-col gap-2 border-2 border-primary p-4 bg-secondary absolute"
      style={{ transform: `translate(${x}px,${y}px)` }}
    >
      {EXAMPLE_CHARACTERS.map((target) => (
        <CharacterAvatar key={target.id} url={target.url} name={target.name} />
      ))}
    </div>
  );
}

export default TargetingBox;
