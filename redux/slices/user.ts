
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



type user = {
    name: string
}


export interface userState {
    loggedIn: boolean,
    userProfile: user | null | undefined,

}

const initialState: userState = {
    loggedIn: false,

    userProfile: {
        name: "",
    }
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoggedIn: (state: userState, action: PayloadAction<boolean>) => {
            state.loggedIn = action.payload
        },
        setUserProfile: (state: userState, action: PayloadAction<user | null>) => {
            state.userProfile = action.payload
        },
    },
})


export const { setUserProfile, setLoggedIn } = user.actions

export default user.reducer