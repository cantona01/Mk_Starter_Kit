import { Destination } from '@/types'
import { DestinationCard } from './DestinationCard'

interface DestinationGridProps {
  destinations: Destination[]
  isLoading?: boolean
}

/**
 * 여행지 그리드 컴포넌트
 */
export function DestinationGrid({ destinations, isLoading }: DestinationGridProps) {
  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-80 animate-pulse rounded-lg bg-slate-200" />
        ))}
      </div>
    )
  }

  if (destinations.length === 0) {
    return (
      <div className="rounded-lg border border-slate-200 bg-slate-50 py-12 text-center">
        <p className="text-lg font-medium text-slate-600">
          검색 결과가 없습니다.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          다른 조건으로 검색해보세요.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map(destination => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  )
}
