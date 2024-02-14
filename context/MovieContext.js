import React from "react";

const MovieContext = React.createContext();

function MovieProvider({ children }){

    const { movies, isLoading } = useMovies();
    return (
        <MovieContext.Provider value="">
            
        </MovieContext.Provider>
    )

}