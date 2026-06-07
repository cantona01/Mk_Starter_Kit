export interface Destination {
  id: string
  name: string
  country: string
  region: string
  description: string
  image: string
  rating: number
  reviews: number
  bestSeason: string
  attractions: string[]
  tags: string[]
  coordinates: {
    lat: number
    lng: number
  }
}

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}

export interface AuthResponse {
  success: boolean
  user?: User
  token?: string
  message?: string
}

export interface SearchFilters {
  keyword?: string
  country?: string
  tags?: string[]
}
