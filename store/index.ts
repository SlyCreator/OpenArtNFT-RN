import { configureStore} from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import global from './global'
import loading from './loading'
import authReducer from './auth'

 const store = configureStore({
  reducer: {
    global:global,
    loading: loading,
    auth:authReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false,
    immutableCheck: false
  })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

export default store;