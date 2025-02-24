# [한터글로벌] 서비스개발실 프론트엔드 개발자 코딩테스트 - 과제 소개

**HANTEO DEMO**는 최신 뉴스 기사 목록을 **무한 스크롤 형태**로 제공하는 반응형 웹 애플리케이션입니다.

- 실제 백엔드 서버 연동을 염두에 두고, 가상의 **비동기 데이터 요청 방식**을 적용
- 좌우 스와이프(터치)를 통해 자연스럽게 페이지 전환 가능 (모바일 화면 한정)

---

## 기술 스택

- **Framework**: Next.js 15 (App Router), React 19
- **Styling**: CSS Modules, Global CSS
- **Data Fetching**: React Hooks (`useEffect`, `useState`)
- **Infinite Scroll**: `react-infinite-scroll-component`
- **Swipe Navigation**: `react-swipeable`


---

## 🎯 주요 기능 및 구현 내용

### ✅ 동적 데이터 로딩 (비동기 처리)

- 실제 API 호출을 고려하여 **비동기 데이터 로딩 로직**을 적용했습니다.
- 데이터 로딩 상태에 따라 로딩 표시 및 에러 핸들링을 구성했습니다.
- 

### ✅ 무한 스크롤 구현

- `react-infinite-scroll-component`로 부드러운 무한 스크롤을 구현했습니다.


### ✅ 좌우 스와이프(터치) 페이지 이동

- 모바일 친화적인 페이지 전환을 위해 `react-swipeable`을 활용했습니다.


### ✅ Next.js App Router 기반의 깔끔한 라우팅 구성

- 탭 메뉴 클릭 시 명확하게 구분된 페이지로 이동합니다.
- 배너는 홈 화면에서만 노출되도록 조건부 렌더링했습니다.

---

기본 주소: [http://localhost:3000](http://localhost:3000)

---

## 🛠 향후 개선 사항

- 실제 백엔드 API와 연동하여 데이터 완성도 높이기
- 서버 사이드 렌더링(SSR)을 통한 성능 최적화
- 추가적인 UI 개선 및 반응형 디자인 최적화
- 다크모드 지원

---

