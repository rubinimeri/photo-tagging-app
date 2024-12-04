interface Game {
  id: number;
  name: string;
  url: string;
}

const EXAMPLE_GAMES: Game[] = [
  {
    id: 1,
    name: "Prehistoric",
    url: "/game-1.jpg",
  },
  {
    id: 2,
    name: "Overload",
    url: "/game-2.jpg",
  },
  {
    id: 3,
    name: "Polandland",
    url: "/game-3.jpg",
  },
];

export default EXAMPLE_GAMES;
