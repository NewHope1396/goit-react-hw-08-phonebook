import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLogedIn: false,
  },
  reducers: {
    setUser(state, action) {
      state.token = action.payload.token;
      state.isLogedIn = true;
      state.user = action.payload.user;
    },
    resetUser(state) {
      state.token = null;
      state.isLogedIn = false;
      state.user = null;
    },
    refreshUser(state, action) {
      state.user = action.payload;
      state.isLogedIn = true;
    },
  },
});

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const { setUser, resetUser, refreshUser } = authSlice.actions;
