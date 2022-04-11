/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  Welcome: undefined
  ForgotPassword: undefined
  Success: undefined
  VerifyEmail: undefined
  Home: undefined
  Menu:undefined
  Order:undefined
  Profile:undefined
  Cart:undefined
  Checkout:undefined
  OrderConfirmation:undefined
  TrackOrder:undefined
  Root: NavigatorScreenParams<RootTabParamList> | undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
  Home: undefined
  Menu: undefined
  Order: undefined
  Profile: undefined

}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >
