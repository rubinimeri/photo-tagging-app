import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx";
import { Character } from "@/types.ts";

function CharacterAvatar({ url, name }: Character) {
  return (
    <div className="flex items-center gap-2 border-r-2 border-primary px-6">
      <Avatar>
        <AvatarImage src={url} />
      </Avatar>
      <p className="text-primary">{name}</p>
    </div>
  );
}

export default CharacterAvatar;
