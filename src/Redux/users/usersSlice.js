import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAut: null,
    }

const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers:{
        setUserAut :(state, action) => {
            return {
                ...state,
                userAut: action.payload
            }
        }

    }

})

export const { setUserAut } = userSlice.actions;

export default userSlice.reducer;



