import About from "./components/About";
import Board from "./components/Board";
import Error from "./components/Error";
import Header from "./components/Header";
import Loader from "./components/Loader";
import { useBoard } from "./Context/BoardProvider";

function AppLayout() {
  const { loading, error, board } = useBoard();
  if (loading) return <Loader />;
  if (!board || error) return <Error error={error} />;
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <main className="grow-1 md:px-[1.5vw] px-4 md:mt-[15vh] mt-[5rem]">
        <About />
        <Board />
      </main>
    </div>
  );
}

export default AppLayout;
