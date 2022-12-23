// import Movies from "./Movies";
import React, { Suspense } from "react";
// import Search from "./Search";

const Movies = React.lazy(() => import("./Movies"));
const Search = React.lazy(() => import("./Search"));
const Home = () => {
  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Search />
      <Movies />
    </Suspense>
  );
};

export default Home;
