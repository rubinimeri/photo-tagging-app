import CharacterAvatar from "@/pages/GamePage/CharacterAvatar.tsx";
import { EXAMPLE_CHARACTERS } from "@/constants.ts";
import { Coordinates } from "@/types.ts";

/*interface Target {
  id: number;
  url: string;
  name: string;
}

type TargetingBoxProps = {
  targets: Target[];
};*/

export function Crosshair({ x, y }: Coordinates) {
  return (
    <div
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
      className="rounded-full bg-black bg-opacity-20 border-2 border-primary p-4 w-min flex items-center justify-center absolute"
    >
      <div className="rounded-full p-[4px] bg-primary" />
    </div>
  );
}

function TargetingBox({ x, y }: Coordinates) {
  return (
    <div
      className="flex flex-col gap-2 border-2 border-primary p-4 bg-secondary absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {EXAMPLE_CHARACTERS.map((target) => (
        <CharacterAvatar key={target.id} url={target.url} name={target.name} />
      ))}
    </div>
  );
}

export default TargetingBox;
