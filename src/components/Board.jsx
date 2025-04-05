import { useEffect, useState } from "react";
import { useBoard } from "../Context/BoardProvider";
import Column from "./Column";

function Board() {
  const { board } = useBoard();
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    if (board?.lists) {
      setColumns(board.lists);
    }
  }, [board]);

  console.log(board);
  return (
    <div className="grid md:grid-cols-5 grid-rows-1 justify-center gap-4 md:gap-[1vw] items-center md:items-start">
      {columns.map((column) => (
        <Column column={column} key={column?.id} />
      ))}
    </div>
  );
}

export default Board;
