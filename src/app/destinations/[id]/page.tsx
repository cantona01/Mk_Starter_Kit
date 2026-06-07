import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { destinations, getDestinationById } from '@/lib/mockData'
import { formatRating, formatReviews } from '@/lib/utils'
import { notFound } from 'next/navigation'

interface DestinationPageProps {
  params: {
    id: string
  }
}

/**
 * 여행지 상세 페이지
 */
export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = getDestinationById(params.id)

  if (!destination) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Link href="/destinations">
        <Button variant="ghost" className="mb-6">
          ← 돌아가기
        </Button>
      </Link>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* 메인 이미지 */}
        <div className="lg:col-span-2">
          <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              className="object-cover"
            />
          </div>

          {/* 기본 정보 */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-3xl">
                {destination.name}
              </CardTitle>
              <p className="mt-2 text-lg text-slate-600">
                {destination.country}
              </p>
            </CardHeader>

            <CardContent>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl font-semibold">
                    {formatRating(destination.rating)}
                  </span>
                </div>
                <div className="text-sm text-slate-600">
                  ({formatReviews(destination.reviews)} 리뷰)
                </div>
              </div>

              <p className="mb-6 text-lg text-slate-700 leading-relaxed">
                {destination.description}
              </p>

              <div>
                <h3 className="mb-3 font-semibold text-slate-900">
                  태그
                </h3>
                <div className="flex flex-wrap gap-2">
                  {destination.tags.map(tag => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 관광지 */}
          <Card>
            <CardHeader>
              <CardTitle>주요 관광지</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {destination.attractions.map(attraction => (
                  <li key={attraction} className="flex items-center gap-2 text-slate-700">
                    <span className="text-lg">📍</span>
                    {attraction}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 사이드바 */}
        <div className="space-y-6">
          {/* 정보 카드 */}
          <Card>
            <CardHeader>
              <CardTitle>정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-slate-600">지역</p>
                <p className="mt-1 text-slate-900">
                  {destination.region}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-600">국가</p>
                <p className="mt-1 text-slate-900">
                  {destination.country}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-600">최적 방문시기</p>
                <p className="mt-1 text-slate-900">
                  {destination.bestSeason}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-600">좌표</p>
                <p className="mt-1 text-sm text-slate-900">
                  {destination.coordinates.lat.toFixed(4)}°N<br />
                  {destination.coordinates.lng.toFixed(4)}°E
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Button className="w-full" size="lg">
            여행 계획하기
          </Button>

          <Button variant="outline" className="w-full" size="lg">
            저장하기 ♥️
          </Button>
        </div>
      </div>

      {/* 추천 여행지 */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          관련 여행지
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations
            .filter(d => d.country === destination.country && d.id !== destination.id)
            .slice(0, 3)
            .map(related => (
              <Link key={related.id} href={`/destinations/${related.id}`}>
                <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                  <div className="relative h-40 w-full overflow-hidden bg-slate-200">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900">
                      {related.name}
                    </h3>
                    <p className="text-sm text-slate-600">
                      ⭐ {formatRating(related.rating)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
