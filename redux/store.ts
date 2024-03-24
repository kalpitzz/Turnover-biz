import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from "./slices/user"


const rootReducer = combineReducers({
  user: userReducer,
});

export const reduxStore = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch