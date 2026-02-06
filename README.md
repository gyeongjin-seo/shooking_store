# 🛍️ 패션 쇼핑몰 상품 목록 페이지 (Mobile)

모바일 환경에 최적화된 패션 쇼핑몰 상품 목록 및 장바구니 기능 구현 프로젝트입니다.
제공된 요구사항 명세서를 분석하여, 사용자 경험(UX)을 고려한 레이아웃과 기능을 구현했습니다.

> **작성자:** 서경진
> **개발 기간:** 2026.02.02 2026.02.

<br/>

## 🔗 배포 링크 (Deployment)

// 미정
**👉 데모 페이지 바로가기:** [여기에_Vercel_또는_배포_URL_입력]

<br/>

## 🛠️ 기술 스택 (Tech Stack)

- **Framework:** React 18 (19)
- **Language:** JavaScript / TypeScript
- **Styling:** CSS Modules / Styled-components / Tailwind CSS
- **Deployment:** Vercel

<br/>

## 📱 주요 기능 (Key Features)

### 1. 모바일 최적화 레이아웃

- 375px 기준의 모바일 뷰포트에 최적화된 반응형 디자인
- `max-width` 설정을 통한 중앙 정렬 컨테이너 구현

### 2. 상품 리스트 (Grid Layout)

- CSS Grid를 활용한 **2열 상품 배치**
- `aspect-ratio`와 `object-fit: cover`를 사용하여 이미지 비율 유지 및 강조

### 3. 장바구니 인터랙션

- **Sticky Header:** 스크롤 시에도 상단에 고정되어 접근성 확보
- **상태 관리:** '담기' 버튼 클릭 시 즉각적인 카운트 업데이트 및 배지(Badge) 표시

<br/>

## 📂 문서 (Documentation)

프로젝트 진행 시 작성한 요구사항 분석 및 체크리스트 문서는 `docs` 폴더에서 확인하실 수 있습니다.

- [📄 요구사항 분석 및 기능 명세서](./docs/01.products_requirements.md)
- [✅ 요구사항 체크리스트](./docs/01.products_requirements_checklist.md)

<br/>

## 🚀 실행 방법 (Getting Started)

프로젝트를 로컬 환경에서 실행하려면 아래 명령어를 입력해주세요.

```bash
# 레포지토리 클론
git clone [레포지토리 주소]

# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```
