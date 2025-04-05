import { BoardProvider } from "./Context/BoardProvider";
import AppLayout from "./AppLayout";
function App() {
  return (
    <BoardProvider>
      <AppLayout />
    </BoardProvider>
  );
}

export default App;
/*
Build the applayout
Build the header with a navbar
navbar: LOGO,BOARDS,SEARCH,FEW BUTTONS,PROFILE LOGO
Board info: name,likes,ispubic icon,lock icon, members icon, Menu button
4 columns
Columns: sec name,cards,add new button

*/
