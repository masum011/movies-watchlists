import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
  "home/fetchData",
  async () => {
    try {
      const response = await axios.get(
        "http://www.omdbapi.com/?s=Tom&apikey=28ebc057"
      );
      return response.data.Search || [];
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
);

export const searchMovies = createAsyncThunk(
  "home/fetchmovue",
  async (title) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${title}&apikey=28ebc057`
      );
      console.log(response.data,">>>>>")
      return response.data || [];
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
);
