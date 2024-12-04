import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card.tsx";

type GameCardProps = {
  imageUrl: string;
  name: string;
  children?: React.ReactNode;
};

function GameCard({ imageUrl, name, children }: GameCardProps) {
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="flex items-center justify-center overflow-hidden h-[200px] w-[200px]">
          <img
            src={imageUrl}
            alt="game thumbnail"
            className="object-cover min-w-[500px]"
          />
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold ">{name}</h2>
      </CardContent>
      <CardFooter>{children}</CardFooter>
    </Card>
  );
}

export default GameCard;
