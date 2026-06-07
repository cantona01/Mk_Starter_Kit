import { User } from '@/types'

const STORAGE_KEY = 'auth_token'
const USER_KEY = 'auth_user'

/**
 * 로그인 시뮬레이션 (실제 앱에서는 API 호출)
 */
export function loginUser(email: string, password: string): { success: boolean; user?: User; token?: string } {
  if (!email || !password) {
    return { success: false }
  }

  const user: User = {
    id: '1',
    email,
    name: email.split('@')[0],
    createdAt: new Date().toISOString(),
  }

  const token = btoa(JSON.stringify(user))

  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, token)
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  return { success: true, user, token }
}

/**
 * 회원가입 시뮬레이션
 */
export function signupUser(email: string, name: string, password: string): { success: boolean; user?: User } {
  if (!email || !name || !password) {
    return { success: false }
  }

  const user: User = {
    id: Math.random().toString(36).substr(2, 9),
    email,
    name,
    createdAt: new Date().toISOString(),
  }

  const token = btoa(JSON.stringify(user))

  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, token)
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  return { success: true, user }
}

/**
 * 현재 로그인 사용자 조회
 */
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') {
    return null
  }

  const userStr = localStorage.getItem(USER_KEY)
  if (!userStr) {
    return null
  }

  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

/**
 * 로그인 여부 확인
 */
export function isLoggedIn(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  return !!localStorage.getItem(STORAGE_KEY)
}

/**
 * 로그아웃
 */
export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(USER_KEY)
  }
}

/**
 * 토큰 검증
 */
export function validateToken(token?: string): boolean {
  if (!token && typeof window !== 'undefined') {
    token = localStorage.getItem(STORAGE_KEY) || undefined
  }
  return !!token
}
