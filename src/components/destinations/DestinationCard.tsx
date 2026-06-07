import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Destination } from '@/types'
import { formatRating, formatReviews } from '@/lib/utils'

interface DestinationCardProps {
  destination: Destination
}

/**
 * 여행지 카드 컴포넌트
 */
export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${destination.id}`}>
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden bg-slate-200">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          <Badge className="absolute right-4 top-4 bg-yellow-500 text-white">
            ⭐ {formatRating(destination.rating)}
          </Badge>
        </div>

        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-slate-900">
            {destination.name}
          </h3>

          <p className="mt-1 text-sm text-slate-600">
            {destination.country}
          </p>

          <p className="mt-2 line-clamp-2 text-sm text-slate-700">
            {destination.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {destination.tags.slice(0, 2).map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <p className="mt-3 text-xs text-slate-500">
            ({formatReviews(destination.reviews)} 리뷰)
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
