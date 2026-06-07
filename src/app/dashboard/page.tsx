'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getCurrentUser, isLoggedIn } from '@/lib/auth'
import { User } from '@/types'

/**
 * 사용자 대시보드 페이지
 */
export default function DashboardPage() {
  const router = useRouter()
  const [ user, setUser ] = useState<User | null>(null)
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/auth/login')
      return
    }

    const currentUser = getCurrentUser()
    setUser(currentUser)
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
        <p className="text-slate-600">로드 중...</p>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="mb-8 text-4xl font-bold text-slate-900">
        마이 페이지
      </h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* 프로필 */}
        <Card>
          <CardHeader>
            <CardTitle>프로필</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-slate-600">이름</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">
                {user.name}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-600">이메일</p>
              <p className="mt-1 text-slate-900">
                {user.email}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-600">가입일</p>
              <p className="mt-1 text-slate-900">
                {new Date(user.createdAt).toLocaleDateString('ko-KR')}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 활동 */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>활동 요약</CardTitle>
            <CardDescription>
              당신의 여행 활동 통계
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-sm text-blue-600 font-medium">저장된 여행지</p>
                <p className="mt-2 text-3xl font-bold text-blue-900">0</p>
              </div>

              <div className="rounded-lg bg-green-50 p-4">
                <p className="text-sm text-green-600 font-medium">방문 계획</p>
                <p className="mt-2 text-3xl font-bold text-green-900">0</p>
              </div>
            </div>

            <p className="text-sm text-slate-600">
              여행지를 저장하고 방문 계획을 세워보세요!
            </p>

            <Link href="/destinations">
              <Button className="w-full">
                여행지 탐색하기
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* 추천 섹션 */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>시작하기</CardTitle>
          <CardDescription>
            다음 단계로 나아가세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/destinations">
              <div className="rounded-lg border border-slate-200 p-4 hover:border-blue-500 hover:bg-blue-50 transition-colors">
                <div className="text-2xl mb-2">🌍</div>
                <h3 className="font-semibold text-slate-900">여행지 탐색</h3>
                <p className="text-xs text-slate-600 mt-1">
                  세계의 아름다운 장소를 발견하세요
                </p>
              </div>
            </Link>

            <Link href="/search">
              <div className="rounded-lg border border-slate-200 p-4 hover:border-blue-500 hover:bg-blue-50 transition-colors">
                <div className="text-2xl mb-2">🔍</div>
                <h3 className="font-semibold text-slate-900">여행지 검색</h3>
                <p className="text-xs text-slate-600 mt-1">
                  특정 여행지를 찾아보세요
                </p>
              </div>
            </Link>

            <Link href="/">
              <div className="rounded-lg border border-slate-200 p-4 hover:border-blue-500 hover:bg-blue-50 transition-colors">
                <div className="text-2xl mb-2">📖</div>
                <h3 className="font-semibold text-slate-900">가이드</h3>
                <p className="text-xs text-slate-600 mt-1">
                  여행 계획 팁을 알아보세요
                </p>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
