import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAut: null,
    hiddenMenu: true
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
        },
        verOcultarMenu: state => {
            return{
                ...state,
                hiddenMenu: !state.hiddenMenu
            }
        }

    }

})

export const { setUserAut, verOcultarMenu} = userSlice.actions;

export default userSlice.reducer;


