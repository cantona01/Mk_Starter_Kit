# 🚀 스타터 킷 설정 가이드

이 가이드는 처음부터 프로젝트를 설정하고 커스터마이징하는 방법을 설명합니다.

## 📋 목차

1. [초기 설정](#초기-설정)
2. [프로젝트 커스터마이징](#프로젝트-커스터마이징)
3. [API 연동](#api-연동)
4. [배포](#배포)
5. [문제 해결](#문제-해결)

---

## 초기 설정

### 1단계: 의존성 설치

```bash
cd Mk_Starter_Kit
npm install
```

### 2단계: 개발 서버 시작

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 이동하면 애플리케이션을 볼 수 있습니다.

### 3단계: 프로젝트 확인

주요 페이지 확인:
- **홈**: http://localhost:3000
- **여행지**: http://localhost:3000/destinations
- **검색**: http://localhost:3000/search
- **로그인**: http://localhost:3000/auth/login
- **회원가입**: http://localhost:3000/auth/signup
- **대시보드**: http://localhost:3000/dashboard (로그인 필요)

---

## 프로젝트 커스터마이징

### 프로젝트명 변경

**1. `package.json` 수정**

```json
{
  "name": "your-project-name",
  "description": "당신의 프로젝트 설명"
}
```

**2. `src/app/layout.tsx` 수정**

```typescript
export const metadata: Metadata = {
  title: '당신의 프로젝트명',
  description: '당신의 설명',
}
```

### 색상 커스터마이징

**`src/app/globals.css` 수정**

```css
:root {
  /* 기본 색상 변경 */
  --primary: 220 90% 56%;        /* 주요 색상 */
  --secondary: 240 10% 20%;      /* 보조 색상 */
  --accent: 280 85% 67%;         /* 강조 색상 */
  --destructive: 0 84% 60%;      /* 위험 색상 */
}
```

색상은 HSL 형식입니다. [HSL Color Picker](https://www.w3schools.com/colors/colors_hsl.asp)에서 원하는 색상을 찾을 수 있습니다.

### 여행지 데이터 수정

**`src/lib/mockData.ts` 수정**

```typescript
export const destinations: Destination[] = [
  {
    id: '1',
    name: '서울',
    country: '한국',
    region: '아시아',
    description: '대한민국의 수도...',
    image: 'https://example.com/image.jpg',
    rating: 4.8,
    reviews: 2450,
    bestSeason: '4월-5월, 9월-10월',
    attractions: ['서울타워', '명동', '강남역'],
    tags: ['도시', '문화', '쇼핑'],
    coordinates: { lat: 37.5665, lng: 126.978 },
  },
  // 더 많은 여행지 추가
]
```

### 로고/브랜드 변경

**`src/components/layout/Header.tsx` 수정**

```typescript
<Link href="/" className="flex items-center gap-2">
  <div className="text-2xl font-bold text-blue-600">🌍</div>
  {/* 텍스트를 당신의 프로젝트명으로 변경 */}
  <span className="hidden font-bold text-slate-900 sm:inline">
    Your Project Name
  </span>
</Link>
```

---

## API 연동

### 기존 구조에서 API로 변경

**현재 상태:** `mockData.ts`에서 더미 데이터 사용

**변경 방법:**

#### 1. API 클라이언트 생성

```typescript
// src/lib/api.ts 새로 생성

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

export async function getDestinations() {
  const response = await fetch(`${API_BASE_URL}/destinations`)
  if (!response.ok) throw new Error('Failed to fetch')
  return response.json()
}

export async function getDestinationById(id: string) {
  const response = await fetch(`${API_BASE_URL}/destinations/${id}`)
  if (!response.ok) throw new Error('Failed to fetch')
  return response.json()
}

export async function searchDestinations(query: string) {
  const response = await fetch(`${API_BASE_URL}/destinations/search?q=${query}`)
  if (!response.ok) throw new Error('Failed to fetch')
  return response.json()
}
```

#### 2. 컴포넌트에서 API 호출

```typescript
// src/app/destinations/page.tsx

'use client'

import { useEffect, useState } from 'react'
import { getDestinations } from '@/lib/api'

export default function DestinationsPage() {
  const [ destinations, setDestinations ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDestinations()
        setDestinations(data)
      } catch (error) {
        console.error('Failed to fetch destinations:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>로드 중...</div>

  return (
    // 기존 코드와 동일
  )
}
```

#### 3. 환경 변수 설정

```bash
# .env.local 파일 생성

NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_API_KEY=your-api-key
```

### 인증 연동 (JWT)

**`src/lib/auth.ts` 수정**

```typescript
export async function loginUser(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    return { success: false, message: '로그인 실패' }
  }

  const data = await response.json()
  localStorage.setItem('token', data.token)
  localStorage.setItem('user', JSON.stringify(data.user))

  return { success: true, user: data.user, token: data.token }
}
```

---

## 배포

### Vercel 배포 (권장)

#### 1. Git 저장소 생성

```bash
cd Mk_Starter_Kit
git init
git add .
git commit -m "Initial commit"
```

#### 2. GitHub에 푸시

```bash
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

#### 3. Vercel 연결

1. [Vercel.com](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 저장소 선택
4. 자동으로 배포됨

#### 4. 환경 변수 설정

Vercel 대시보드 → Project Settings → Environment Variables

```
NEXT_PUBLIC_API_URL=https://your-api.com
```

### 로컬 빌드 테스트

배포 전에 로컬에서 프로덕션 빌드를 테스트하세요:

```bash
npm run build
npm run start
```

---

## 문제 해결

### 1. "Module not found" 에러

**원인:** 경로 별칭이 제대로 설정되지 않음

**해결:**
```bash
npm install
```

### 2. Tailwind CSS 스타일이 적용되지 않음

**원인:** PostCSS 설정 문제

**해결:**
```bash
npm install --save-dev tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. 로그인 후 대시보드에서 로드 중 상태가 계속됨

**원인:** 클라이언트 사이드 레이아웃 문제

**해결:** 다시 새로고침하거나 캐시 삭제

### 4. 이미지가 로드되지 않음

**원인:** Unsplash 이미지 URL이 작동하지 않음

**해결:** `next.config.js`에서 이미지 도메인 확인:

```javascript
images: {
  domains: ['images.unsplash.com'],
}
```

---

## 추가 설정

### ESLint 규칙 커스터마이징

`.eslintrc.json`을 수정하여 린트 규칙을 변경할 수 있습니다:

```json
{
  "rules": {
    "semi": ["error", "never"],           // 세미콜론 미사용
    "quotes": ["error", "single"],        // 단일 따옴표
    "indent": ["error", 2],               // 2칸 들여쓰기
    "no-unused-vars": ["warn", {          // 사용하지 않는 변수 경고
      "argsIgnorePattern": "^_"
    }]
  }
}
```

### TypeScript 엄격 모드

`tsconfig.json`에서 엄격 모드를 활성화했습니다:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

필요시 덜 엄격하게 설정할 수 있습니다.

---

## 다음 단계

1. **데이터베이스 연동** - PostgreSQL + Prisma
2. **실시간 업데이트** - WebSocket 또는 Server-Sent Events
3. **검색 기능 개선** - Elasticsearch
4. **이미지 최적화** - Next.js Image 컴포넌트
5. **캐싱 전략** - Redis 또는 ISR (Incremental Static Regeneration)
6. **모니터링** - Sentry, LogRocket
7. **테스트** - Jest, React Testing Library
8. **E2E 테스트** - Cypress, Playwright

---

질문이 있으시면 README.md의 참고 자료를 확인하세요!
