import React from "react";
import { useReducer,useState, useEffect, useContext } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=51814f21&s=titanic';
const initialState = {
    isLoading: true,
    hits: [],
};


const AppProvider = ({children}) => {


const [state, dispatch] = useReducer(reducer, initialState);
    const [movies, setMovies] = useState([]);

    const getAllMovies = async () => {
        try {
            const res = await fetch(API);    
            const data = await res.json();        
            console.log(data);

            if (data.Response === "True"){
                setMovies(data.Search);
                dispatch({
                    type: 'GET_ALL_MOVIES',
                    payload: {
                        hits: data.hits,
                    }
                })

            } else{

            }


            dispatch({
                type: 'SET_LOADING',
            });

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
    }, [])

    return (
        <>
            <AppContext.Provider value={{...state, movies }}>
                {children}
            </AppContext.Provider>
        </>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export  {AppProvider, AppContext, useGlobalContext};