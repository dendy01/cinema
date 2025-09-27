import { createSlice } from "@reduxjs/toolkit";

export interface UserModel
{
    userName: string;
    isLogined: boolean;
}

export interface UsersState
{
    currentUser: string,
    users: UserModel[],
}

const initialState: UsersState = {
    currentUser: '',
    users: []
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
            state.currentUser = action.payload.find((user: UserModel) => user.isLogined)?.userName;

            localStorage.setItem('users', JSON.stringify(state.users));
        }
    }
});

export const {
    setUsers
} = userSlice.actions;

export default userSlice.reducer;