import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MovieListing from '../../components/UI/MovieListing';
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movieSlice/movieSlice';


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch]);

    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing/>
        </div>
    );
}

export default Home;