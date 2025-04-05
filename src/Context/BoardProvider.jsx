import { createContext, useContext, useEffect, useState } from "react";

const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const API_URL = "https://rbtest.free.beeceptor.com/todo";
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBoardData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch board data");
      const data = await response.json();
      setBoard(data?.board);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  // const { board } = boardData || {};
  useEffect(() => {
    fetchBoardData();
  }, []);

  return (
    <BoardContext.Provider
      value={{
        board,
        loading,
        error,
        fetchBoardData,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);
