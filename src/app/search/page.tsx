'use client'

import { useState } from 'react'
import { SearchForm } from '@/components/SearchForm'
import { DestinationGrid } from '@/components/destinations/DestinationGrid'
import { searchDestinations, destinations } from '@/lib/mockData'

/**
 * 검색 페이지
 */
export default function SearchPage() {
  const [ searchResults, setSearchResults ] = useState(destinations)
  const [ searchQuery, setSearchQuery ] = useState('')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setSearchResults(destinations)
    } else {
      setSearchResults(searchDestinations(query))
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="mb-8 text-4xl font-bold text-slate-900">
        여행지 검색
      </h1>

      <div className="mb-12">
        <SearchForm onSearch={handleSearch} />
      </div>

      {searchQuery && (
        <p className="mb-6 text-slate-600">
          &quot;{searchQuery}&quot;에 대한 검색 결과: {searchResults.length}개
        </p>
      )}

      <DestinationGrid destinations={searchResults} />
    </div>
  )
}
