import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
  'login/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:5000/login');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
