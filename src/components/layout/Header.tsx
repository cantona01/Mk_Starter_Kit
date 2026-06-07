'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { getCurrentUser, logout } from '@/lib/auth'
import { useEffect, useState } from 'react'

/**
 * 헤더 컴포넌트 - 네비게이션 바
 */
export function Header() {
  const router = useRouter()
  const [ user, setUser ] = useState<ReturnType<typeof getCurrentUser>>(null)

  useEffect(() => {
    setUser(getCurrentUser())
  }, [])

  const handleLogout = () => {
    logout()
    setUser(null)
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-blue-600">🌍</div>
          <span className="hidden font-bold text-slate-900 sm:inline">Travel Guide</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-blue-600">
            홈
          </Link>
          <Link href="/destinations" className="text-sm font-medium text-slate-700 hover:text-blue-600">
            여행지
          </Link>
          <Link href="/search" className="text-sm font-medium text-slate-700 hover:text-blue-600">
            검색
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  {user.name}
                </Button>
              </Link>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleLogout}
              >
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="outline" size="sm">
                  로그인
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">
                  회원가입
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
