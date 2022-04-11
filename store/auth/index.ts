import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import type { RootState } from '..'
import { AuthHandler } from '../../module/auth'

export type UserInfo = { email: string; password: string }
export type LoginPayload = {
  accessToken: string
  refreshToken: string
  expiresAt: number
}
export interface Token {
  accessToken: string
  refreshToken: string
  expiresAt: number
}

interface AuthState {
  token?: Token
  userInfo?: UserInfo
  deviceId?: string
  isUserOnboarded: boolean
}

const initialState: AuthState = {
  isUserOnboarded: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<Token>) => {
      state.token = action.payload
    },
    setUserOnboarded: (state, action: PayloadAction<boolean>) => {
      state.isUserOnboarded = action.payload
    },
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = {
        ...state.userInfo,
        ...action.payload,
      }
    },
    setLoginResponse: (state, action: PayloadAction<LoginPayload>) => {
      const auth = AuthHandler.getAuth(action.payload)
      AuthHandler.setToken(auth)
      state.token = {
        accessToken: action.payload.accessToken,
        expiresAt: action.payload.expiresAt,
        refreshToken: action.payload.refreshToken,
      }
      // state.userInfo = action.payload.user
    },
    setDeviceId: (state, action: PayloadAction<string>) => {
      state.deviceId = action.payload
    },
    reset: (state) => {
      AuthHandler.setToken(null)
      state.token = undefined
      state.isUserOnboarded = false
    },
  },
})

export const {
  setToken,
  setUserInfo,
  setLoginResponse,
  setDeviceId,
  reset,
  setUserOnboarded,
} = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
}

export default persistReducer(persistConfig, authSlice.reducer)
