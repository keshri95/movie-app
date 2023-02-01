import React from "react";
import { useState, useEffect, useContext } from "react";
// import reducer from "./reducer";
export const Spinner = {width: "3rem", height: "3rem" };
export const API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({children}) => {
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


            } else{
                    setIsError({show: true, msg: data.Error});
            }

        }  

        catch (error){
            console.log(error.message);
        }
    }



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