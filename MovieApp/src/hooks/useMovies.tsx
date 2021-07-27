import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDBResponse } from '../interfaces/movieInterface';

export const useMovies = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ peliculasEnCine, setPeliculasEnCine ] = useState<Movie[]>([])
    const [ peliculasPopulares, setPeliculasPopulares ] = useState<Movie[]>([])

    const getMovies =async () => {
        const respNowPlaying = await movieDB.get<MovieDBResponse>('/now_playing');
        const resPopular = await movieDB.get<MovieDBResponse>('/popular');
        setPeliculasEnCine( respNowPlaying.data.results );
        setPeliculasPopulares( resPopular.data.results );
        
        setIsLoading( false );
    }

    useEffect(() => {
        getMovies();
    }, [])

     
    return {
        peliculasEnCine,
        peliculasPopulares,
        isLoading
    }
}
