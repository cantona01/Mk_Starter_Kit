import { Destination } from '@/types'

export const destinations: Destination[] = [
  {
    id: '1',
    name: '파리',
    country: '프랑스',
    region: '유럽',
    description: '빛의 도시 파리는 예술, 문화, 로맨스의 중심지입니다. 에펠탑, 루브르 박물관, 노트르담 대성당 등 세계적으로 유명한 랜드마크들을 방문할 수 있습니다.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 2450,
    bestSeason: '4월-5월, 9월-10월',
    attractions: ['에펠탑', '루브르 박물관', '노트르담 대성당', '샹젤리제'],
    tags: ['문화', '로맨스', '미술'],
    coordinates: { lat: 48.8566, lng: 2.3522 },
  },
  {
    id: '2',
    name: '도쿄',
    country: '일본',
    region: '아시아',
    description: '도쿄는 전통과 현대가 조화를 이루는 활기찬 도시입니다. 신사, 사원, 고층 빌딩, 쇼핑 거리 등 다양한 매력을 가지고 있습니다.',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9cc?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 1980,
    bestSeason: '3월-5월, 9월-11월',
    attractions: ['스쿠야시, 센소지 사원', '메이지 신사', '시부야 교차로', '도쿄 타워'],
    tags: ['문화', '현대', '쇼핑'],
    coordinates: { lat: 35.6762, lng: 139.6503 },
  },
  {
    id: '3',
    name: '뉴욕',
    country: '미국',
    region: '북미',
    description: '뉴욕은 세계에서 가장 활기찬 도시 중 하나입니다. 브로드웨이 쇼, 박물관, 공원, 그리고 끝없는 쇼핑 기회가 있습니다.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
    rating: 4.6,
    reviews: 3120,
    bestSeason: '5월-6월, 9월-10월',
    attractions: ['자유의 여신상', '타임스스퀘어', '센트럴 파크', '메트로폴리탄 박물관'],
    tags: ['도시', '엔터테인먼트', '문화'],
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: '4',
    name: '방콕',
    country: '태국',
    region: '동남아시아',
    description: '방콕은 화려한 사원, 분주한 야시장, 그리고 맛있는 음식으로 유명합니다. 태국의 수도이자 문화와 상거래의 중심지입니다.',
    image: 'https://images.unsplash.com/photo-1552520514-5fefe8c9ef14?w=800&h=600&fit=crop',
    rating: 4.5,
    reviews: 1650,
    bestSeason: '11월-2월',
    attractions: ['왓 프라 깨우', '왓 포', '궁전', '주말 야시장'],
    tags: ['문화', '음식', '야시장'],
    coordinates: { lat: 13.7563, lng: 100.5018 },
  },
  {
    id: '5',
    name: '로마',
    country: '이탈리아',
    region: '유럽',
    description: '영원한 도시 로마는 고대 건축물과 예술로 가득합니다. 콜로세움, 바티칸, 판테온 등 역사적인 유산을 보유하고 있습니다.',
    image: 'https://images.unsplash.com/photo-1552832230-ab0397df258d?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 2800,
    bestSeason: '4월-5월, 9월-10월',
    attractions: ['콜로세움', '바티칸', '판테온', '트레비 분수'],
    tags: ['역사', '문화', '미술'],
    coordinates: { lat: 41.9028, lng: 12.4964 },
  },
  {
    id: '6',
    name: '싱가포르',
    country: '싱가포르',
    region: '동남아시아',
    description: '현대적이고 깨끗한 싱가포르는 동양과 서양의 문화가 만나는 곳입니다. 마리나 베이 샌즈, 정원, 쇼핑몰 등이 있습니다.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    rating: 4.6,
    reviews: 1420,
    bestSeason: '2월-4월, 8월-10월',
    attractions: ['마리나 베이 샌즈', '가든스 바이 더 베이', '센토사 섬', '싱가포르 플라이어'],
    tags: ['현대', '쇼핑', '야경'],
    coordinates: { lat: 1.3521, lng: 103.8198 },
  },
]

export function getDestinationById(id: string): Destination | undefined {
  return destinations.find(d => d.id === id)
}

export function searchDestinations(query: string): Destination[] {
  const lowerQuery = query.toLowerCase()
  return destinations.filter(
    d =>
      d.name.toLowerCase().includes(lowerQuery) ||
      d.country.toLowerCase().includes(lowerQuery) ||
      d.tags.some(t => t.toLowerCase().includes(lowerQuery)),
  )
}

export function filterByCountry(country: string): Destination[] {
  return destinations.filter(d => d.country === country)
}

export function filterByRegion(region: string): Destination[] {
  return destinations.filter(d => d.region === region)
}

export function getUniqueCountries(): string[] {
  return Array.from(new Set(destinations.map(d => d.country))).sort()
}

export function getUniqueRegions(): string[] {
  return Array.from(new Set(destinations.map(d => d.region))).sort()
}

export function getUniqueTags(): string[] {
  const tags = destinations.flatMap(d => d.tags)
  return Array.from(new Set(tags)).sort()
}
