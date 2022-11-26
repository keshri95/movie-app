import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API, Spinner } from "./context";

const ClickedMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getAllMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);

      const data = await res.json();
      console.log(data);

        if (data.Response === "True") {
          setIsLoading(false);
          setMovie(data);
        } 
               
      } catch (error) {
        console.log(error);
      }
    };

   useEffect(() => {
      // response api only once while search---

      let timerFuction = setTimeout(() => {
        getAllMovies(`${API}&i=${id}`);
      }, 1500);

      return () => clearTimeout(timerFuction);

    }, [id]);


    if (isLoading) {
      return (
        <div className="container my-3 text-center">
          {/* <p className="text-center display-5">Loading....</p> */}
          <div className="spinner-grow" style={Spinner} role="status">
            {/* <span aclassName="visually-hidden"></span> */}
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={movie.Poster} className="img-fluid rounded-start"  alt={movie.imdbID}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Released}</p>
              </div>
            </div>
          </div>
          <NavLink to="/" className="btn btn-primary">
            Back
          </NavLink>
        </div>
      </div>
    );
  }

export default ClickedMovie;
