
// import { useContext } from "react";
// import { AppContext } from "./components/context";
import Movies from "./components/Movies";
import Search from "./components/Search";

function App() {
  // const data = useContext(AppContext);
  return (
    <>
     <Search />
     <Movies />
    </>
  );
}

export default App;
