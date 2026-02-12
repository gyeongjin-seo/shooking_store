# 🏗️ 프로젝트 아키텍처 및 폴더 구조 설명서

본 문서는 `shooking_store` 프로젝트의 디렉토리 구조와 설계 의도를 설명합니다.
React의 컴포넌트 재사용성과 유지보수 편의성을 최우선으로 고려하여 **기능(Feature) 및 역할(Role) 중심**으로 구조를 설계했습니다.

---

## 1. 폴더 구조 개요 (Directory Structure)

```bash
src/
├── context/       # 전역 상태 관리 (Global State)
├── components/    # 재사용 가능한 UI 컴포넌트
│   ├── layout/    # 페이지 전체 틀 (Wrapper)
│   ├── common/    # 범용 컴포넌트 (버튼, 헤더 등)
│   └── product/   # 도메인 특화 컴포넌트 (상품 관련)
├── pages/         # 페이지 단위 조립 (View)
└── App.jsx        # 앱 진입점 및 Provider 설정
```
