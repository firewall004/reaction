import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, UserData } from "../utils/model";

const initialState: AuthState = {
	user: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserData>) => {
			state.user = action.payload
		},
	},
});

export const {
	setUser
} = authSlice.actions;

export default authSlice.reducer;