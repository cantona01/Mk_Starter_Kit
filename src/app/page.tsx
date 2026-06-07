import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DestinationGrid } from '@/components/destinations/DestinationGrid'
import { destinations } from '@/lib/mockData'

/**
 * 홈페이지
 */
export default function Home() {
  const featuredDestinations = destinations.slice(0, 3)

  return (
    <div>
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold">
            세계 여행을 시작하세요 🌍
          </h1>
          <p className="mb-8 text-xl text-blue-100">
            아름다운 여행지를 발견하고, 계획하고, 기억하세요.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/destinations">
              <Button size="lg" variant="secondary">
                모든 여행지 보기
              </Button>
            </Link>
            <Link href="/search">
              <Button size="lg" variant="outline">
                검색하기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 추천 여행지 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              추천 여행지
            </h2>
            <p className="text-slate-600">
              가장 인기 있는 여행지들을 살펴보세요.
            </p>
          </div>

          <DestinationGrid destinations={featuredDestinations} />

          <div className="mt-12 text-center">
            <Link href="/destinations">
              <Button size="lg">
                더 많은 여행지 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            주요 기능
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 text-4xl">🔍</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                여행지 검색
              </h3>
              <p className="text-slate-600">
                이름, 국가, 태그로 원하는 여행지를 빠르게 찾으세요.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 text-4xl">📍</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                상세 정보
              </h3>
              <p className="text-slate-600">
                각 여행지의 매력, 관광지, 최적 방문 시기를 알아보세요.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 text-4xl">👤</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                개인 계정
              </h3>
              <p className="text-slate-600">
                로그인하여 여행 계획을 저장하고 관리하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            지금 시작하세요
          </h2>
          <p className="mb-8 text-lg text-slate-600">
            계정을 만들고 여행 계획을 시작하세요.
          </p>
          <Link href="/auth/signup">
            <Button size="lg">
              무료로 시작하기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
