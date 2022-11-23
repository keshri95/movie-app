import { useGlobalContext } from "./context";

const Movies = () => {
  const { hits, isLoading, movies } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <p className="text-center display-5">Loading.......</p>
      </>
    );
  }

  return (
    <>
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {movies.map((movie) => {
            const { Title, Year, imdbID, Poster, index } = movie;
            return (
              <div className="col" key={index}>
                <div className="card">
                  <p className="card-header">{Title}</p>
                  <div className="card-img-top">
                    <img src={Poster} className="card-img-top" />
                    <div className="card-body">
                      <p>{imdbID}</p>
                      <p className="card-footer">{Year}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movies;
