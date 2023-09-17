import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { onLogin, onRegister, onLogout } from 'Services/Api';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const data = await onRegister(credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const data = await onLogin(credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const data = await onLogout();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
