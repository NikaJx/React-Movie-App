import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </>
    );
}

export default Routers;