import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const EXAMPLE_PLAYERS = [
  {
    place: 1,
    name: "Rubin",
    time: 2.812,
    date: Date.now(),
  },
  {
    place: 2,
    name: "Talat",
    time: 5.506,
    date: Date.now(),
  },
  {
    place: 3,
    name: "Omer",
    time: 10.951,
    date: Date.now(),
  },
];

function LeaderboardTable() {
  return (
    <div className="max-w-[800px]">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Place</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {EXAMPLE_PLAYERS.map((player) => (
            <TableRow>
              <TableCell>{player.place}</TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player.time}</TableCell>
              <TableCell>{player.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default LeaderboardTable;
