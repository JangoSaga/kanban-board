import AddCard from "./AddCard";
import Box from "./Box";
import Card from "./Card";
import ColumnHead from "./ColumnHead";

function Column({ column }) {
  const { title, cards } = column;
  return (
    <div>
      <Box>
        <ColumnHead title={title} />
      </Box>
      {cards?.map((card) => {
        return (
          <Box key={card?.id}>
            <Card card={card} />
          </Box>
        );
      })}
      <AddCard />
    </div>
  );
}

export default Column;
