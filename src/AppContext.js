import React from 'react';
import { useState, createContext } from "react";
import GlobalContext from './GlobalContext';

const AppContext = (props) => {
    const [Movies,setMovies]=useState([])
    const [SelectedMovie,setSelectedMovie]=useState(null)
   
    return (
        <GlobalContext.Provider value={{Movies,setMovies,SelectedMovie,setSelectedMovie}}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default AppContext;