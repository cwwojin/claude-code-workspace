# E-commerce Platform (ShopMall)

온라인 쇼핑몰 서비스 개발 프로젝트

## 📋 프로젝트 개요

- **프로젝트명**: 이커머스 플랫폼 (ShopMall)
- **프로젝트 ID**: CWWOJIN-20
- **기술 스택**: Next.js 14, TypeScript, Tailwind CSS, PostgreSQL, Prisma
- **개발 기간**: 12주 (6 스프린트)

## 🚀 시작하기

### 필수 요구사항

- Node.js 20+
- npm 또는 yarn
- PostgreSQL 데이터베이스

### 설치

```bash
# 패키지 설치
npm install

# 환경 변수 설정
cp .env.example .env
# .env 파일을 열어 환경 변수 값을 설정하세요

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📁 프로젝트 구조

```
.
├── app/                    # Next.js App Router
│   ├── (auth)/            # 인증 페이지
│   ├── (shop)/            # 쇼핑몰 페이지
│   ├── (seller)/          # 판매자 대시보드
│   ├── (admin)/           # 관리자 패널
│   └── api/               # API 라우트
├── components/            # React 컴포넌트
│   ├── ui/               # UI 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   └── ...
├── lib/                   # 유틸리티 및 헬퍼
│   ├── db/               # 데이터베이스 관련
│   ├── auth/             # 인증 관련
│   └── utils/            # 공통 유틸리티
├── store/                 # 상태 관리 (Zustand)
├── hooks/                 # 커스텀 React Hooks
├── types/                 # TypeScript 타입 정의
└── styles/                # 스타일 파일
```

## 🛠️ 사용 기술

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Data Fetching**: React Query (TanStack Query)
- **Form Handling**: React Hook Form + Zod

### Backend
- **Runtime**: Node.js 20+
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Authentication**: JWT + HTTP-only Cookies
- **Payment**: Stripe
- **File Storage**: AWS S3 + CloudFront

### DevOps
- **Deployment**: Vercel
- **Monitoring**: Sentry
- **Testing**: Vitest, React Testing Library, Playwright

## 📝 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린트 체크
npm run lint

# 코드 포맷팅
npm run format
```

## 📚 문서

- [Tech Spec](./techspec.md): 기술 명세서
- [PRD](https://app.riido.io/lxRE8yf9t4tVNZ4-YTQiU/teams/CWWOJIN/projects/0QXJvAuLhi6b2FsmnhFdI): 제품 요구사항 문서

## 🧪 테스트

```bash
# Unit 테스트 실행
npm run test

# E2E 테스트 실행
npm run test:e2e

# 테스트 커버리지
npm run test:coverage
```

## 📦 배포

이 프로젝트는 Vercel에 배포됩니다.

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

## 🤝 기여

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

This project is licensed under the MIT License.

## 👥 팀

- Tech Team

## 📞 문의

- 고객센터: 1588-1234
- 이메일: support@shopmall.com
