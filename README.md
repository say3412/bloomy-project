## [Devias Kit - React](https://material-kit-react.devias.io/)

![license](https://img.shields.io/badge/license-MIT-blue.svg)

[![Devias Kit - React](https://github.com/devias-io/material-kit-react/blob/main/public/assets/thumbnail.png)](https://material-kit-react.devias.io/)

> Free React Admin Dashboard made with [MUI's](https://mui.com) components, [React](https://reactjs.org) and of course [Next.js](https://github.com/vercel/next.js) to boost your app development process!

## Pages 

- [Dashboard](https://material-kit-react.devias.io)
- [Customers](https://material-kit-react.devias.io/dashboard/customers)
- [Integrations](https://material-kit-react.devias.io/dashboard/integrations)
- [Settings](https://material-kit-react.devias.io/dashboard/settings)
- [Account](https://material-kit-react.devias.io/dashboard/account)
- [Sign In](https://material-kit-react.devias.io/auth/sign-in)
- [Sign Up](https://material-kit-react.devias.io/auth/sign-up)
- [Reset Password](https://material-kit-react.devias.io/auth/reset-password)

## Free Figma Community File

- [Duplicate File](https://www.figma.com/file/b3L1Np4RYiicZAOMopHNkm/Devias-Dashboard-Design-Library-Kit)

## Upgrade to PRO Version

We also have a pro version of this product which bundles even more pages and components if you want
to save more time and design efforts :)

| Free Version (this one)  | [Devias Kit Pro](https://mui.com/store/items/devias-kit-pro/)                |
| ------------------------ | :--------------------------------------------------------------------------- |
| **8** Pages              | **80+** Pages                                                                |
| ✔ Custom Authentication  | ✔ Authentication with **Amplify**, **Auth0**, **Firebase** and **Supabase**  |
| -                        | ✔ Vite Version                                                               |
| -                        | ✔ Dark Mode Support                                                          |
| -                        | ✔ Complete Users Flows                                                       |
| -                        | ✔ Premium Technical Support                                                  |

## Quick start

- Clone the repo: `git clone https://github.com/devias-io/material-kit-react.git`
- Make sure your Node.js and npm versions are up to date
- Install dependencies: `npm install` or `yarn`
- Start the server: `npm run dev` or `yarn dev`
- Open browser: `http://localhost:3000`

## File Structure

Within the download you'll find the following directories and files:

```
┌── .editorconfig
├── .eslintrc.js
├── .gitignore
├── CHANGELOG.md
├── LICENSE.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
├── public
└── src
	├── components
	├── contexts
	├── hooks
	├── lib
	├── styles
	├── types
	└── app
		├── layout.tsx
		├── page.tsx
		├── auth
		└── dashboard
```

## Resources

- More freebies like this one: https://devias.io

## Reporting Issues:

- [Github Issues Page](https://github.com/devias-io/material-kit-react/issues)

## License

- Licensed under [MIT](https://github.com/devias-io/material-kit-react/blob/main/LICENSE.md)

## Contact Us

- Email Us: support@deviasio.zendesk.com

## 개발자 코멘트
## 프로젝트 구조 분석 및 정리

이 프로젝트는 **Devias Kit - React** 템플릿으로, MUI (Material-UI) 기반의 Next.js Admin Dashboard입니다. Next.js 16, React 19, TypeScript를 사용하며, 대시보드, 고객 관리, 설정 등의 기능을 제공합니다.

### 📁 전체 아키텍처 개요

```
boolmy-project/
├── src/                          # 소스 코드
│   ├── app/                      # Next.js App Router (페이지 라우팅)
│   ├── components/               # 재사용 가능한 UI 컴포넌트
│   ├── contexts/                 # React Context (전역 상태)
│   ├── hooks/                    # 커스텀 React 훅
│   ├── lib/                      # 유틸리티 함수 및 설정
│   ├── styles/                   # 스타일링 (테마, 색상 등)
│   └── types/                    # TypeScript 타입 정의
├── public/                       # 정적 파일 (이미지, 폰트 등)
└── 설정 파일들 (next.config.mjs, tsconfig.json 등)
```

### 🔧 주요 기술 스택

- **Framework**: Next.js 16.2.6 (App Router)
- **UI Library**: MUI (Material-UI) v7 + Emotion
- **Language**: TypeScript
- **Styling**: Emotion CSS-in-JS
- **Charts**: ApexCharts
- **Icons**: Phosphor Icons
- **Forms**: React Hook Form + Zod

### 📂 세부 구조 및 활용 가이드

#### 1. **src/app/** - 페이지 라우팅 (Next.js App Router)
```
app/
├── layout.tsx              # 루트 레이아웃 (전역 스타일, 프로바이더)
├── page.tsx                # 홈페이지
├── dashboard/              # 대시보드 섹션
│   ├── layout.tsx          # 대시보드 레이아웃 (사이드바, 헤더)
│   ├── page.tsx            # 대시보드 메인
│   ├── account/            # 계정 관리
│   ├── customers/          # 고객 관리
│   ├── integrations/       # 통합 관리
│   └── settings/           # 설정
├── auth/                   # 인증 페이지
└── errors/                 # 에러 페이지
```

**활용 팁**:
- 새로운 페이지를 추가하려면 `app/[새로운-경로]/page.tsx` 생성
- 레이아웃을 공유하려면 `layout.tsx` 사용
- 동적 라우팅: `app/[id]/page.tsx` 형식으로 폴더 생성

#### 2. **src/components/** - UI 컴포넌트
```
components/
├── auth/                   # 인증 관련 컴포넌트
├── core/                   # 핵심 컴포넌트 (로고, 테마 등)
├── dashboard/              # 대시보드 전용 컴포넌트
│   ├── account/            # 계정 관리 컴포넌트
│   ├── customer/           # 고객 관리 컴포넌트
│   ├── integrations/       # 통합 관리 컴포넌트
│   ├── layout/             # 레이아웃 컴포넌트 (네비게이션)
│   └── overview/           # 대시보드 위젯
└── ...
```

**활용 팁**:
- 재사용 가능한 컴포넌트는 `core/`에 배치
- 페이지별 컴포넌트는 해당 폴더에 그룹화
- MUI 컴포넌트를 확장하여 커스텀 컴포넌트 생성

#### 3. **src/contexts/** - 전역 상태 관리
```
contexts/
└── user-context.tsx        # 사용자 상태 관리
```

**활용 팁**:
- 새로운 전역 상태가 필요하면 Context 추가
- 복잡한 상태는 Zustand나 Redux 고려

#### 4. **src/hooks/** - 커스텀 훅
```
hooks/
├── use-popover.ts          # 팝오버 상태 관리
└── use-selection.ts        # 선택 상태 관리
```

**활용 팁**:
- 반복되는 로직을 훅으로 추출
- API 호출, 폼 관리 등에 활용

#### 5. **src/lib/** - 유틸리티
```
lib/
├── auth/                   # 인증 관련 유틸리티
├── default-logger.ts       # 로깅
├── get-site-url.ts         # 사이트 URL 유틸리티
└── ...
```

**활용 팁**:
- 공통 함수, API 클라이언트, 설정 등 배치
- 외부 API 연동 로직 추가

#### 6. **src/styles/** - 스타일링
```
styles/
├── global.css              # 전역 스타일
└── theme/                  # MUI 테마 설정
    ├── colors.ts           # 색상 팔레트
    ├── create-theme.ts     # 테마 생성
    └── ...
```

**활용 팁**:
- `theme/colors.ts`에서 색상 커스터마이징
- `create-theme.ts`에서 MUI 테마 확장

#### 7. **src/types/** - 타입 정의
```
types/
├── nav.d.ts                # 네비게이션 타입
└── user.ts                 # 사용자 타입
```

**활용 팁**:
- 새로운 기능의 타입 정의 추가
- API 응답 타입 등 포함

### ⚙️ 설정 파일들

- **next.config.mjs**: Next.js 설정 (번들러, 이미지 최적화 등)
- **tsconfig.json**: TypeScript 설정
- **eslint.config.mjs**: ESLint 설정
- **prettier.config.mjs**: Prettier 설정
- **package.json**: 의존성 및 스크립트

### 🚀 유연한 사용을 위한 확장 가이드

#### 1. **새 페이지 추가**
```bash
# 예: 블로그 페이지 추가
mkdir -p src/app/blog
# src/app/blog/page.tsx 생성
```

#### 2. **새 컴포넌트 추가**
```bash
# 예: 차트 컴포넌트
mkdir -p src/components/charts
# src/components/charts/line-chart.tsx 생성
```

#### 3. **API 통합**
- lib에 API 클라이언트 추가
- Next.js API Routes (`src/app/api/`) 사용

#### 4. **스타일링 커스터마이징**
- colors.ts 수정
- MUI Theme Override 사용

#### 5. **상태 관리 확장**
- Context 추가 또는 외부 라이브러리 (Zustand, Redux) 도입

#### 6. **테스트 추가**
- Jest + React Testing Library 설정
- `src/__tests__/` 폴더 생성

### 📋 개발 워크플로우

1. **개발 서버**: `npm run dev` (이제 Webpack 사용)
2. **빌드**: `npm run build`
3. **린팅**: `npm run lint`
4. **타입 체크**: `npm run typecheck`
5. **포맷팅**: `npm run format:write`

이 구조를 기반으로 자유롭게 확장하세요. MUI의 풍부한 컴포넌트 생태계를 활용하면 빠르게 기능을 추가할 수 있습니다! 추가 질문이 있으시면 언제든 물어보세요.