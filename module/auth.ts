import AsyncStorage from '@react-native-async-storage/async-storage'
import jwtDecode from 'jwt-decode'
import { LoginPayload } from '../store/auth'

export interface Auth {
  token: string
  refreshToken: string
  expiresAt: Date
}

export class AuthHandler {
  private static key = 'auth-handler'

  public static getToken(): Promise<Auth | null> {
    return AsyncStorage.getItem(this.key).then((res: any) => {
      if (!res) return null
      try {
        return JSON.parse(res) as Auth
      } catch {
        return null
      }
    })
  }

  public static setToken(value: Auth | null): Promise<void> {
    return AsyncStorage.setItem(this.key, JSON.stringify(value))
  }

  public static removeAuth(): Promise<void> {
    return AsyncStorage.removeItem(this.key)
  }

  public static getAuth(value: LoginPayload): Auth {
    let expiresAt: Date = new Date()

    try {
      const jwt = jwtDecode<{ exp: number }>(value.accessToken)
      expiresAt = new Date(jwt.exp * 1000)
    } catch {
      // eslint-disable-next-line no-console
      console.error('cannot read JWT')
    }

    return {
      token: value.accessToken,
      refreshToken: value.refreshToken,
      expiresAt,
    }
  }
}
