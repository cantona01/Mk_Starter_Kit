# 🌍 Travel Guide - 여행지 검색 스타터 킷

포트폴리오 프로젝트용 여행지 검색 및 정보 조회 웹 애플리케이션의 완전한 스타터 킷입니다.

## 🎯 프로젝트 개요

학생들이 현대적인 웹 개발 기술을 학습하고 포트폴리오를 구성할 수 있도록 설계된 풀스택 웹 애플리케이션입니다.

**주요 기능:**
- 🔍 여행지 검색 및 필터링
- 📍 여행지 상세 정보 조회
- 👤 사용자 인증 (로그인/회원가입)
- 📊 사용자 대시보드
- 📱 반응형 디자인
- 🎨 shadcn/ui 컴포넌트 통합

## 🛠 기술 스택

| 항목 | 기술 |
|------|------|
| **프론트엔드 프레임워크** | Next.js 14 |
| **언어** | TypeScript |
| **스타일링** | Tailwind CSS |
| **UI 컴포넌트** | shadcn/ui |
| **폼 관리** | React Hook Form |
| **검증** | Zod |
| **상태 관리** | React useState |
| **번들러** | Next.js (내장) |

## 📦 설치 및 실행

### 전제 조건
- Node.js 18.0 이상
- npm 또는 yarn

### 설치 방법

```bash
# 프로젝트 디렉토리로 이동
cd Mk_Starter_Kit

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버가 시작되면 [http://localhost:3000](http://localhost:3000)에서 애플리케이션에 접근할 수 있습니다.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린트 검사
npm run lint
```

## 📁 프로젝트 구조

```
Mk_Starter_Kit/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # 루트 레이아웃
│   │   ├── page.tsx              # 홈페이지
│   │   ├── globals.css           # 글로벌 스타일
│   │   ├── destinations/         # 여행지 페이지
│   │   │   ├── page.tsx          # 여행지 목록
│   │   │   └── [id]/page.tsx     # 여행지 상세
│   │   ├── search/               # 검색 페이지
│   │   ├── auth/                 # 인증 페이지
│   │   │   ├── login/
│   │   │   └── signup/
│   │   └── dashboard/            # 사용자 대시보드
│   ├── components/               # React 컴포넌트
│   │   ├── ui/                   # shadcn/ui 컴포넌트
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── badge.tsx
│   │   ├── layout/               # 레이아웃 컴포넌트
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── auth/                 # 인증 관련 컴포넌트
│   │   │   ├── LoginForm.tsx
│   │   │   └── SignupForm.tsx
│   │   ├── destinations/         # 여행지 관련 컴포넌트
│   │   │   ├── DestinationCard.tsx
│   │   │   ├── DestinationGrid.tsx
│   │   │   └── DestinationDetail.tsx
│   │   └── SearchForm.tsx        # 검색 폼
│   ├── lib/                      # 유틸리티 함수
│   │   ├── utils.ts              # 공용 유틸리티
│   │   ├── auth.ts               # 인증 로직
│   │   └── mockData.ts           # 더미 데이터
│   ├── types/                    # TypeScript 타입 정의
│   │   └── index.ts
│   └── hooks/                    # Custom React Hooks
├── public/                       # 정적 자산
├── package.json                  # 프로젝트 설정
├── tsconfig.json                 # TypeScript 설정
├── tailwind.config.ts            # Tailwind 설정
├── next.config.js                # Next.js 설정
└── .eslintrc.json                # ESLint 설정
```

## 🎓 주요 기능 설명

### 1. 여행지 검색 및 필터링

**파일:** `src/app/destinations/page.tsx`

여행지를 국가별로 필터링할 수 있으며, 실시간으로 화면이 업데이트됩니다.

```typescript
// 국가별 필터링 예제
const handleCountryFilter = (country: string) => {
  setFiltered(filterByCountry(country))
}
```

### 2. 여행지 상세 정보

**파일:** `src/app/destinations/[id]/page.tsx`

각 여행지의:
- 상세 설명
- 주요 관광지
- 평점 및 리뷰
- 최적 방문 시기
- 관련 여행지 추천

### 3. 사용자 인증

**파일:** `src/lib/auth.ts`

- LocalStorage 기반의 간단한 인증
- 로그인/회원가입 기능
- 사용자 정보 관리
- 토큰 기반 검증

