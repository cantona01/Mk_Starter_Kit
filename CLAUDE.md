# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**Travel Guide** - 여행지 검색 및 정보 조회 포트폴리오 스타터 킷

학생들이 현대적인 웹 개발 기술을 학습하고 포트폴리오를 구성할 수 있도록 설계된 Next.js 풀스택 웹 애플리케이션입니다.

## 주요 기능

- 🔍 **여행지 검색**: 이름, 국가, 태그로 여행지 검색
- 📍 **상세 정보**: 평점, 관광지, 최적 방문 시기, 좌표 조회
- 🏷️ **필터링**: 국가별 여행지 필터링
- 👤 **인증**: LocalStorage 기반 로그인/회원가입 (간단한 예제)
- 📊 **대시보드**: 로그인 사용자 전용 페이지
- 📱 **반응형 디자인**: 모바일/태블릿/데스크톱 지원

## 기술 스택

| 항목 | 기술 |
|------|------|
| **프레임워크** | Next.js 14 (App Router) |
| **언어** | TypeScript 5.3 |
| **스타일** | Tailwind CSS 3.3 |
| **UI 컴포넌트** | shadcn/ui (Radix UI 기반) |
| **폼** | React Hook Form + Zod |
| **유틸리티** | clsx, tailwind-merge |

## 개발 명령어

```bash
npm run dev      # 개발 서버 시작 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 시작
npm run lint     # ESLint 검사
```

## 코드 구조

### App Router 기반 페이지 구조
```
src/app/
├── layout.tsx              # 루트 레이아웃 (Header, Footer)
├── page.tsx                # 홈페이지 (히어로 + 추천)
├── globals.css             # 글로벌 스타일
├── destinations/
│   ├── page.tsx            # 여행지 목록 + 필터
│   └── [id]/page.tsx       # 여행지 상세
├── search/
│   └── page.tsx            # 검색 페이지
├── auth/
│   ├── login/page.tsx      # 로그인
│   └── signup/page.tsx     # 회원가입
└── dashboard/
    └── page.tsx            # 사용자 대시보드 (로그인 필요)
```

### 컴포넌트 조직
```
src/components/
├── ui/                     # shadcn/ui 컴포넌트
│   ├── button.tsx          # CVA 기반 버튼
│   ├── card.tsx            # 카드 레이아웃
│   ├── input.tsx           # 입력 필드
│   └── badge.tsx           # 배지/라벨
├── layout/                 # 레이아웃
│   ├── Header.tsx          # 반응형 헤더 + 인증 상태
│   └── Footer.tsx          # 푸터
├── auth/                   # 인증
│   ├── LoginForm.tsx       # 로그인 폼
│   └── SignupForm.tsx      # 회원가입 폼
├── destinations/           # 여행지
│   ├── DestinationCard.tsx # 카드 컴포넌트
│   └── DestinationGrid.tsx # 그리드 레이아웃
└── SearchForm.tsx          # 검색 폼
```

### 비즈니스 로직

**src/lib/**
- `auth.ts` - LocalStorage 기반 인증 (loginUser, signupUser, logout, getCurrentUser, isLoggedIn)
- `mockData.ts` - 6개 여행지 더미 데이터 + 검색/필터 함수 (searchDestinations, filterByCountry, filterByRegion 등)
- `utils.ts` - cn() (클래스 병합), formatRating, formatReviews 등 유틸리티

**src/types/index.ts** - TypeScript 타입 정의
- `Destination` - 여행지 데이터 타입
- `User` - 사용자 타입
- `AuthResponse` - 인증 응답 타입
- `SearchFilters` - 검색 필터 타입

## 아키텍처 패턴

### API 시뮬레이션
mockData.ts에서 더미 데이터를 사용합니다. 실제 API로 변경하려면:
1. `src/lib/api.ts` 생성 (fetch 기반 API 클라이언트)
2. mockData 함수 호출을 API 호출로 변경
3. `.env.local`에 `NEXT_PUBLIC_API_URL` 추가

### 인증 흐름
1. LoginForm/SignupForm에서 사용자 입력
2. auth.ts의 loginUser/signupUser 호출 (LocalStorage에 저장)
3. Header에서 getCurrentUser로 로그인 상태 확인
4. 보호된 페이지 (dashboard)에서 isLoggedIn 검사

### 상태 관리
현재는 React useState만 사용. 필요시:
- **간단한 전역 상태**: Zustand 추가 (CLAUDE.md 선호)
- **복잡한 상태**: Redux, Jotai 등

## 설정 파일

**tailwind.config.ts** - Tailwind 설정
- CSS 변수 기반 색상 (--primary, --secondary, --accent 등)
- 기본 반경 설정

**tsconfig.json** - TypeScript 설정
- 경로 별칭: `@/*` → `./src/*`
- strict 모드 활성화
- skipLibCheck: true (성능 향상)

**.eslintrc.json** - ESLint 설정 (Next.js 권장사항)
- 규칙: 세미콜론 없음, 단일 따옴표, 2칸 들여쓰기

**next.config.js** - Next.js 설정
- reactStrictMode: true
- Unsplash 이미지 도메인 허용

## 개발 규칙

### 코드 스타일
- **들여쓰기**: 스페이스 2칸
- **따옴표**: 단일 따옴표 (`'hello'`)
- **세미콜론**: 사용하지 않음
- **변수명**: camelCase
- **JSDoc**: 함수에 간단한 주석만 (복잡한 WHY가 있을 때만)

### 파일 구조
- 페이지 컴포넌트는 `src/app/` 의 경로명과 일치
- 재사용 컴포넌트는 `src/components/` 에서 역할별로 분류
- 비즈니스 로직은 `src/lib/` 에 집중

### Git 규칙
- 커밋 메시지: 한글로 작성
- 브랜치명: `feature/기능명`, `fix/버그명`
- 커밋: 작은 단위로 분할

## 확장 가이드

### API 연동
mockData.ts → 실제 백엔드 API로 전환하려면 SETUP_GUIDE.md 참고

### 데이터베이스
- PostgreSQL + Prisma (권장)
- MongoDB + Mongoose

### 인증 개선
- JWT 토큰 기반
- OAuth (Google, GitHub)
- Next-Auth.js

### 새 기능 추가
1. `src/types/index.ts`에 타입 정의
2. `src/lib/mockData.ts`에 더미 데이터 추가 (또는 API 호출)
3. `src/components/`에 컴포넌트 작성
4. `src/app/`에 페이지 추가

## 참고 문서

- **README.md** - 전체 프로젝트 설명
- **SETUP_GUIDE.md** - 커스터마이징 & 배포 가이드
- [Next.js 공식 문서](https://nextjs.org/docs)
- [shadcn/ui 가이드](https://ui.shadcn.com)
