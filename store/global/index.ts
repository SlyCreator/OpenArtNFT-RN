import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'

export interface AlertState {
  alertCancelButtonText?: string
  alertContinueButtonText: string
  alertDescription: string
  alertTitle: string
  onConfirm?(): void
  onCancel?(): void
  showAlert: boolean
}

export interface Response {
  response: {
    errors: Array<any>
  }
}

export interface GlobalState {
  isOnboarded: boolean
  isOnline: boolean
  alert: AlertState

  previousOnlineState: boolean
}

const initialState: GlobalState = {
  isOnboarded: false,
  isOnline: true,
  previousOnlineState: true,
  alert: {
    alertCancelButtonText: '',
    alertContinueButtonText: '',
    alertDescription: '',
    alertTitle: '',
    onConfirm: () => {},
    onCancel: () => {},
    showAlert: false,
  },
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setOnboarding: (state, action: PayloadAction<boolean>) => {
      state.isOnboarded = action.payload
    },
    setOnline: (state, action: PayloadAction<boolean>) => {
      state.previousOnlineState = state.isOnline
      state.isOnline = action.payload
    },
    setAlert: (state, action: PayloadAction<AlertState>) => {
      state.alert = action.payload
    },
    setShowAlert: (state, action: PayloadAction<boolean>) => {
      state.alert.showAlert = action.payload
    },
  },
})

export const { setOnboarding, setOnline, setShowAlert, setAlert } =
  globalSlice.actions

export const selectGlobal = (state: any) => state.global
export const showOnce = (key: string) => (state: any) =>
  state.global.showOnce[key]

export default persistReducer(
  { key: 'global', storage: AsyncStorage },
  globalSlice.reducer
)
