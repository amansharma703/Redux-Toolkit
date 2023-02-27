import { PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './user.types';

export const userActions = {

    addUser: (state: UserState, action: PayloadAction<string>) => {
        return {
            ...state,
            users: [...state.users, action.payload],
        }
    },

    removeUser: (state: UserState, action: PayloadAction<number>) => {
        return {
            ...state,
            users: state.users.filter((user, index) => index !== action.payload),
        }
    },

    clearAllUsers: (state: UserState) => {
        return {
            ...state,
            users: [],
        }
    }
};

