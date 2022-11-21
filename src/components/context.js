import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = 'https://hn.algolia.com/api/v1/search?';
const initialState = {
    // isLoading: false
};


const AppProvider = ({children}) => {


const [state, dispatch] = useReducer(reducer, initialState);


    const getAllMovies = async () => {
        try {
            const res = await fetch(API);    
            const data = await res.json();        
            console.log(data);

            dispatch({
                type: 'GET_ALL_MOVIES',
                payload: {

                }
            })
        }  

        catch (error){
            console.log(error.message);
        }
    }


    useEffect(() => {
        getAllMovies();
    }, [])

    return (
        <>
            <AppContext.Provider value={{...state}}>
                {children}
            </AppContext.Provider>
        </>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export  {AppProvider, AppContext, useGlobalContext};