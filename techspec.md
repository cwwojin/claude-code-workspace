# 온라인 쇼핑몰 서비스 개발 - Technical Specification

## 📋 Overview

**프로젝트명**: 이커머스 플랫폼 (E-commerce Application)
**프로젝트 ID**: CWWOJIN-20
**작성일**: 2026-02-05
**PRD 링크**: [Riido - CWWOJIN-20](https://app.riido.io/lxRE8yf9t4tVNZ4-YTQiU/teams/CWWOJIN/projects/0QXJvAuLhi6b2FsmnhFdI)

### 비즈니스 목표
- 직관적이고 안전한 온라인 쇼핑 경험 제공
- 구매자와 판매자를 연결하는 신뢰할 수 있는 거래 플랫폼 구축
- MVP 3개월 내 런칭

### 타겟 사용자
- **구매자**: 20-40대, 온라인 쇼핑에 익숙한 모바일/PC 사용자
- **판매자**: 소상공인 및 중소기업, 온라인 판매 채널 확대를 원하는 사업자
- **관리자**: 플랫폼 운영 및 관리 담당자

---

## 🎯 Requirements Analysis

### Functional Requirements

#### 구매자 기능
1. **회원 관리**
   - 회원가입 (이메일/소셜 로그인)
   - 로그인/로그아웃
   - 프로필 관리 (정보 수정, 비밀번호 변경)
   - 배송지 관리 (다중 배송지 등록)

2. **상품 검색 및 탐색**
   - 카테고리별 상품 탐색
   - 키워드 기반 검색
   - 필터링 (가격, 평점, 브랜드, 재고 여부)
   - 정렬 (인기순, 최신순, 가격순, 평점순)

3. **상품 상세**
   - 상품 이미지 갤러리
   - 상품 설명 및 스펙
   - 재고 현황
   - 배송 정보 (배송비, 예상 배송일)
   - 구매 후기 및 평점

4. **장바구니**
   - 상품 추가/삭제
   - 수량 조절
   - 선택 삭제
   - 비회원 장바구니 (로컬 스토리지)
   - 회원 장바구니 (서버 동기화)

5. **주문 및 결제**
   - 주문서 작성 (배송지, 주문자 정보)
   - 다양한 결제 수단 (카드, Stripe)
   - 주문 확인 및 결제 완료
   - 주문 실패 처리 및 재시도

6. **주문 관리**
   - 주문 내역 조회
   - 주문 상세 정보
   - 배송 추적
   - 주문 취소 (결제 완료 전/후)
   - 반품/교환 신청

7. **리뷰 시스템**
   - 구매 후기 작성 (텍스트, 평점)
   - 사진 첨부
   - 리뷰 수정/삭제
   - 리뷰 좋아요/신고

#### 판매자 기능
1. **상품 관리**
   - 상품 등록 (제목, 설명, 가격, 카테고리, 이미지)
   - 상품 수정/삭제
   - 재고 관리 (수량 조절, 품절 처리)
   - 상품 옵션 설정 (색상, 사이즈 등)

2. **주문 관리**
   - 신규 주문 확인
   - 주문 상태 변경 (확인, 배송 중, 배송 완료)
   - 송장 번호 입력
   - 취소/반품 처리

3. **판매 분석**
   - 매출 현황 (일별, 주별, 월별)
   - 인기 상품 TOP 10
   - 판매 통계 (주문 건수, 평균 주문 금액)
   - 재고 현황

4. **정산 관리**
   - 판매 대금 정산 내역
   - 정산 예정 금액
   - 정산 완료 내역

#### 관리자 기능
1. **사용자 관리**
   - 회원 목록 조회
   - 회원 상태 관리 (정지, 탈퇴)
   - 판매자 승인/관리

2. **상품 관리**
   - 전체 상품 목록
   - 상품 승인/거부
   - 부적절한 상품 삭제

3. **주문 관리**
   - 전체 주문 목록
   - 주문 통계
   - 분쟁 조정

4. **사이트 운영**
   - 카테고리 관리
   - 배너 관리
   - 프로모션/할인 설정
   - 공지사항 관리

### Non-Functional Requirements

#### 성능
- 페이지 로딩 시간: 3초 이내 (Largest Contentful Paint)
- API 응답 시간: 평균 200ms 이하
- 동시 접속자: 최소 1,000명 지원
- 이미지 최적화: WebP 포맷, lazy loading 적용

#### 보안
- HTTPS 통신 필수
- JWT 토큰 만료 시간: Access Token 15분, Refresh Token 7일
- XSS, CSRF 공격 방어
- SQL Injection 방지 (Parameterized Query)
- 비밀번호 암호화 (bcrypt, salt rounds: 10)
- Rate Limiting: API 호출 제한 (IP당 분당 100회)
- 결제 정보 암호화 (Stripe 사용으로 PCI DSS 준수)

#### 확장성
- 수평 확장 가능한 아키텍처
- 데이터베이스 Connection Pooling
- CDN을 통한 정적 파일 제공
- 캐싱 전략 (Redis 활용)

#### 가용성
- 서비스 가용률: 99.9% 목표
- 자동 에러 모니터링 (Sentry)
- 로깅 및 모니터링 (Vercel Analytics)

#### 호환성
- 모던 브라우저 지원 (Chrome, Safari, Firefox, Edge - 최신 2개 버전)
- 반응형 웹 디자인 (Mobile-first)
- 접근성: WCAG 2.1 AA 수준 준수

### Success Criteria
- 구매 전환율: 3% 이상
- 평균 주문 완료 시간: 5분 이내
- 사용자 만족도: 4.0/5.0 이상
- 페이지 이탈률: 40% 이하

---

## 🎨 UI/UX Design Specifications

> **Figma 디자인**: [메인 페이지 디자인](https://www.figma.com/design/oGglOf3QkkqKvD4J1obgce/%EB%A9%94%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=0-1&t=hAmKrHsYBhJiCHxl-1)

### Design System

#### Colors
- **Primary**: Blue/Purple palette (브랜드 컬러)
- **Secondary**: Gray scale
- **Accent**: Orange/Red (할인, 특가)
- **Success**: Green
- **Warning**: Yellow/Orange
- **Error**: Red

#### Typography
- **Font Family**: System font stack (San Francisco, Segoe UI, etc.)
- **Heading 1**: 32px, Bold (로고)
- **Heading 2**: 36px, Bold (섹션 제목)
- **Heading 3**: 24-28px, Bold (카드 제목, 푸터 제목)
- **Heading 4**: 20-24px, Semi-bold
- **Paragraph**: 16-20px, Regular
- **Small**: 14-16px, Regular

#### Spacing
- **Container Max Width**: 992px (콘텐츠 영역)
- **Container Padding**: 51.5px (좌우 여백)
- **Section Gap**: 48px-68px
- **Component Gap**: 16px-32px
- **Grid Gap**: 24px (상품 그리드)

#### Layout Breakpoints
- **Desktop**: 1095px+
- **Tablet**: 768px - 1094px
- **Mobile**: < 768px

### Page Structure

#### 1. Header (170px height)
**세 단계 구조:**

**Top Bar (20px height)**
- 왼쪽: 고객센터 정보 (📞 1588-1234), 배송조회
- 오른쪽: 로그인, 회원가입 링크
- 배경: Light gray
- 텍스트: Small, 14px

**Main Header (52px height)**
- 왼쪽: 로고 "ShopMall" (Heading 1, 32px)
- 중앙: 검색바 (672px width, 52px height)
  - Placeholder: "상품을 검색해보세요"
  - 우측: 검색 아이콘 버튼
- 오른쪽: 위시리스트 아이콘, 장바구니 아이콘 (뱃지: 상품 개수)

**Navigation Bar (49px height)**
- 카테고리 메뉴 (Horizontal scroll on mobile)
  - "카테고리 전체" (강조)
  - "패션의류", "전자제품", "가구/인테리어", "뷰티", "스포츠", "식품"
  - "🔥 특가" (이모지 + 강조 색상)
- 배경: White, Border bottom

#### 2. Hero Banner (500px height)
- **레이아웃**: Full width, 이미지 + 텍스트 오버레이
- **콘텐츠**:
  - Heading: "패션 세일" (48px)
  - Subheading: "트렌디한 스타일" (36px)
  - Description: "2026 S/S 신상품 출시" (28px)
  - CTA Button: "지금 쇼핑하기" (40px height)
- **네비게이션**:
  - 좌/우 화살표 버튼 (36px x 36px)
  - 하단 페이지네이션 인디케이터 (3개 dots)
- **이미지**: 480px x 400px (우측 배치)
- **자동 슬라이드**: 5초 간격 (optional)

#### 3. Promo Banner (163px height)
- **3개 섹션** (Equal width, Flex layout)
  1. **무료배송** 🚚
     - 아이콘: 36px
     - 제목: "무료배송" (Heading 3, 27px)
     - 설명: "3만원 이상 구매시" (20px)
  2. **안전결제** 💳
     - 아이콘: 36px
     - 제목: "안전결제" (Heading 3, 27px)
     - 설명: "다양한 결제 수단 지원" (20px)
  3. **간편반품** 🔄
     - 아이콘: 36px
     - 제목: "간편반품" (Heading 3, 27px)
     - 설명: "7일 이내 무료 반품" (20px)
- **스타일**: Light background, Center aligned

#### 4. Category Section (232px height)
- **제목**: "카테고리" (Heading 2, 36px)
- **레이아웃**: Grid - 8개 버튼 (4 columns on desktop, 2 on mobile)
- **CategoryButton**: 110px x 164px
  - 아이콘 영역: 64px x 64px (circular background)
  - 아이콘: 32px x 32px
  - 텍스트: 20px, Center aligned
  - Hover: Scale + Shadow effect
- **카테고리**:
  1. 전자제품
  2. 패션
  3. 가구/인테리어
  4. 뷰티
  5. 스포츠
  6. 식품
  7. 도서
  8. 기타

#### 5. Product Section (976px height)
- **헤더**:
  - 좌측: "인기 상품" (Heading 2, 36px)
  - 우측: "전체보기 →" 링크 (24px)
- **레이아웃**: Grid - 8개 카드 (4 columns x 2 rows)
  - Gap: 24px
  - Mobile: 2 columns, Scrollable

**ProductCard**: 230px x 442px
- **이미지 영역** (228px x 228px):
  - 상품 이미지 (Placeholder: Gray background)
  - 배지 (좌측 상단):
    - "HOT" (빨강)
    - "NEW" (파랑)
    - "SALE" (주황)
  - 할인율 태그 (우측 상단):
    - "30% OFF" ~ "41% OFF"
    - 배경: 반투명 어두운 배경
- **정보 영역** (228px x 212px):
  - 상품명 (Heading 3, 2줄 말줄임)
  - 평점 + 리뷰 수:
    - 별 아이콘 + "4.5" + "(1,234)"
  - 가격 정보:
    - 원가: 취소선, Gray, 20px
    - 할인가: Bold, 28px, Primary color
  - 장바구니 버튼 (196px x 36px):
    - 아이콘 + "장바구니" 텍스트
    - 배경: Primary color
    - Hover: Darker shade

**상품 예시**:
1. 무선 블루투스 헤드폰 - 89,000원 (150,000원)
2. 최신 스마트워치 - 129,000원 (199,000원)
3. 트렌디 캐주얼 자켓 - 79,000원 (120,000원)
4. 모던 소파 3인용 - 399,000원 (599,000원)
5. 프리미엄 스킨케어 세트 - 59,000원 (89,000원)
6. 홈 트레이닝 덤벨 세트 - 149,000원 (220,000원)
7. 유기농 건강 간식 패키지 - 29,000원 (42,000원)
8. 스마트 LED 조명 세트 - 69,000원 (99,000원)

#### 6. Footer (357px height)
**구조: 4개 섹션**

**상단 영역** (144px height):
1. **브랜드 정보** (224px width):
   - 로고: "ShopMall" (Heading 3, 28px)
   - 설명: "믿을 수 있는 온라인 쇼핑 플랫폼" (20px)
   - 소셜 미디어 아이콘 (20px x 20px):
     - Facebook, Twitter, Instagram, YouTube

2. **고객센터** (224px width):
   - 제목: "고객센터" (Heading 4, 24px)
   - 링크 목록:
     - 공지사항
     - 자주 묻는 질문
     - 1:1 문의
     - 상품 문의

3. **회사소개** (224px width):
   - 제목: "회사소개" (Heading 4, 24px)
   - 링크 목록:
     - 회사 정보
     - 입점 문의
     - 광고 문의
     - 채용 정보

4. **이용약관** (224px width):
   - 제목: "이용약관" (Heading 4, 24px)
   - 링크 목록:
     - 이용약관
     - 개인정보처리방침
     - 청소년 보호정책
     - 구매안전서비스

**하단 영역** (117px height):
- **좌측**: 사업자 정보
  - 상호: (주)샵몰 | 대표: 홍길동 | 사업자등록번호: 123-45-67890
  - 통신판매업신고: 2026-서울강남-01234 | 주소: 서울특별시 강남구 테헤란로 123
  - 고객센터: 1588-1234 (평일 09:00-18:00)
- **우측**: 저작권
  - "© 2026 ShopMall. All rights reserved."

### Interaction & Animation

#### Hover States
- **Buttons**: Background darken, scale(1.02)
- **Links**: Color change, underline
- **Product Cards**: Shadow elevation, scale(1.03)
- **Category Buttons**: Background lighten, scale(1.05)

#### Loading States
- **Skeleton screens** for content loading
- **Spinner** for button actions
- **Progress bar** for file uploads

#### Transitions
- **Duration**: 200ms - 300ms
- **Easing**: ease-in-out
- **Properties**: opacity, transform, background-color

---

## 🏗️ Architecture & Design

### System Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Client Layer                      │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────┐│
│  │   Browser    │  │    Mobile    │  │   Tablet   ││
│  │   (Desktop)  │  │              │  │            ││
│  └──────────────┘  └──────────────┘  └────────────┘│
└─────────────────────────────────────────────────────┘
                         ↓ HTTPS
┌─────────────────────────────────────────────────────┐
│                  CDN (CloudFront)                    │
│               Static Assets, Images                  │
└─────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────┐
│              Next.js Application (Vercel)            │
│  ┌──────────────────────────────────────────────┐  │
│  │         Server Components (RSC)              │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────┐ │  │
│  │  │   Pages    │  │  API Routes │  │ Server │ │  │
│  │  │ Components │  │   /api/*   │  │ Actions│ │  │
│  │  └────────────┘  └────────────┘  └────────┘ │  │
│  └──────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────┐  │
│  │         Client Components                     │  │
│  │  ┌────────┐  ┌────────┐  ┌────────────────┐ │  │
│  │  │ React  │  │ Zustand│  │  React Query   │ │  │
│  │  │  UI    │  │ State  │  │ (Data Fetching)│ │  │
│  │  └────────┘  └────────┘  └────────────────┘ │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────┐
│                  Database Layer                      │
│  ┌──────────────────────────────────────────────┐  │
│  │         PostgreSQL (Vercel Postgres)         │  │
│  │         or Supabase PostgreSQL               │  │
│  │  - Users, Products, Orders, Reviews          │  │
│  │  - Transactions, Categories, etc.            │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────┐
│              External Services                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────┐ │
│  │    Stripe    │  │  AWS S3 +    │  │  Email   │ │
│  │   Payment    │  │  CloudFront  │  │ Service  │ │
│  └──────────────┘  └──────────────┘  └──────────┘ │
└─────────────────────────────────────────────────────┘
```

### Component Breakdown

#### Frontend Components

```
src/
├── app/                        # App Router (Next.js 14+)
│   ├── (auth)/                # Auth group
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (shop)/                # Shop group (Main customer facing)
│   │   ├── page.tsx           # Home page
│   │   ├── products/
│   │   │   ├── page.tsx       # Product list
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx   # Product detail
│   │   │   └── category/
│   │   │       └── [slug]/
│   │   │           └── page.tsx
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   ├── checkout/
│   │   │   └── page.tsx
│   │   ├── orders/
│   │   │   ├── page.tsx       # Order list
│   │   │   └── [id]/
│   │   │       └── page.tsx   # Order detail
│   │   ├── wishlist/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (seller)/              # Seller dashboard
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       └── edit/
│   │   │           └── page.tsx
│   │   ├── orders/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── analytics/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (admin)/               # Admin panel
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── users/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── orders/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── layout.tsx
│   ├── api/                   # API Routes
│   │   ├── auth/
│   │   │   ├── register/
│   │   │   │   └── route.ts
│   │   │   ├── login/
│   │   │   │   └── route.ts
│   │   │   ├── logout/
│   │   │   │   └── route.ts
│   │   │   ├── refresh/
│   │   │   │   └── route.ts
│   │   │   └── me/
│   │   │       └── route.ts
│   │   ├── products/
│   │   │   ├── route.ts
│   │   │   ├── [id]/
│   │   │   │   └── route.ts
│   │   │   ├── search/
│   │   │   │   └── route.ts
│   │   │   └── [id]/
│   │   │       └── reviews/
│   │   │           └── route.ts
│   │   ├── cart/
│   │   │   ├── route.ts
│   │   │   └── [itemId]/
│   │   │       └── route.ts
│   │   ├── orders/
│   │   │   ├── route.ts
│   │   │   └── [id]/
│   │   │       ├── route.ts
│   │   │       ├── cancel/
│   │   │       │   └── route.ts
│   │   │       └── return/
│   │   │           └── route.ts
│   │   ├── seller/
│   │   │   ├── products/
│   │   │   │   └── route.ts
│   │   │   ├── orders/
│   │   │   │   └── route.ts
│   │   │   └── analytics/
│   │   │       └── route.ts
│   │   ├── admin/
│   │   │   ├── users/
│   │   │   │   └── route.ts
│   │   │   ├── products/
│   │   │   │   └── route.ts
│   │   │   └── orders/
│   │   │       └── route.ts
│   │   └── webhooks/
│   │       └── stripe/
│   │           └── route.ts
│   └── layout.tsx
│
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── modal.tsx
│   │   ├── badge.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── toast.tsx
│   │   └── skeleton.tsx
│   │
│   ├── layout/                # Layout components (from Figma)
│   │   ├── Header/
│   │   │   ├── Header.tsx             # Main container
│   │   │   ├── TopBar.tsx             # 고객센터, 로그인, 회원가입
│   │   │   ├── MainHeader.tsx         # 로고, 검색, 아이콘
│   │   │   ├── SearchBar.tsx          # 검색 입력창
│   │   │   ├── CartIcon.tsx           # 장바구니 아이콘 + 뱃지
│   │   │   ├── WishlistIcon.tsx       # 위시리스트 아이콘
│   │   │   └── Navigation.tsx         # 카테고리 네비게이션
│   │   ├── Footer/
│   │   │   ├── Footer.tsx             # Main container
│   │   │   ├── FooterSection.tsx      # 각 섹션 (고객센터, 회사소개 등)
│   │   │   ├── FooterLinks.tsx        # 링크 목록
│   │   │   ├── SocialLinks.tsx        # 소셜 미디어 아이콘
│   │   │   └── CompanyInfo.tsx        # 사업자 정보
│   │   ├── Container.tsx              # Max-width container
│   │   └── PageLayout.tsx             # Page wrapper
│   │
│   ├── home/                  # Home page components (from Figma)
│   │   ├── HeroBanner/
│   │   │   ├── HeroBanner.tsx         # Main banner container
│   │   │   ├── BannerSlide.tsx        # Single slide
│   │   │   ├── BannerNavigation.tsx   # 좌우 화살표
│   │   │   └── BannerDots.tsx         # 페이지네이션 인디케이터
│   │   ├── PromoBanner/
│   │   │   ├── PromoBanner.tsx        # Container
│   │   │   └── PromoCard.tsx          # 단일 프로모 (무료배송 등)
│   │   ├── CategorySection/
│   │   │   ├── CategorySection.tsx    # Container
│   │   │   └── CategoryButton.tsx     # 카테고리 버튼 (아이콘 + 텍스트)
│   │   └── FeaturedProducts/
│   │       ├── FeaturedProducts.tsx   # Container
│   │       └── ProductGrid.tsx        # Grid layout
│   │
│   ├── products/              # Product components (from Figma)
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.tsx        # Main card (230x442px)
│   │   │   ├── ProductImage.tsx       # 이미지 + 배지
│   │   │   ├── ProductBadge.tsx       # HOT, NEW, SALE 배지
│   │   │   ├── DiscountTag.tsx        # 할인율 태그
│   │   │   ├── ProductInfo.tsx        # 제목, 평점, 가격
│   │   │   ├── ProductRating.tsx      # 별점 + 리뷰 수
│   │   │   ├── ProductPrice.tsx       # 원가 + 할인가
│   │   │   └── AddToCartButton.tsx    # 장바구니 버튼
│   │   ├── ProductGrid.tsx            # Grid container (4 columns)
│   │   ├── ProductList.tsx            # List view
│   │   ├── ProductFilter/
│   │   │   ├── ProductFilter.tsx      # Filter sidebar
│   │   │   ├── CategoryFilter.tsx     # 카테고리 필터
│   │   │   ├── PriceFilter.tsx        # 가격 범위 필터
│   │   │   └── RatingFilter.tsx       # 평점 필터
│   │   ├── ProductSort.tsx            # 정렬 드롭다운
│   │   └── ProductDetail/
│   │       ├── ProductDetail.tsx      # Detail page container
│   │       ├── ImageGallery.tsx       # 이미지 갤러리
│   │       ├── ProductSpecs.tsx       # 상품 스펙
│   │       ├── ReviewSection.tsx      # 리뷰 섹션
│   │       └── RelatedProducts.tsx    # 연관 상품
│   │
│   ├── cart/                  # Cart components
│   │   ├── CartDrawer.tsx             # Side drawer
│   │   ├── CartItem.tsx               # 장바구니 아이템
│   │   ├── CartSummary.tsx            # 주문 요약
│   │   ├── CartEmpty.tsx              # 빈 장바구니 상태
│   │   └── CartQuantityInput.tsx      # 수량 조절
│   │
│   ├── checkout/              # Checkout components
│   │   ├── CheckoutFlow.tsx           # Multi-step checkout
│   │   ├── CheckoutForm.tsx           # Form container
│   │   ├── ShippingForm.tsx           # 배송지 입력
│   │   ├── AddressSelect.tsx          # 배송지 선택
│   │   ├── PaymentForm.tsx            # 결제 정보
│   │   ├── StripePayment.tsx          # Stripe Elements
│   │   ├── OrderReview.tsx            # 주문 확인
│   │   └── CheckoutSummary.tsx        # 주문 요약
│   │
│   ├── orders/                # Order components
│   │   ├── OrderList.tsx              # 주문 목록
│   │   ├── OrderItem.tsx              # 주문 아이템
│   │   ├── OrderDetail.tsx            # 주문 상세
│   │   ├── OrderStatus.tsx            # 주문 상태 표시
│   │   ├── TrackingInfo.tsx           # 배송 추적
│   │   └── OrderActions.tsx           # 취소/반품 버튼
│   │
│   ├── reviews/               # Review components
│   │   ├── ReviewList.tsx             # 리뷰 목록
│   │   ├── ReviewItem.tsx             # 단일 리뷰
│   │   ├── ReviewForm.tsx             # 리뷰 작성 폼
│   │   ├── RatingInput.tsx            # 별점 입력
│   │   └── ReviewImages.tsx           # 리뷰 이미지
│   │
│   ├── seller/                # Seller dashboard components
│   │   ├── SellerDashboard.tsx        # 대시보드 메인
│   │   ├── SalesChart.tsx             # 매출 차트
│   │   ├── SellerProductList.tsx      # 상품 관리 목록
│   │   ├── SellerOrderList.tsx        # 주문 관리 목록
│   │   └── AnalyticsCard.tsx          # 통계 카드
│   │
│   ├── admin/                 # Admin panel components
│   │   ├── AdminDashboard.tsx         # 관리자 대시보드
│   │   ├── UserManagement.tsx         # 회원 관리
│   │   ├── ProductApproval.tsx        # 상품 승인
│   │   └── AdminOrderList.tsx         # 주문 관리
│   │
│   └── common/                # Common components
│       ├── LoadingSpinner.tsx         # 로딩 스피너
│       ├── EmptyState.tsx             # 빈 상태 UI
│       ├── ErrorBoundary.tsx          # 에러 바운더리
│       ├── ImageWithFallback.tsx      # 이미지 + Fallback
│       ├── Pagination.tsx             # 페이지네이션
│       └── Breadcrumb.tsx             # 빵 부스러기 네비게이션
│
├── lib/
│   ├── db/                    # Database utilities
│   │   ├── prisma.ts                  # Prisma client
│   │   └── queries/
│   │       ├── products.ts
│   │       ├── orders.ts
│   │       ├── users.ts
│   │       └── reviews.ts
│   ├── auth/                  # Auth utilities
│   │   ├── jwt.ts                     # JWT utils
│   │   ├── session.ts                 # Session management
│   │   ├── middleware.ts              # Auth middleware
│   │   └── permissions.ts             # Role-based permissions
│   ├── stripe/                # Payment integration
│   │   ├── client.ts                  # Stripe client
│   │   ├── payment-intent.ts          # Payment Intent utils
│   │   └── webhooks.ts                # Webhook handlers
│   ├── aws/                   # AWS S3 integration
│   │   ├── s3-client.ts               # S3 client
│   │   ├── upload.ts                  # File upload utils
│   │   └── image-optimizer.ts         # Image optimization
│   └── utils/
│       ├── validation.ts              # Zod schemas
│       ├── formatting.ts              # Number, date formatting
│       ├── constants.ts               # App constants
│       ├── api.ts                     # API utilities
│       └── error-handler.ts           # Error handling
│
├── store/                     # Zustand stores
│   ├── authStore.ts                   # Auth state
│   ├── cartStore.ts                   # Cart state
│   ├── wishlistStore.ts               # Wishlist state
│   └── uiStore.ts                     # UI state (modals, drawers)
│
├── hooks/                     # Custom React hooks
│   ├── useAuth.ts                     # Auth hooks
│   ├── useCart.ts                     # Cart hooks
│   ├── useWishlist.ts                 # Wishlist hooks
│   ├── useProducts.ts                 # Product data hooks
│   ├── useOrders.ts                   # Order data hooks
│   ├── useReviews.ts                  # Review data hooks
│   ├── useDebounce.ts                 # Debounce hook
│   ├── useIntersectionObserver.ts     # Infinite scroll
│   └── useMediaQuery.ts               # Responsive hooks
│
├── types/                     # TypeScript types
│   ├── user.ts
│   ├── product.ts
│   ├── order.ts
│   ├── review.ts
│   ├── cart.ts
│   ├── category.ts
│   └── api.ts
│
└── styles/
    ├── globals.css                    # Global styles
    └── tailwind.css                   # Tailwind imports
```

### Data Models and Schemas

#### Database Schema (PostgreSQL with Prisma)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum UserRole {
  BUYER
  SELLER
  ADMIN
}

enum UserStatus {
  ACTIVE
  SUSPENDED
  DELETED
}

enum OrderStatus {
  PENDING
  PAID
  CONFIRMED
  SHIPPING
  DELIVERED
  CANCELLED
  REFUNDED
}

enum ProductStatus {
  PENDING_APPROVAL
  APPROVED
  REJECTED
  OUT_OF_STOCK
  DISCONTINUED
}

model User {
  id            String      @id @default(cuid())
  email         String      @unique
  passwordHash  String?
  name          String
  phone         String?
  role          UserRole    @default(BUYER)
  status        UserStatus  @default(ACTIVE)
  avatar        String?

  // OAuth fields
  oauthProvider String?
  oauthId       String?

  // Relations
  addresses     Address[]
  orders        Order[]
  reviews       Review[]
  cartItems     CartItem[]
  products      Product[]   // If seller

  createdAt     DateTime    @default(now())
  updatedAt     DateTime    @updatedAt

  @@index([email])
  @@index([role])
}

model Address {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  name        String   // 수령인 이름
  phone       String
  zipCode     String
  address1    String   // 기본 주소
  address2    String?  // 상세 주소
  isDefault   Boolean  @default(false)

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([userId])
}

model Category {
  id          String    @id @default(cuid())
  name        String
  slug        String    @unique
  description String?
  parentId    String?
  parent      Category? @relation("CategoryHierarchy", fields: [parentId], references: [id])
  children    Category[] @relation("CategoryHierarchy")

  products    Product[]

  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Product {
  id            String        @id @default(cuid())
  sellerId      String
  seller        User          @relation(fields: [sellerId], references: [id])

  name          String
  slug          String        @unique
  description   String        @db.Text
  price         Decimal       @db.Decimal(10, 2)
  comparePrice  Decimal?      @db.Decimal(10, 2) // 할인 전 가격
  stock         Int           @default(0)
  sku           String?       @unique

  categoryId    String
  category      Category      @relation(fields: [categoryId], references: [id])

  status        ProductStatus @default(PENDING_APPROVAL)

  images        ProductImage[]
  variants      ProductVariant[]
  reviews       Review[]
  cartItems     CartItem[]
  orderItems    OrderItem[]

  // SEO
  metaTitle     String?
  metaDescription String?

  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt

  @@index([sellerId])
  @@index([categoryId])
  @@index([status])
  @@index([slug])
}

model ProductImage {
  id          String   @id @default(cuid())
  productId   String
  product     Product  @relation(fields: [productId], references: [id], onDelete: Cascade)

  url         String
  altText     String?
  order       Int      @default(0)

  createdAt   DateTime @default(now())

  @@index([productId])
}

model ProductVariant {
  id          String   @id @default(cuid())
  productId   String
  product     Product  @relation(fields: [productId], references: [id], onDelete: Cascade)

  name        String   // e.g., "Color", "Size"
  value       String   // e.g., "Red", "Large"
  priceAdjust Decimal  @default(0) @db.Decimal(10, 2)
  stock       Int      @default(0)
  sku         String?

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([productId])
}

model CartItem {
  id          String   @id @default(cuid())
  userId      String?  // Null for guest carts
  user        User?    @relation(fields: [userId], references: [id], onDelete: Cascade)

  productId   String
  product     Product  @relation(fields: [productId], references: [id], onDelete: Cascade)

  quantity    Int      @default(1)
  variantId   String?

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([userId])
  @@index([productId])
}

model Order {
  id              String      @id @default(cuid())
  orderNumber     String      @unique
  userId          String
  user            User        @relation(fields: [userId], references: [id])

  status          OrderStatus @default(PENDING)

  // Shipping Address
  shippingName    String
  shippingPhone   String
  shippingZipCode String
  shippingAddress String

  // Pricing
  subtotal        Decimal     @db.Decimal(10, 2)
  shippingFee     Decimal     @default(0) @db.Decimal(10, 2)
  discount        Decimal     @default(0) @db.Decimal(10, 2)
  total           Decimal     @db.Decimal(10, 2)

  // Payment
  paymentMethod   String
  paymentId       String?     // Stripe Payment Intent ID
  paidAt          DateTime?

  // Tracking
  trackingNumber  String?
  shippedAt       DateTime?
  deliveredAt     DateTime?
  cancelledAt     DateTime?

  items           OrderItem[]

  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt

  @@index([userId])
  @@index([orderNumber])
  @@index([status])
}

model OrderItem {
  id          String   @id @default(cuid())
  orderId     String
  order       Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)

  productId   String
  product     Product  @relation(fields: [productId], references: [id])

  quantity    Int
  price       Decimal  @db.Decimal(10, 2) // Price at time of purchase
  variantInfo String?  // Variant details as JSON

  createdAt   DateTime @default(now())

  @@index([orderId])
  @@index([productId])
}

model Review {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  productId   String
  product     Product  @relation(fields: [productId], references: [id], onDelete: Cascade)

  rating      Int      // 1-5
  title       String?
  content     String   @db.Text
  images      String[] // Array of image URLs

  helpful     Int      @default(0)
  verified    Boolean  @default(false) // Verified purchase

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([userId])
  @@index([productId])
  @@index([rating])
}
```

### API Contracts

#### REST API Endpoints

**Authentication**
```
POST   /api/auth/register          # 회원가입
POST   /api/auth/login             # 로그인
POST   /api/auth/logout            # 로그아웃
POST   /api/auth/refresh           # Token refresh
GET    /api/auth/me                # 현재 사용자 정보
PUT    /api/auth/me                # 프로필 수정
POST   /api/auth/change-password   # 비밀번호 변경
```

**Products**
```
GET    /api/products               # 상품 목록 (pagination, filters)
GET    /api/products/:id           # 상품 상세
POST   /api/products               # 상품 등록 (seller only)
PUT    /api/products/:id           # 상품 수정 (seller only)
DELETE /api/products/:id           # 상품 삭제 (seller only)
GET    /api/products/search        # 상품 검색
```

**Cart**
```
GET    /api/cart                   # 장바구니 조회
POST   /api/cart                   # 장바구니에 상품 추가
PUT    /api/cart/:itemId           # 수량 변경
DELETE /api/cart/:itemId           # 장바구니에서 삭제
DELETE /api/cart                   # 장바구니 비우기
```

**Orders**
```
GET    /api/orders                 # 주문 목록
GET    /api/orders/:id             # 주문 상세
POST   /api/orders                 # 주문 생성
PUT    /api/orders/:id/cancel      # 주문 취소
PUT    /api/orders/:id/return      # 반품 신청
```

**Reviews**
```
GET    /api/products/:id/reviews   # 상품 리뷰 목록
POST   /api/products/:id/reviews   # 리뷰 작성
PUT    /api/reviews/:id            # 리뷰 수정
DELETE /api/reviews/:id            # 리뷰 삭제
```

**Seller**
```
GET    /api/seller/products        # 판매 상품 목록
GET    /api/seller/orders          # 판매 주문 목록
PUT    /api/seller/orders/:id      # 주문 상태 변경
GET    /api/seller/analytics       # 판매 통계
```

**Admin**
```
GET    /api/admin/users            # 회원 목록
PUT    /api/admin/users/:id        # 회원 상태 변경
GET    /api/admin/products         # 전체 상품 목록
PUT    /api/admin/products/:id     # 상품 승인/거부
GET    /api/admin/orders           # 전체 주문 목록
```

**Payment Webhooks**
```
POST   /api/webhooks/stripe        # Stripe webhook
```

#### API Response Format

**Success Response**
```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Success message (optional)"
}
```

**Error Response**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message",
    "details": {} // Optional
  }
}
```

**Pagination Response**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5,
    "hasNext": true,
    "hasPrev": false
  }
}
```

### Integration Points

#### Stripe Payment Integration
- Payment Intent API for secure payments
- Webhook handling for payment status updates
- Customer portal for subscription management (future)
- Refund API for order cancellations

#### AWS S3 + CloudFront
- Product image uploads
- User avatar uploads
- Pre-signed URLs for secure uploads
- Image optimization (resize, format conversion)

#### Email Service (예: SendGrid, Resend)
- 회원가입 인증 이메일
- 주문 확인 이메일
- 배송 알림 이메일
- 비밀번호 재설정 이메일

---

## 🎨 Technical Decisions

### Technology Stack

#### Frontend
- **Framework**: Next.js 14+ (App Router)
  - RSC (React Server Components) 활용
  - Streaming SSR for better UX
  - Built-in optimizations (Image, Font, Scripts)

- **UI Library**: React 18+
  - Concurrent features
  - Suspense for data fetching

- **Styling**: Tailwind CSS 3.x
  - Utility-first approach
  - Responsive design
  - Dark mode support (optional)

- **Component Library**: shadcn/ui
  - Accessible components
  - Customizable with Tailwind

- **State Management**: Zustand
  - Lightweight and simple
  - Better than Context API for global state
  - TypeScript-first

- **Data Fetching**: React Query (TanStack Query)
  - Caching and invalidation
  - Optimistic updates
  - Automatic refetching

- **Form Handling**: React Hook Form + Zod
  - Type-safe validation
  - Better performance
  - Easy integration

#### Backend
- **Runtime**: Node.js 20+ (Vercel Edge Functions)

- **ORM**: Prisma
  - Type-safe database queries
  - Schema migrations
  - Visual database browser

- **Database**: PostgreSQL (Vercel Postgres or Supabase)
  - Relational data model
  - ACID transactions
  - Full-text search capabilities

#### Authentication
- **JWT + HTTP-only Cookies**
  - Access Token: 15분 유효
  - Refresh Token: 7일 유효, HTTP-only cookie에 저장
  - CSRF protection with SameSite=Strict

- **Password Hashing**: bcrypt (10 rounds)

#### Payment
- **Stripe**
  - PCI DSS compliant
  - Strong ecosystem
  - Webhook support
  - International payment support

#### File Storage
- **AWS S3 + CloudFront**
  - Scalable storage
  - CDN for fast delivery
  - Image optimization

#### Deployment
- **Vercel**
  - Optimized for Next.js
  - Automatic HTTPS
  - Preview deployments
  - Edge functions
  - Built-in analytics

#### Monitoring & Logging
- **Sentry**: Error tracking and monitoring
- **Vercel Analytics**: Web vitals and performance
- **Prisma Metrics**: Database query performance

### Design Patterns

#### Backend Patterns
1. **Repository Pattern**: Data access abstraction
2. **Service Layer**: Business logic separation
3. **Middleware Pattern**: Request/response processing
4. **Factory Pattern**: Object creation

#### Frontend Patterns
1. **Component Composition**: Reusable UI components
2. **Custom Hooks**: Shared logic extraction
3. **Provider Pattern**: Global state and context
4. **Presentational/Container**: Separation of concerns

### Trade-offs and Alternatives

#### Next.js App Router vs Pages Router
- **선택**: App Router
- **이유**:
  - RSC로 better performance
  - Streaming SSR
  - Built-in loading/error states
- **Trade-off**:
  - Learning curve
  - 일부 라이브러리 호환성 이슈

#### Prisma vs TypeORM
- **선택**: Prisma
- **이유**:
  - Better TypeScript support
  - Prisma Studio for database management
  - Better migration system
- **Trade-off**: Less flexible than TypeORM for complex queries

#### Zustand vs Redux
- **선택**: Zustand
- **이유**:
  - Simpler API
  - Less boilerplate
  - Good enough for most use cases
- **Trade-off**: Redux DevTools support is not as robust

#### Stripe vs 국내 PG사 (토스페이먼츠, 포트원)
- **선택**: Stripe
- **이유**:
  - 글로벌 확장 가능성
  - 뛰어난 개발자 경험
  - 강력한 API와 문서
- **Trade-off**:
  - 국내 간편결제 지원 제한적
  - 수수료가 다소 높을 수 있음

---

## 🚀 Implementation Approach

### Development Strategy

> **개발 방법론**: TDD (Test-Driven Development)
> **스프린트 기간**: 2주
> **총 개발 기간**: 12주 (6 스프린트)

---

## 📋 Detailed Implementation Tasks

### Phase 1: Foundation & Setup (Sprint 1: Week 1-2)

#### 1.1 프로젝트 초기 설정 및 환경 구성

**Subtasks:**

1. **프로젝트 생성 및 기본 설정**
   - [ ] Next.js 14+ 프로젝트 생성 (App Router)
   - [ ] TypeScript 설정 (strict mode)
   - [ ] ESLint, Prettier 설정
   - [ ] Git 리포지토리 초기화, .gitignore 설정
   - [ ] 환경 변수 템플릿 (.env.example) 작성
   - **Test**: 프로젝트가 정상적으로 빌드되고 실행되는지 확인

2. **Tailwind CSS 및 shadcn/ui 설정**
   - [ ] Tailwind CSS 설치 및 설정
   - [ ] shadcn/ui 초기화
   - [ ] 기본 UI 컴포넌트 설치 (Button, Input, Card, Badge 등)
   - [ ] 커스텀 테마 설정 (Figma 디자인 색상 적용)
   - [ ] globals.css에 기본 스타일 정의
   - **Test**: 샘플 페이지에서 UI 컴포넌트가 정상 렌더링되는지 확인

3. **Prisma 및 데이터베이스 설정**
   - [ ] Prisma 설치 및 초기화
   - [ ] PostgreSQL 데이터베이스 생성 (Vercel Postgres 또는 Supabase)
   - [ ] Prisma 스키마 작성 (User, Product, Category, Order 등)
   - [ ] 초기 마이그레이션 생성 및 실행
   - [ ] Prisma Client 생성
   - [ ] 데이터베이스 연결 테스트
   - **Test**: Prisma Studio에서 테이블이 정상적으로 생성되었는지 확인

4. **기본 프로젝트 구조 생성**
   - [ ] app/ 디렉토리 구조 생성 (auth, shop, seller, admin groups)
   - [ ] components/ 디렉토리 구조 생성
   - [ ] lib/ 유틸리티 디렉토리 생성
   - [ ] types/ TypeScript 타입 정의 디렉토리 생성
   - **Test**: 디렉토리 구조가 계획대로 생성되었는지 확인

#### 1.2 인증 시스템 구현 (TDD)

**Subtasks:**

5. **JWT 인증 유틸리티 구현**
   - [ ] **Test**: JWT 토큰 생성 테스트 작성
   - [ ] JWT 토큰 생성 함수 구현 (lib/auth/jwt.ts)
   - [ ] **Test**: JWT 토큰 검증 테스트 작성
   - [ ] JWT 토큰 검증 함수 구현
   - [ ] **Test**: Refresh 토큰 생성/검증 테스트 작성
   - [ ] Refresh 토큰 로직 구현
   - **Coverage**: 80%+ 목표

6. **비밀번호 해싱 구현**
   - [ ] **Test**: bcrypt 해싱 테스트 작성
   - [ ] 비밀번호 해싱 함수 구현
   - [ ] **Test**: 비밀번호 비교 테스트 작성
   - [ ] 비밀번호 비교 함수 구현
   - **Coverage**: 100% 목표

7. **회원가입 API 구현**
   - [ ] **Test**: POST /api/auth/register 테스트 작성
     - 정상 케이스: 회원가입 성공
     - 에러 케이스: 중복 이메일, 유효성 검증 실패
   - [ ] Zod 스키마로 입력 유효성 검증 구현
   - [ ] 회원가입 API 핸들러 구현 (app/api/auth/register/route.ts)
   - [ ] 이메일 중복 체크 로직
   - [ ] 사용자 DB 저장 로직
   - **Integration Test**: API 엔드포인트 통합 테스트

8. **로그인 API 구현**
   - [ ] **Test**: POST /api/auth/login 테스트 작성
     - 정상 케이스: 로그인 성공, 토큰 발급
     - 에러 케이스: 잘못된 이메일/비밀번호, 계정 정지
   - [ ] 로그인 API 핸들러 구현 (app/api/auth/login/route.ts)
   - [ ] 사용자 인증 로직
   - [ ] Access Token + Refresh Token 발급
   - [ ] HTTP-only Cookie 설정
   - **Integration Test**: 로그인 플로우 통합 테스트

9. **인증 미들웨어 구현**
   - [ ] **Test**: 인증 미들웨어 테스트 작성
     - 정상 케이스: 유효한 토큰 → 요청 허용
     - 에러 케이스: 토큰 없음, 만료된 토큰 → 401 응답
   - [ ] 미들웨어 구현 (lib/auth/middleware.ts)
   - [ ] Protected routes 설정
   - **Integration Test**: 보호된 라우트 접근 테스트

10. **회원가입/로그인 UI 구현**
    - [ ] 회원가입 폼 컴포넌트 (React Hook Form + Zod)
    - [ ] 로그인 폼 컴포넌트
    - [ ] 에러 메시지 표시 UI
    - [ ] 로딩 상태 UI
    - [ ] app/(auth)/login/page.tsx 구현
    - [ ] app/(auth)/register/page.tsx 구현
    - **E2E Test**: Playwright로 회원가입/로그인 플로우 테스트

#### 1.3 기본 Layout 컴포넌트 구현 (Figma 기반)

**Subtasks:**

11. **Container 및 PageLayout 컴포넌트**
    - [ ] Container 컴포넌트 (max-width: 992px, padding: 51.5px)
    - [ ] PageLayout 컴포넌트 (Header + Main + Footer)
    - **Test**: 반응형 레이아웃 테스트 (Desktop, Tablet, Mobile)

12. **Header 컴포넌트 - Top Bar**
    - [ ] TopBar 컴포넌트 (20px height)
    - [ ] 고객센터 정보 표시
    - [ ] 배송조회 링크
    - [ ] 로그인/회원가입 링크 (조건부 렌더링)
    - **Test**: 로그인 상태에 따른 UI 변경 테스트

13. **Header 컴포넌트 - Main Header**
    - [ ] MainHeader 컴포넌트 (52px height)
    - [ ] 로고 컴포넌트 ("ShopMall", 32px)
    - [ ] SearchBar 컴포넌트 (672px width)
      - 검색 입력창
      - 검색 버튼 (아이콘)
      - 디바운싱 적용
    - [ ] WishlistIcon 컴포넌트 (아이콘만)
    - [ ] CartIcon 컴포넌트 (뱃지 포함)
    - **Test**: 검색 디바운싱 테스트, 장바구니 뱃지 업데이트 테스트

14. **Header 컴포넌트 - Navigation**
    - [ ] Navigation 컴포넌트 (49px height)
    - [ ] 카테고리 링크 렌더링
    - [ ] 활성 링크 스타일링
    - [ ] 모바일 반응형 (Horizontal scroll)
    - **Test**: 네비게이션 링크 클릭 테스트

15. **Footer 컴포넌트**
    - [ ] Footer 컨테이너 (357px height)
    - [ ] FooterSection 컴포넌트 (4개 섹션)
      - 브랜드 정보 + 소셜 링크
      - 고객센터 링크
      - 회사소개 링크
      - 이용약관 링크
    - [ ] CompanyInfo 컴포넌트 (사업자 정보, 저작권)
    - **Test**: 링크 클릭 테스트, 외부 링크 target="_blank" 테스트

---

### Phase 2: Home Page & Product Features (Sprint 2-3: Week 3-6)

#### 2.1 Home Page 구현 (Figma 디자인 기반)

**Subtasks:**

16. **HeroBanner 컴포넌트 구현**
    - [ ] **Test**: HeroBanner 렌더링 테스트
    - [ ] HeroBanner 컨테이너 (500px height)
    - [ ] BannerSlide 컴포넌트 (단일 슬라이드)
      - 이미지 영역 (480x400px)
      - 텍스트 영역 (Heading, Subheading, Description, CTA)
    - [ ] BannerNavigation 컴포넌트 (좌우 화살표)
    - [ ] BannerDots 컴포넌트 (페이지네이션 인디케이터)
    - [ ] **Test**: 슬라이드 자동 전환 테스트 (5초 간격)
    - [ ] **Test**: 화살표 클릭 슬라이드 변경 테스트
    - [ ] **Test**: Dot 클릭 슬라이드 이동 테스트

17. **PromoBanner 컴포넌트 구현**
    - [ ] **Test**: PromoBanner 렌더링 테스트
    - [ ] PromoBanner 컨테이너 (163px height)
    - [ ] PromoCard 컴포넌트 (재사용 가능)
      - 이모지 아이콘 (36px)
      - 제목 (Heading 3, 27px)
      - 설명 (20px)
    - [ ] 3개 프로모 렌더링 (무료배송, 안전결제, 간편반품)
    - **Test**: 반응형 레이아웃 테스트 (Desktop 3 columns, Mobile 1 column)

18. **CategorySection 컴포넌트 구현**
    - [ ] **Test**: CategorySection 렌더링 테스트
    - [ ] CategorySection 컨테이너 (232px height)
    - [ ] CategoryButton 컴포넌트 (110x164px)
      - 아이콘 영역 (64x64px, circular background)
      - 텍스트 (20px)
      - Hover 효과 (scale + shadow)
    - [ ] 8개 카테고리 렌더링
    - [ ] **Test**: 카테고리 클릭 시 필터링된 상품 페이지로 이동 테스트

19. **FeaturedProducts 섹션 구현**
    - [ ] **Test**: FeaturedProducts 섹션 렌더링 테스트
    - [ ] 섹션 헤더 (제목 + "전체보기" 링크)
    - [ ] ProductGrid 컴포넌트 (4 columns x 2 rows)
    - [ ] "전체보기" 링크 클릭 시 상품 목록 페이지 이동
    - **Test**: Grid 반응형 테스트 (Desktop 4 columns, Mobile 2 columns)

#### 2.2 Product 기능 구현

**Subtasks:**

20. **Product 데이터 Seeding**
    - [ ] Prisma seed 스크립트 작성
    - [ ] 8개 카테고리 생성
    - [ ] 샘플 상품 데이터 생성 (Figma 예시 상품 포함)
      - 상품명, 가격, 할인가, 이미지 URL
      - 평점, 리뷰 수
      - 배지 (HOT, NEW, SALE)
    - [ ] 데이터베이스 Seeding 실행
    - **Test**: Seed 데이터가 정상적으로 삽입되었는지 확인

21. **Product API - 목록 조회**
    - [ ] **Test**: GET /api/products 테스트
      - 정상 케이스: 페이지네이션, 필터링, 정렬
      - 에러 케이스: 잘못된 쿼리 파라미터
    - [ ] API 핸들러 구현 (app/api/products/route.ts)
    - [ ] 페이지네이션 로직 (page, limit)
    - [ ] 필터링 로직 (카테고리, 가격 범위, 평점)
    - [ ] 정렬 로직 (인기순, 최신순, 가격순, 평점순)
    - **Integration Test**: API 엔드포인트 통합 테스트

22. **Product API - 상세 조회**
    - [ ] **Test**: GET /api/products/[id] 테스트
      - 정상 케이스: 상품 상세 정보 반환
      - 에러 케이스: 존재하지 않는 상품 ID → 404
    - [ ] API 핸들러 구현
    - [ ] 상품 정보 + 이미지 + 리뷰 포함
    - **Integration Test**: 상품 상세 조회 통합 테스트

23. **Product API - 검색**
    - [ ] **Test**: GET /api/products/search 테스트
      - 정상 케이스: 키워드로 상품 검색
      - 에러 케이스: 빈 검색어, 특수문자
    - [ ] API 핸들러 구현 (app/api/products/search/route.ts)
    - [ ] PostgreSQL Full-text search 구현
    - [ ] 검색 결과 페이지네이션
    - **Integration Test**: 검색 기능 통합 테스트

24. **ProductCard 컴포넌트 구현 (Figma 디자인)**
    - [ ] **Test**: ProductCard 렌더링 테스트
    - [ ] ProductCard 컨테이너 (230x442px)
    - [ ] ProductImage 컴포넌트 (228x228px)
      - ImageWithFallback (Placeholder 포함)
      - ProductBadge (HOT, NEW, SALE)
      - DiscountTag (할인율 표시)
    - [ ] ProductInfo 컴포넌트
      - 상품명 (2줄 말줄임)
      - ProductRating (별점 + 리뷰 수)
      - ProductPrice (원가 취소선 + 할인가)
    - [ ] AddToCartButton 컴포넌트
      - 아이콘 + "장바구니" 텍스트
      - 클릭 시 장바구니 추가
      - 로딩 상태 표시
    - **Test**: 장바구니 추가 버튼 클릭 테스트
    - **Test**: Hover 효과 테스트 (shadow + scale)

25. **ProductGrid 컴포넌트 구현**
    - [ ] **Test**: ProductGrid 렌더링 테스트
    - [ ] Grid 레이아웃 (4 columns, gap: 24px)
    - [ ] 반응형 레이아웃 (Desktop 4, Tablet 3, Mobile 2)
    - [ ] Skeleton 로딩 상태
    - **Test**: 반응형 grid 테스트

26. **Product 목록 페이지 구현**
    - [ ] app/(shop)/products/page.tsx 구현
    - [ ] ProductFilter 사이드바
      - CategoryFilter (카테고리 선택)
      - PriceFilter (가격 범위 슬라이더)
      - RatingFilter (평점 필터)
    - [ ] ProductSort 드롭다운 (정렬)
    - [ ] ProductGrid 렌더링
    - [ ] Pagination 컴포넌트
    - [ ] React Query로 데이터 페칭
    - **E2E Test**: 필터링, 정렬, 페이지네이션 테스트

27. **Product 상세 페이지 구현**
    - [ ] app/(shop)/products/[id]/page.tsx 구현
    - [ ] ProductDetail 컴포넌트
      - ImageGallery (이미지 슬라이더)
      - 상품 정보 (제목, 가격, 설명, 재고)
      - 수량 선택 입력
      - "장바구니 추가" 버튼
      - "바로 구매" 버튼
    - [ ] ProductSpecs 섹션 (상품 스펙 테이블)
    - [ ] ReviewSection (리뷰 목록)
    - [ ] RelatedProducts (연관 상품 그리드)
    - **E2E Test**: 상품 상세 페이지 → 장바구니 추가 플로우 테스트

#### 2.3 장바구니 기능 구현

**Subtasks:**

28. **Cart Zustand Store 구현**
    - [ ] **Test**: 장바구니 상태 관리 테스트
      - 상품 추가, 삭제, 수량 변경
      - 총 금액 계산
    - [ ] cartStore.ts 구현
    - [ ] 로컬 스토리지 동기화 (비회원)
    - **Test**: 로컬 스토리지 persist 테스트

29. **Cart API 구현**
    - [ ] **Test**: POST /api/cart 테스트 (상품 추가)
    - [ ] **Test**: PUT /api/cart/[itemId] 테스트 (수량 변경)
    - [ ] **Test**: DELETE /api/cart/[itemId] 테스트 (상품 삭제)
    - [ ] API 핸들러 구현
    - [ ] 회원: DB에 저장
    - [ ] 비회원: 세션 또는 로컬 스토리지
    - **Integration Test**: Cart API 통합 테스트

30. **CartDrawer 컴포넌트 구현**
    - [ ] **Test**: CartDrawer 렌더링 테스트
    - [ ] Drawer 오픈/클로즈 애니메이션
    - [ ] CartItem 컴포넌트
      - 상품 이미지, 제목, 가격
      - 수량 조절 (+ / -)
      - 삭제 버튼
    - [ ] CartSummary (주문 요약, 총 금액)
    - [ ] "결제하기" 버튼
    - [ ] CartEmpty 컴포넌트 (빈 장바구니 상태)
    - **Test**: 장바구니 아이템 수량 변경 테스트
    - **Test**: 장바구니 아이템 삭제 테스트

31. **Cart 페이지 구현**
    - [ ] app/(shop)/cart/page.tsx 구현
    - [ ] 장바구니 목록 렌더링
    - [ ] 선택 삭제 기능 (체크박스)
    - [ ] 전체 선택/해제 버튼
    - [ ] "선택 상품 삭제" 버튼
    - [ ] 주문 요약 영역
    - [ ] "주문하기" 버튼
    - **E2E Test**: 장바구니 페이지 → 주문하기 플로우 테스트

---

### Phase 3: Checkout & Order Management (Sprint 4: Week 7-8)

#### 3.1 Checkout 플로우 구현

**Subtasks:**

32. **Stripe 연동 설정**
    - [ ] Stripe 계정 생성 (Test mode)
    - [ ] Stripe API 키 환경 변수 설정
    - [ ] Stripe 클라이언트 초기화 (lib/stripe/client.ts)
    - [ ] Stripe Elements 라이브러리 설치
    - **Test**: Stripe 연결 테스트

33. **Checkout API - 주문 생성**
    - [ ] **Test**: POST /api/orders 테스트
      - 정상 케이스: 주문 생성 성공, orderNumber 생성
      - 에러 케이스: 재고 부족, 잘못된 배송지 정보
    - [ ] API 핸들러 구현 (app/api/orders/route.ts)
    - [ ] 주문 번호 생성 로직
    - [ ] 주문 아이템 저장
    - [ ] 재고 차감 로직
    - [ ] Stripe Payment Intent 생성
    - **Integration Test**: 주문 생성 API 통합 테스트

34. **Checkout 페이지 - 배송지 정보**
    - [ ] app/(shop)/checkout/page.tsx 구현
    - [ ] Multi-step Checkout 컴포넌트
    - [ ] Step 1: ShippingForm (배송지 입력)
      - React Hook Form + Zod 유효성 검증
      - 주소 검색 API 연동 (Daum 우편번호 API)
      - AddressSelect (저장된 배송지 선택)
      - "새 배송지 입력" 폼
    - **Test**: 폼 유효성 검증 테스트

35. **Checkout 페이지 - 결제 정보**
    - [ ] Step 2: PaymentForm (결제 수단 선택)
    - [ ] StripePayment 컴포넌트
      - Stripe Elements (Card Element)
      - 카드 정보 입력
      - 결제 버튼
    - [ ] OrderReview (주문 확인)
      - 주문 상품 목록
      - 배송지 정보
      - 결제 금액
    - **Test**: Stripe Payment Intent 생성 테스트

36. **결제 처리 및 완료 페이지**
    - [ ] 결제 버튼 클릭 시 Stripe confirmCardPayment 호출
    - [ ] 결제 성공 시 주문 상태 업데이트 (PAID)
    - [ ] 결제 실패 시 에러 처리
    - [ ] 주문 완료 페이지 (app/(shop)/orders/[id]/page.tsx)
      - 주문 번호, 주문 상품, 배송 정보
      - "계속 쇼핑하기" 버튼
    - **E2E Test**: 전체 결제 플로우 테스트 (Stripe Test 카드 사용)

37. **Stripe Webhook 처리**
    - [ ] **Test**: POST /api/webhooks/stripe 테스트
      - payment_intent.succeeded
      - payment_intent.payment_failed
    - [ ] Webhook 핸들러 구현 (app/api/webhooks/stripe/route.ts)
    - [ ] Webhook signature 검증
    - [ ] 결제 성공 시 주문 상태 업데이트
    - [ ] 결제 실패 시 주문 취소 처리
    - **Integration Test**: Webhook 처리 통합 테스트

#### 3.2 Order 관리 기능 구현

**Subtasks:**

38. **Order API - 목록 조회**
    - [ ] **Test**: GET /api/orders 테스트 (현재 사용자 주문 목록)
    - [ ] API 핸들러 구현
    - [ ] 페이지네이션, 필터링 (상태별)
    - **Integration Test**: 주문 목록 조회 통합 테스트

39. **Order API - 상세 조회**
    - [ ] **Test**: GET /api/orders/[id] 테스트
    - [ ] API 핸들러 구현
    - [ ] 주문 정보 + 주문 아이템 + 배송 정보
    - **Integration Test**: 주문 상세 조회 통합 테스트

40. **Order API - 주문 취소**
    - [ ] **Test**: PUT /api/orders/[id]/cancel 테스트
      - 정상 케이스: 취소 가능 상태 → 취소 성공
      - 에러 케이스: 배송 중/완료 → 취소 불가
    - [ ] API 핸들러 구현
    - [ ] Stripe 환불 처리
    - [ ] 재고 복구 로직
    - **Integration Test**: 주문 취소 통합 테스트

41. **주문 목록 페이지 구현**
    - [ ] app/(shop)/orders/page.tsx 구현
    - [ ] OrderList 컴포넌트
    - [ ] OrderItem 컴포넌트
      - 주문 번호, 주문 날짜
      - 주문 상품 목록 (썸네일)
      - 주문 금액
      - OrderStatus 표시
      - "주문 상세 보기" 버튼
    - [ ] 필터 (전체, 배송 중, 배송 완료, 취소)
    - **E2E Test**: 주문 목록 페이지 테스트

42. **주문 상세 페이지 구현**
    - [ ] app/(shop)/orders/[id]/page.tsx 구현
    - [ ] OrderDetail 컴포넌트
      - 주문 번호, 주문 날짜, 주문 상태
      - 배송지 정보
      - 주문 상품 목록
      - 결제 정보
    - [ ] TrackingInfo 컴포넌트 (배송 추적)
      - 송장 번호 표시
      - 배송 상태 타임라인
    - [ ] OrderActions 컴포넌트
      - "주문 취소" 버튼 (조건부)
      - "반품 신청" 버튼 (조건부)
    - **E2E Test**: 주문 상세 → 주문 취소 플로우 테스트

---

### Phase 4: Reviews & Seller Features (Sprint 5: Week 9-10)

#### 4.1 리뷰 시스템 구현

**Subtasks:**

43. **Review API - 리뷰 작성**
    - [ ] **Test**: POST /api/products/[id]/reviews 테스트
      - 정상 케이스: 구매 확정 후 리뷰 작성 가능
      - 에러 케이스: 구매 이력 없음, 이미 리뷰 작성
    - [ ] API 핸들러 구현
    - [ ] 구매 확인 로직 (verified purchase)
    - [ ] 리뷰 이미지 업로드 (AWS S3)
    - **Integration Test**: 리뷰 작성 API 통합 테스트

44. **Review API - 리뷰 조회**
    - [ ] **Test**: GET /api/products/[id]/reviews 테스트
    - [ ] API 핸들러 구현
    - [ ] 페이지네이션, 정렬 (최신순, 평점순, 도움순)
    - **Integration Test**: 리뷰 조회 API 통합 테스트

45. **Review API - 리뷰 수정/삭제**
    - [ ] **Test**: PUT /api/reviews/[id] 테스트 (수정)
    - [ ] **Test**: DELETE /api/reviews/[id] 테스트 (삭제)
    - [ ] API 핸들러 구현
    - [ ] 작성자 권한 확인
    - **Integration Test**: 리뷰 수정/삭제 통합 테스트

46. **ReviewForm 컴포넌트 구현**
    - [ ] **Test**: ReviewForm 렌더링 테스트
    - [ ] RatingInput 컴포넌트 (별점 입력, 1-5)
    - [ ] 리뷰 텍스트 입력 (Textarea)
    - [ ] 이미지 업로드 (최대 5개)
      - 이미지 미리보기
      - 삭제 버튼
    - [ ] "리뷰 작성" 버튼
    - **Test**: 리뷰 제출 테스트

47. **ReviewSection 컴포넌트 구현**
    - [ ] **Test**: ReviewSection 렌더링 테스트
    - [ ] 리뷰 요약 (평균 평점, 총 리뷰 수, 평점 분포)
    - [ ] ReviewList 컴포넌트
    - [ ] ReviewItem 컴포넌트
      - 작성자 이름, 평점, 작성일
      - 리뷰 내용
      - 리뷰 이미지 (갤러리)
      - "도움이 돼요" 버튼 (좋아요)
      - "신고" 버튼
      - Verified Purchase 뱃지
    - [ ] 정렬 드롭다운
    - [ ] Pagination
    - **E2E Test**: 리뷰 작성 → 리뷰 목록 확인 플로우 테스트

#### 4.2 판매자 기능 구현

**Subtasks:**

48. **Seller 권한 관리**
    - [ ] User 모델에 role 추가 (BUYER, SELLER, ADMIN)
    - [ ] 판매자 전환 API (POST /api/auth/become-seller)
    - [ ] 판매자 전용 미들웨어 (lib/auth/permissions.ts)
    - **Test**: 판매자 권한 테스트

49. **Seller Product API - 상품 등록**
    - [ ] **Test**: POST /api/products 테스트 (판매자 전용)
    - [ ] API 핸들러 구현
    - [ ] 상품 정보 유효성 검증
    - [ ] 상품 이미지 업로드 (AWS S3)
    - [ ] 상품 상태: PENDING_APPROVAL
    - **Integration Test**: 상품 등록 API 통합 테스트

50. **Seller Product API - 상품 수정/삭제**
    - [ ] **Test**: PUT /api/products/[id] 테스트 (수정)
    - [ ] **Test**: DELETE /api/products/[id] 테스트 (삭제)
    - [ ] API 핸들러 구현
    - [ ] 판매자 본인 상품만 수정/삭제 가능
    - **Integration Test**: 상품 수정/삭제 통합 테스트

51. **Seller Dashboard 페이지 구현**
    - [ ] app/(seller)/dashboard/page.tsx 구현
    - [ ] SellerDashboard 컴포넌트
      - 매출 요약 (오늘, 이번 주, 이번 달)
      - 주문 현황 (대기, 배송 중, 완료)
      - 인기 상품 TOP 5
    - [ ] SalesChart 컴포넌트 (일별 매출 차트)
    - [ ] AnalyticsCard 컴포넌트 (통계 카드)
    - **Test**: 대시보드 데이터 렌더링 테스트

52. **Seller 상품 관리 페이지**
    - [ ] app/(seller)/products/page.tsx 구현
    - [ ] SellerProductList 컴포넌트
      - 상품 목록 테이블
      - 상태별 필터 (전체, 승인 대기, 승인, 거부)
      - 검색 기능
    - [ ] "상품 등록" 버튼
    - [ ] 상품 수정/삭제 버튼
    - **E2E Test**: 판매자 상품 등록 → 수정 → 삭제 플로우 테스트

53. **Seller 상품 등록/수정 페이지**
    - [ ] app/(seller)/products/new/page.tsx (등록)
    - [ ] app/(seller)/products/[id]/edit/page.tsx (수정)
    - [ ] 상품 등록 폼
      - 카테고리 선택
      - 상품명, 가격, 재고, 설명
      - 이미지 업로드 (드래그 앤 드롭)
      - 옵션 설정 (색상, 사이즈 등)
    - [ ] 이미지 업로드 진행 상태 표시
    - **E2E Test**: 상품 등록 전체 플로우 테스트

54. **Seller 주문 관리 페이지**
    - [ ] app/(seller)/orders/page.tsx 구현
    - [ ] SellerOrderList 컴포넌트
      - 주문 목록 테이블
      - 상태별 필터 (전체, 신규, 배송 중, 완료)
    - [ ] 주문 상태 변경 버튼
      - "주문 확인" → CONFIRMED
      - "배송 시작" → SHIPPING (송장 번호 입력)
      - "배송 완료" → DELIVERED
    - **E2E Test**: 판매자 주문 처리 플로우 테스트

---

### Phase 5: Admin Panel & Advanced Features (Sprint 6: Week 11-12)

#### 5.1 관리자 패널 구현

**Subtasks:**

55. **Admin 권한 관리**
    - [ ] ADMIN 역할 사용자 생성
    - [ ] Admin 전용 미들웨어
    - **Test**: Admin 권한 테스트

56. **Admin Dashboard 페이지**
    - [ ] app/(admin)/dashboard/page.tsx 구현
    - [ ] AdminDashboard 컴포넌트
      - 전체 매출, 주문 수, 회원 수, 판매자 수
      - 최근 주문 목록
      - 승인 대기 상품 목록
    - **Test**: 관리자 대시보드 렌더링 테스트

57. **Admin 회원 관리 페이지**
    - [ ] app/(admin)/users/page.tsx 구현
    - [ ] UserManagement 컴포넌트
      - 회원 목록 테이블 (이메일, 이름, 역할, 상태)
      - 검색, 필터링 (역할별, 상태별)
      - 회원 상태 변경 (정지, 활성화)
      - 판매자 승인/거부
    - **E2E Test**: 회원 관리 플로우 테스트

58. **Admin 상품 승인 페이지**
    - [ ] app/(admin)/products/page.tsx 구현
    - [ ] ProductApproval 컴포넌트
      - 승인 대기 상품 목록
      - 상품 상세 보기 모달
      - "승인" / "거부" 버튼
      - 거부 사유 입력
    - **E2E Test**: 상품 승인/거부 플로우 테스트

59. **Admin 주문 관리 페이지**
    - [ ] app/(admin)/orders/page.tsx 구현
    - [ ] AdminOrderList 컴포넌트
      - 전체 주문 목록
      - 상태별, 날짜별 필터링
      - 주문 상세 보기
      - 분쟁 조정 기능
    - **E2E Test**: 관리자 주문 관리 플로우 테스트

#### 5.2 성능 최적화 및 배포 준비

**Subtasks:**

60. **이미지 최적화**
    - [ ] Next.js Image 컴포넌트 적용
    - [ ] Lazy loading 구현
    - [ ] WebP 포맷 변환 (CloudFront)
    - [ ] 이미지 리사이징 (AWS Lambda 또는 CloudFront Functions)
    - **Test**: Lighthouse 성능 점수 측정 (LCP < 2.5s)

61. **코드 스플리팅 및 번들 최적화**
    - [ ] Dynamic imports 적용
    - [ ] Route-based code splitting
    - [ ] Tree shaking 확인
    - [ ] Bundle analyzer로 번들 크기 분석
    - **Test**: 번들 크기 < 250KB (First Load JS)

62. **캐싱 전략 구현**
    - [ ] SWR / React Query 캐싱 설정
    - [ ] API 응답 캐싱 (stale-while-revalidate)
    - [ ] Static Generation 활용 (카테고리 페이지 등)
    - **Test**: 캐싱 동작 확인

63. **SEO 최적화**
    - [ ] Metadata API 적용 (모든 페이지)
    - [ ] Open Graph 태그 추가
    - [ ] Sitemap 생성 (next-sitemap)
    - [ ] robots.txt 설정
    - **Test**: SEO 점수 측정 (Lighthouse)

64. **에러 모니터링 설정**
    - [ ] Sentry 설치 및 설정
    - [ ] 에러 바운더리 적용
    - [ ] Source map 업로드 설정
    - **Test**: 에러 발생 시 Sentry에 로그 전송 확인

65. **Vercel 배포 설정**
    - [ ] Vercel 프로젝트 생성
    - [ ] 환경 변수 설정 (Production, Preview)
    - [ ] PostgreSQL 데이터베이스 연결
    - [ ] Domain 연결 (Custom domain)
    - [ ] CI/CD 파이프라인 설정 (GitHub Actions)
    - **Test**: Production 배포 성공 확인

---

## 📊 Sprint Overview

| Sprint | 주차 | 주요 Task | 목표 |
|--------|------|-----------|------|
| **Sprint 1** | Week 1-2 | 프로젝트 설정, 인증, Layout | 기본 인프라 완료, 로그인 가능 |
| **Sprint 2** | Week 3-4 | Home 페이지, Product 목록/상세 | 메인 페이지 완성, 상품 조회 가능 |
| **Sprint 3** | Week 5-6 | 장바구니, 검색, 필터링 | 장바구니 기능 완성 |
| **Sprint 4** | Week 7-8 | Checkout, Order 관리 | 주문/결제 플로우 완성 |
| **Sprint 5** | Week 9-10 | 리뷰, 판매자 기능 | 리뷰 시스템, 판매자 대시보드 완성 |
| **Sprint 6** | Week 11-12 | Admin 패널, 최적화, 배포 | 전체 기능 완성, 배포 완료 |

---

## ✅ Definition of Done (DoD)

각 Subtask는 다음 조건을 만족해야 완료로 간주됩니다:

1. **TDD 준수**:
   - [ ] Test 먼저 작성 (Red)
   - [ ] 최소 구현으로 Test 통과 (Green)
   - [ ] 리팩토링 (Refactor)

2. **코드 품질**:
   - [ ] TypeScript 타입 오류 없음
   - [ ] ESLint 오류 없음
   - [ ] Prettier 포맷팅 적용

3. **테스트 커버리지**:
   - [ ] Unit Test 작성 (중요 로직)
   - [ ] Integration Test 작성 (API)
   - [ ] E2E Test 작성 (Critical paths)

4. **문서화**:
   - [ ] 주요 함수/컴포넌트 JSDoc 작성
   - [ ] README 업데이트 (필요 시)

5. **코드 리뷰**:
   - [ ] PR 생성 및 리뷰 완료
   - [ ] 피드백 반영

6. **배포 확인**:
   - [ ] Preview 배포 확인
   - [ ] QA 테스트 완료

### Testing Strategy

#### Test Pyramid

```
        /\
       /  \      E2E Tests (5%)
      /    \     - Critical user flows
     /------\    - Checkout process
    /        \
   /   Integration Tests (25%)
  /    - API endpoints
 /      - Database operations
/--------\
  Unit Tests (70%)
  - Business logic
  - Utility functions
  - Components
```

#### Testing Tools
- **Unit**: Vitest + React Testing Library
- **Integration**: Vitest + Supertest
- **E2E**: Playwright
- **Visual**: Chromatic (optional)

#### Test Coverage Goals
- Unit Tests: 80% coverage
- Integration Tests: Key API endpoints
- E2E Tests: Critical user journeys
  - User registration → login → purchase
  - Seller product upload → order management
  - Admin product approval

#### TDD Approach
1. Write failing test
2. Implement minimum code to pass
3. Refactor for quality
4. Repeat

**Example TDD Workflow:**
```typescript
// 1. Write test first
describe('ProductService', () => {
  it('should create a new product', async () => {
    const productData = { name: 'Test Product', price: 100 }
    const product = await productService.create(productData)
    expect(product.id).toBeDefined()
    expect(product.name).toBe('Test Product')
  })
})

// 2. Implement service
class ProductService {
  async create(data: CreateProductInput) {
    return await prisma.product.create({ data })
  }
}

// 3. Refactor and optimize
```

### Rollout Plan

#### Pre-launch Checklist
- [ ] All critical features implemented
- [ ] Security audit completed
- [ ] Performance testing passed
- [ ] Database migrations prepared
- [ ] Monitoring and logging configured
- [ ] Error tracking (Sentry) set up
- [ ] Documentation completed
- [ ] Backup strategy implemented

#### Launch Strategy
1. **Soft Launch** (Week 1)
   - Limited user access (100명)
   - Monitor performance and errors
   - Collect user feedback

2. **Beta Launch** (Week 2-3)
   - Expand to 500명
   - Fix critical bugs
   - Optimize based on real usage

3. **Public Launch** (Week 4)
   - Full public access
   - Marketing campaign
   - Customer support ready

#### Post-launch Monitoring
- Real-time error monitoring (Sentry)
- Performance metrics (Vercel Analytics)
- User feedback collection
- Database performance monitoring
- Weekly review meetings

### Rollback Strategy

#### Deployment Rollback
- Vercel provides instant rollback to previous deployment
- Keep last 3 stable versions available

#### Database Rollback
- Prisma migration rollback procedure
```bash
npx prisma migrate rollback
```
- Database backups (daily automated backups)
- Point-in-time recovery (PITR) for critical data

#### Feature Flags
- Use environment variables for feature toggles
- Critical features can be disabled without redeployment

#### Emergency Procedures
1. **Critical Bug Detection**
   - Immediately rollback deployment
   - Notify team via Slack/Discord
   - Create hotfix branch

2. **Database Issues**
   - Switch to read-only mode
   - Restore from backup
   - Run data integrity checks

3. **Payment Issues**
   - Disable checkout temporarily
   - Contact Stripe support
   - Notify affected users

---

## 🔧 Dependencies & Risks

### External Dependencies

#### Critical Dependencies
1. **Vercel Platform**
   - Risk: Outage or service disruption
   - Mitigation: Vercel has 99.99% uptime SLA, consider multi-region deployment

2. **PostgreSQL Database**
   - Risk: Data loss or corruption
   - Mitigation: Daily backups, point-in-time recovery, replica setup

3. **Stripe Payment Gateway**
   - Risk: Payment processing failure
   - Mitigation: Webhook retry logic, manual payment verification process, alternative PG ready

4. **AWS S3 + CloudFront**
   - Risk: File upload/retrieval failure
   - Mitigation: Fallback to local storage temporarily, multiple region buckets

#### Development Dependencies
- Next.js, React, Prisma, Tailwind CSS
- Regular updates required for security patches

### Technical Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Database Performance Degradation** | Medium | High | Implement connection pooling, query optimization, indexing, consider read replicas |
| **Payment Processing Failures** | Low | Critical | Webhook retry mechanism, idempotent operations, manual fallback process |
| **Scalability Issues** | Medium | High | Load testing before launch, horizontal scaling strategy, CDN for static assets |
| **Security Vulnerabilities** | Medium | Critical | Regular security audits, dependency updates, rate limiting, input validation |
| **Third-party API Failures** | Low | High | Circuit breaker pattern, fallback mechanisms, comprehensive error handling |
| **Data Migration Issues** | Low | Medium | Test migrations in staging, backup before migration, rollback plan |
| **Stripe Integration Complexity** | Medium | Medium | Thorough testing, sandbox environment, webhook monitoring |
| **Image Upload/Storage Failures** | Low | Medium | Multiple upload retry attempts, temporary local storage fallback |

### Business Risks

| Risk | Mitigation |
|------|------------|
| **Low User Adoption** | MVP validation, user feedback loops, marketing strategy |
| **High Seller Churn** | Seller onboarding process, support system, competitive fees |
| **Competition** | Unique value proposition, focus on UX, faster iteration cycles |
| **Regulatory Compliance** | Legal review, GDPR/CCPA compliance, terms of service |

### Timeline Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Feature Creep** | Delay launch | Strict MVP scope, prioritize features |
| **Technical Debt** | Slow development | Regular refactoring, code reviews |
| **Team Availability** | Extended timeline | Buffer time in schedule, clear task allocation |
| **Third-party Integration Delays** | Blocked features | Parallel development, mock services |

---

## ❓ Open Questions

### Technical Questions
1. **캐싱 전략**: Redis 도입 시기와 범위는? (Session store, Product cache, Rate limiting)
2. **실시간 재고 관리**: WebSocket 또는 Server-Sent Events 필요 여부?
3. **검색 기능**: PostgreSQL Full-text search vs Elasticsearch vs Algolia?
4. **이미지 처리**: 서버사이드 resize/optimization vs CDN에서 처리?
5. **Email 서비스**: SendGrid vs AWS SES vs Resend?

### Product Questions
1. **최소 재고 알림**: 판매자에게 재고 부족 알림 기능 필요 여부?
2. **쿠폰/할인 시스템**: MVP에 포함할 것인지 여부?
3. **위시리스트 기능**: MVP에 포함할 것인지 여부?
4. **다국어 지원**: 초기 버전에 필요한지 여부?
5. **소셜 로그인**: Google, Kakao, Naver 중 우선순위?

### Business Questions
1. **수수료 정책**: 판매자 수수료율은?
2. **배송비 정책**: 무료 배송 기준은?
3. **정산 주기**: 판매 대금 정산은 얼마나 자주?
4. **CS 프로세스**: 고객 문의 처리 방법은?
5. **환불 정책**: 환불 승인 프로세스는?

### Design Questions
1. **브랜딩**: 색상 스키마, 로고, 폰트는?
2. **모바일 vs 데스크톱**: 우선순위는? (Mobile-first로 가정)
3. **다크 모드**: 지원 필요 여부?
4. **접근성**: WCAG 레벨 목표는? (AA로 가정)

---

## 📊 Success Metrics

### KPIs (Key Performance Indicators)

#### User Metrics
- **User Registration Rate**: 일일 신규 회원 수
- **User Retention**: 7일/30일 재방문율
- **Active Users**: DAU, MAU

#### Conversion Metrics
- **Conversion Rate**: 방문자 대비 구매 전환율 (목표: 3%+)
- **Cart Abandonment Rate**: 장바구니 이탈률 (목표: 60% 이하)
- **Average Order Value**: 평균 주문 금액
- **Purchase Frequency**: 구매 빈도

#### Seller Metrics
- **Seller Registration**: 신규 판매자 가입 수
- **Products Listed**: 등록된 상품 수
- **Seller Revenue**: 판매자 매출
- **Order Fulfillment Rate**: 주문 처리율

#### Performance Metrics
- **Page Load Time**: LCP < 2.5s
- **API Response Time**: p95 < 200ms
- **Error Rate**: < 0.1%
- **Uptime**: 99.9%+

#### Business Metrics
- **GMV (Gross Merchandise Value)**: 총 거래액
- **Revenue**: 플랫폼 수익
- **Customer Satisfaction**: CSAT Score (목표: 4.0/5.0)
- **Net Promoter Score (NPS)**: 고객 추천 지수

---

## 📚 References

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Stripe API Documentation](https://stripe.com/docs/api)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest/docs/react/overview)

### Best Practices
- [Next.js Performance Best Practices](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev Performance](https://web.dev/performance/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [PostgreSQL Performance Tips](https://wiki.postgresql.org/wiki/Performance_Optimization)

### Tools
- [Prisma Studio](https://www.prisma.io/studio)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Stripe Dashboard](https://dashboard.stripe.com/)
- [Sentry](https://sentry.io/)

---

## 📝 Appendix

### Environment Variables

```bash
# .env.example

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/ecommerce"

# Authentication
JWT_SECRET="your-super-secret-jwt-key"
JWT_ACCESS_TOKEN_EXPIRY="15m"
JWT_REFRESH_TOKEN_EXPIRY="7d"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# AWS S3
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_S3_BUCKET="ecommerce-uploads"
AWS_REGION="ap-northeast-2"
CLOUDFRONT_URL="https://d1234567890.cloudfront.net"

# Email
EMAIL_FROM="noreply@example.com"
SENDGRID_API_KEY="SG...."

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"

# Monitoring
SENTRY_DSN="https://...@sentry.io/..."
SENTRY_AUTH_TOKEN="..."
```

### Git Commit Convention

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락 등
refactor: 코드 리팩토링
test: 테스트 코드 추가
chore: 빌드 작업, 패키지 관리 등

예시:
feat: add product search functionality
fix: resolve cart total calculation bug
docs: update API documentation
```

### Code Review Checklist

- [ ] 코드가 요구사항을 만족하는가?
- [ ] 테스트 커버리지가 충분한가?
- [ ] 보안 취약점은 없는가?
- [ ] 성능 이슈는 없는가?
- [ ] 에러 핸들링이 적절한가?
- [ ] 코드 스타일이 일관성 있는가?
- [ ] 주석과 문서가 충분한가?
- [ ] TypeScript 타입이 올바르게 정의되었는가?

---

**문서 작성일**: 2026-02-05
**작성자**: Tech Team
**버전**: 1.0
**다음 리뷰 예정일**: 프로젝트 시작 1주일 후
