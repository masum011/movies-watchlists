import { createSlice } from '@reduxjs/toolkit';
import { fetchData, fetchMovies, searchMovies } from './homeThunk';

const initialState = { 
  data: null,
  loading: false,
  error: null,
  emptymeg:'',
  watchData: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    extractData: (state) => {
      const storedWatchlist = localStorage.getItem("watchlists");
      if (storedWatchlist) {
        state.watchData = JSON.parse(storedWatchlist);
      }
    },
    addToWatchlist: (state, action) => {
      const watchlistArray = JSON.parse(localStorage.getItem('watchlists')) || [];
      const newWatchlistItem = action.payload;
      const watchlistExists = watchlistArray.some(item => item.title === newWatchlistItem.title);

      if (!watchlistExists) {
        watchlistArray.push(newWatchlistItem);
        localStorage.setItem('watchlists', JSON.stringify(watchlistArray));
        state.watchData = watchlistArray;
      }
    },
    removeWatchlist: (state, action) => {
      console.log('Removing:', action.payload);
      const updatedWatchlist = state.watchData.filter(item => item.title !== action.payload);
      console.log('Updated Watchlist:', updatedWatchlist);
      localStorage.setItem('watchlists', JSON.stringify(updatedWatchlist));
      state.watchData = updatedWatchlist;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.Search;
        state.emptymeg=action.payload.Error;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


  } 
});

export const {extractData,addToWatchlist,removeWatchlist} = homeSlice.actions;
export default homeSlice.reducer;
