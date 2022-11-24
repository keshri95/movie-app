import { useParams } from "react-router-dom";


const ClickedMovie = () => {
    
  const {id} = useParams();

  return (
    <>
      <p>Movies are {id}</p>
    </>
  );
};

export default ClickedMovie;
