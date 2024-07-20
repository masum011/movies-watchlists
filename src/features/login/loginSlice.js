import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from './loginThunk';

const initialState = { 
  users: JSON.parse(localStorage.getItem('users')) || [],
  currentUser: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log('masum register')
      const newUser = action.payload;
      state.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    loadUsers: (state) => {
      state.users = JSON.parse(localStorage.getItem('users')) || [];
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(user => user.email === email && user.password === password);
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
        state.error = null;
      } else {
        state.error = "Invalid credentials. Please try again.";
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    }
  },
  extraReducers: (builder) => { 
    // builder
    //   .addCase(fetchUser.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(fetchUser.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.users = action.payload;
    //   })
    //   .addCase(fetchUser.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   });
  }
});

export const {addUser, loginUser,loadUsers,logoutUser} = loginSlice.actions;
export default loginSlice.reducer;