```typescript
// 로그인 예제
const result = loginUser(email, password)
if (result.success) {
  router.push('/dashboard')
}
```

### 4. shadcn/ui 컴포넌트

**위치:** `src/components/ui/`

포함된 컴포넌트:
- **Button** - 다양한 변형의 버튼
- **Card** - 카드 레이아웃 (Header, Title, Content, Footer)
- **Input** - 입력 필드
- **Badge** - 배지 라벨

모든 컴포넌트는 Tailwind CSS로 스타일링되었으며, Radix UI 기반입니다.

```typescript
// Button 사용 예제
<Button variant="default" size="lg">
  클릭하세요
</Button>

// Card 사용 예제
<Card>
  <CardHeader>
    <CardTitle>제목</CardTitle>
  </CardHeader>
  <CardContent>내용</CardContent>
</Card>
```

### 5. 기본 레이아웃

**파일:** `src/components/layout/Header.tsx`, `Footer.tsx`

- 반응형 헤더 (데스크톱 및 모바일)
- 인증 상태에 따른 네비게이션 동적 변경
- 푸터 (사이트 정보 및 링크)

### 6. API 시뮬레이션

**파일:** `src/lib/mockData.ts`

실제 데이터베이스 대신 더미 데이터를 사용합니다. 추후 실제 API로 쉽게 교체 가능합니다.

```typescript
// 데이터 조회 예제
const destination = getDestinationById(id)
const results = searchDestinations(query)
const byCountry = filterByCountry(country)
```

## 💡 학습 포인트

### 1. Next.js 라우팅
- App Router 기반 파일 시스템 라우팅
- 동적 라우트 (`[id]`)
- 레이아웃 상속

### 2. TypeScript
- 컴포넌트 Props 타입 정의
- 인터페이스 및 타입 별칭
- 제네릭 활용

### 3. React 기초
- 함수형 컴포넌트
- useState Hook
- useRouter를 통한 네비게이션

### 4. 상태 관리
- 로컬 상태 (useState)
- LocalStorage를 통한 영속화

### 5. Tailwind CSS
- 유틸리티 기반 스타일링
- 반응형 디자인
- 다크모드 지원

### 6. 컴포넌트 설계
- 재사용 가능한 컴포넌트
- Props 통한 데이터 전달
- 컴포넌트 합성

## 🚀 확장 방향

이 스타터 킷에서는 다음과 같이 확장할 수 있습니다:

1. **실제 백엔드 API 연결**
   - `src/lib/mockData.ts`의 함수를 실제 API 호출로 변경
   - 에러 핸들링 추가

2. **데이터베이스 연동**
   - PostgreSQL + Prisma
   - MongoDB + Mongoose

3. **인증 개선**
   - JWT 토큰 기반 인증
   - OAuth (Google, GitHub 등)
   - Next-Auth.js 라이브러리

4. **기능 확장**
   - 여행지 즐겨찾기
   - 여행 계획 작성
   - 댓글 및 리뷰 시스템
   - 이미지 업로드

5. **배포**
   - Vercel (권장)
   - Netlify
   - AWS, GCP 등

## 📝 코딩 컨벤션

프로젝트에서 따르는 코딩 스타일:

```typescript
// ✅ 올바른 예제

// 들여쓰기: 2칸
if (condition) {
  doSomething()
}

// 따옴표: 단일 따옴표 사용
const message = 'Hello World'

// 세미콜론 미사용
const name = 'John'

// camelCase 변수명
const userEmail = 'user@example.com'

// 간단한 JSDoc 주석
/** 사용자 정보를 조회합니다 */
function getUserInfo(id: string) {
  // ...
}
```

## 🔧 개발 팁

### 핫 리로드 활용
```bash
npm run dev
```
파일 변경 시 자동으로 브라우저가 새로고침됩니다.

### TypeScript 타입 검사
```bash
npm run lint
```

### 개발 도구
- **React DevTools** - 컴포넌트 트리 탐색
- **Next.js DevTools** - 라우팅 및 성능 분석
- **Tailwind CSS IntelliSense** - VSCode 확장

## 📚 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 공식 문서](https://react.dev)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [shadcn/ui 가이드](https://ui.shadcn.com)

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포할 수 있습니다.

## 🤝 피드백

스타터 킷 사용 시 피드백이나 개선 제안이 있으시면 언제든지 알려주세요!

---

**마지막 업데이트:** 2024년 6월
**버전:** 1.0.0
