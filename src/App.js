// import { useContext } from "react";
// import { AppContext } from "./components/context";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ClickedMovie from "./components/ClickedMovie";
import Error from "./components/Error";

function App() {
  // const data = useContext(AppContext);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<ClickedMovie />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </>
  );
}

export default App;
