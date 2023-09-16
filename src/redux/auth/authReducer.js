import { createSlice } from '@reduxjs/toolkit';
import { register, login } from 'redux/auth/authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }),
  // .addCase(fetchContacts.fulfilled, (state, action) => {
  //   state.contacts.isLoading = false;
  //   state.contacts.items = action.payload;
  // })
  // .addCase(fetchContacts.rejected, (state, action) => {
  //   state.contacts.isLoading = false;
  //   state.contacts.error = action.payload;
  // })

  //
  // },
});

export default authSlice.reducer;
