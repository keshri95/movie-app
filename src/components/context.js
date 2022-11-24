import React from "react";
import { useState, useEffect, useContext } from "react";
// import reducer from "./reducer";

const AppContext = React.createContext();

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=51814f21';
/*
const initialState = {
    isLoading: true,
    hits: [],
};

*/

const AppProvider = ({children}) => {


// const [state, dispatch] = useReducer(reducer, initialState);


    const [movie, setMovie] = useState([]);
    const [query, setQuery] = useState("titanic");
    const [isError, setIsError] = useState({show: "false", msg: ""});
    const [isLoading, setIsLoading] = useState(true);

    const getAllMovies = async () => {
        try {
            const res = await fetch(`${API}&s=${query}`);    

            const data = await res.json();        
            console.log(data);

            if (data.Response === "True"){
                setMovie(data.Search);
                setIsLoading(false);
                setIsError({ show: true, msg: data.error});


                /*
                dispatch({
                    type: 'GET_ALL_MOVIES',
                    payload: {
                        hits: data.hits,
                    }
                })
                */


            } else{
                    setIsError({show: true, msg: data.error});
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
        getAllMovies();
    }, [query]);

    return (
        <>
            <AppContext.Provider value={{ movie, query, setQuery, isError, isLoading }} >
                {children}
            </AppContext.Provider>
        </>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export  {AppProvider, AppContext, useGlobalContext};