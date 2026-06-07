'use client'

import { useState } from 'react'
import { DestinationGrid } from '@/components/destinations/DestinationGrid'
import { Button } from '@/components/ui/button'
import { destinations, filterByCountry } from '@/lib/mockData'
import { Destination } from '@/types'

/**
 * 여행지 목록 페이지
 */
export default function DestinationsPage() {
  const [ filtered, setFiltered ] = useState<Destination[]>(destinations)
  const [ selectedCountry, setSelectedCountry ] = useState<string>('')

  const countries = Array.from(new Set(destinations.map(d => d.country))).sort()

  const handleCountryFilter = (country: string) => {
    if (selectedCountry === country) {
      setFiltered(destinations)
      setSelectedCountry('')
    } else {
      setFiltered(filterByCountry(country))
      setSelectedCountry(country)
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="mb-8 text-4xl font-bold text-slate-900">
        전 세계 여행지
      </h1>

      {/* 필터 섹션 */}
      <div className="mb-8">
        <h3 className="mb-4 font-semibold text-slate-900">
          국가 필터
        </h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCountry === '' ? 'default' : 'outline'}
            onClick={() => handleCountryFilter('')}
          >
            모두 보기
          </Button>
          {countries.map(country => (
            <Button
              key={country}
              variant={selectedCountry === country ? 'default' : 'outline'}
              onClick={() => handleCountryFilter(country)}
            >
              {country}
            </Button>
          ))}
        </div>
      </div>

      {/* 여행지 그리드 */}
      <DestinationGrid destinations={filtered} />
    </div>
  )
}
