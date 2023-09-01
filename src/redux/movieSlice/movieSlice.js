import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieApi from '../../Apis/movieApi';
import { APIKey } from '../../Apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const textMovie = 'Harry';
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${textMovie}&type=movie`)
    
    return response.data
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
    const seriesText = 'Friends';
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
    
    return response.data
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    
    return response.data
});

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
       addMovies: (state, action) => {
           state.movies = action.payload;
       } 
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending fetchAsyncMovies');
        },
        [fetchAsyncMovies.fulfilled]: (state, action) => {
            console.log('fulfilled fetchAsyncMovies');
            return {...state, movies: action.payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected fetchAsyncMovies');
        },

        [fetchAsyncShows.pending]: () => {
            console.log('Pending fetchAsyncShows');
        },
        [fetchAsyncShows.fulfilled]: (state, action) => {
            console.log('fulfilled fetchAsyncShows');
            return {...state, shows: action.payload}
        },
        [fetchAsyncShows.rejected]: () => {
            console.log('rejected fetchAsyncShows');
        },

        [fetchAsyncMovieOrShowDetail.pending]: () => {
            console.log('Pending fetchAsyncMovieOrShowDetail');
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, action) => {
            console.log('fulfilled fetchAsyncMovieOrShowDetail');
            return {...state, selectMovieOrShow: action.payload}
        },
        [fetchAsyncMovieOrShowDetail.rejected]: () => {
            console.log('rejected fetchAsyncMovieOrShowDetail');
        }
    }
});

export const { addMovies } = movieSlice.actions;

export default movieSlice.reducer;