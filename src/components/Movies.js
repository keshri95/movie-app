import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {
  const {isLoading, movie,Spinner } = useGlobalContext();

  if (isLoading) {
    return (
      <>
      <div className="container my-3 text-center">

      <div className="spinner-grow" style={Spinner}role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>
        {/* <p className="text-center display-5">Loading.......</p> */}
      </>
    );
  }

 
  return (
    <>
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {movie 
            ? movie.map((elem) => {
                const { Title, Year, imdbID, Poster } = elem;
                const movieTitle = Title.substring(0, 15);
                  return (
                    <NavLink to={`movie/${imdbID}`} key={imdbID}>
                      <div className="col" >
                        <div className="card">
                          <p className="card-header text-center">
                            
                            {movieTitle.length >= 15 ? `${movieTitle}...` : `${movieTitle}`}
                          
                            </p>
                          <div className="card-img-top">
                            <img src={Poster} className="card-img-top" alt={imdbID} />
                            <div className="card-body">
                              <p className="text-center">{imdbID}</p>
                              <p className="text-center">{Year}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                );
              }) 
              : ""}
          </div>
      </div>
    </>
  );
};

export default Movies;
