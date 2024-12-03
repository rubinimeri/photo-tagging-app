import React from "react";

type GameCardProps = {
  imageUrl: string;
  name: string;
  children?: React.ReactNode;
};

function GameCard({ imageUrl, name, children }: GameCardProps) {
  return (
    <div>
      <div>
        <img src={imageUrl} alt="game thumbnail" />
        <p>{name}</p>
      </div>
      {children}
    </div>
  );
}

export default GameCard;
