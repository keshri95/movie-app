import React from "react";
import { useState, useEffect, useContext } from "react";
// import reducer from "./reducer";
export const Spinner = {width: "3rem", height: "3rem" };
export const API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = React.createContext();

/*
const initialState = {
    isLoading: true,
    hits: [],
};

*/

const AppProvider = ({children}) => {


// const [state, dispatch] = useReducer(reducer, initialState);


    const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState("the dark knight");
    const [isError, setIsError] = useState({show: "false", msg: ""});
    const [isLoading, setIsLoading] = useState(true);

    const getAllMovies = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);    

            const data = await res.json();        
            console.log(data);

            if (data.Response === "True"){
                setMovie(data.Search);
                setIsLoading(false);
                setIsError({ show: false, msg: ""});


                /*
                dispatch({
                    type: 'GET_ALL_MOVIES',
                    payload: {
                        hits: data.hits,
                    }
                })
                */


            } else{
                    setIsError({show: true, msg: data.Error});
            }

            /*
            dispatch({
                type: 'SET_LOADING',
            });
            */
        }  

        catch (error){
            console.log(error.message);
        }
    }

    /*
    const searchMovie = (objetcID) => {
        dispatch({
            type: "SEARCH_MOVIE",
            payload: {
                objetcID
            }
        })
    }

    */


    useEffect(() => {
        // response api only once while search---

        let timerFuction = setTimeout(() => {

            getAllMovies(`${API}&s=${query}`);
        }, 1500)

        return () => clearTimeout(timerFuction);

    }, [query]);

    return (
        <>
            <AppContext.Provider value={{ movie, query, setQuery, isError, isLoading, Spinner }} >
                {children}
            </AppContext.Provider>
        </>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export  {AppProvider, AppContext, useGlobalContext};