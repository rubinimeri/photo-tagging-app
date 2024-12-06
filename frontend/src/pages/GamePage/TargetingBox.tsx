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

interface Target {
  id: number;
  url: string;
  name: string;
}

type TargetingBoxProps = {
  targets: Target[];
};

function Crosshair() {
  return (
    <div className="rounded-full bg-black bg-opacity-20 border-2 border-primary p-4 w-min flex items-center justify-center">
      <div className="rounded-full p-[4px] bg-primary" />
    </div>
  );
}

function TargetingBox({ targets }: TargetingBoxProps) {
  return (
    <div className="flex items-center gap-4 p-4  w-max z-50 absolute left-1/2">
      <Crosshair />
      <div className="flex flex-col gap-2 border-2 border-primary p-4 bg-secondary">
        {EXAMPLE_CHARACTERS.map((target) => (
          <CharacterAvatar
            key={target.id}
            url={target.url}
            name={target.name}
          />
        ))}
      </div>
    </div>
  );
}

export default TargetingBox;
