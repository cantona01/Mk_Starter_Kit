import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 클래스명 병합 유틸리티
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 평점 표시 포맷팅
 */
export function formatRating(rating: number): string {
  return rating.toFixed(1)
}

/**
 * 리뷰 개수 포맷팅
 */
export function formatReviews(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`
  }
  return count.toString()
}

/**
 * URL 생성
 */
export function createDestinationUrl(id: string): string {
  return `/destinations/${id}`
}

/**
 * 배열에서 특정 요소 필터링
 */
export function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate)
}
