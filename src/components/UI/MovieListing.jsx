import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

import '../../styles/MovieListing.scss';

const MovieListing = () => {
    const movies = useSelector(state => state.movies.movies);
    const shows = useSelector(state => state.movies.shows);

    return (
        <>
           <div className="movie__wrapper">
               <div className="movie__list">
                   <h2 className='movie-title'>Movies</h2>
                   <div className='movie-container'>
                    {
                            movies.Response === 'True' ? (
                            movies.Search.map((movie, i) => {
                                return <MovieCard key={i} data={movie}/>
                            })
                            ) :
                            (
                                <div className='movies__errpr'>
                                    <h3>{movies.Error}</h3>
                                </div>
                            )
                        }
                   </div>
               </div>

               <div className="show__list">
                   <h2 className='movie-title'>Shows</h2>
                   <div className='movie-container'>
                    {
                            shows.Response === 'True' ? (
                            shows.Search.map((movie, i) => {
                                return <MovieCard key={i} data={movie}/>
                            })
                            ) :
                            (
                                <div className='movies__errpr'>
                                    <h3>{movies.Error}</h3>
                                </div>
                            )
                        }
                   </div>
               </div>
           </div>
        </>
    );
}

export default MovieListing;