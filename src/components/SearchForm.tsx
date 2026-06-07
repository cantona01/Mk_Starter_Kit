'use client'

import { FormEvent, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface SearchFormProps {
  onSearch: (query: string) => void
}

/**
 * 검색 폼 컴포넌트
 */
export function SearchForm({ onSearch }: SearchFormProps) {
  const [ query, setQuery ] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        placeholder="여행지, 국가, 태그 검색..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="flex-1"
      />
      <Button type="submit">
        검색
      </Button>
    </form>
  )
}
