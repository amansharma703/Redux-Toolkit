import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./user.types";
import { userActions } from "./user.actions";

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: userActions,
});

export const {
  addUser,
  removeUser,
  clearAllUsers
} = userSlice.actions;

export const userReducer = userSlice.reducer;