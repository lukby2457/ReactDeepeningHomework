# 프로젝트 이름

- deepening-mbti

## 배포 주소
<https://deepening-mbti.vercel.app/>

## 개발 기간 ⏲️

- 2024.09.06(금) ~ 2024.09.11(수)

## 주요 기능 💜

- 로그인, 회원가입 기능
- 사용자 프로필 수정 및 내 게시글 관리
- 실시간 맛집 리뷰 피드
- 맛집 검색 및 필터링
- 맛집 게시글 CRUD (생성, 읽기, 수정, 삭제)

## 프로젝트 구조

```
mbti_test/
│
├── src/
|   ├── api/
│   │   ├── auth.js
│   │   └── testResult.js
|   |
│   ├── components/
│   │   ├── AuthForm.jsx
│   │   ├── Layout.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── TestForm.jsx
│   │   ├── TestResultItem.jsx
│   │   └── TestResultList.jsx
│   │
│   ├── data/
│   │   └── questions.js
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Main.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── SignUp.jsx
│   │   ├── TestPage.jsx
│   │   └── TestResultPage.jsx
│   │
│   ├── utils/
│   │   └── mbtiCalculator.jsx
│   │
│   └── App.jsx
│
├── package.json
├── tailwind.config.json
├── vercel.json
└── README.md
```

## 페이지별 기능

- **로그인 페이지**
  > 사용자 인증
- **회원가입 페이지**
  > 새 사용자 계정 생성
- **테스트 페이지**
  > 사용자가 MBTI 테스트
- **결과 페이지**
  > 사용자가 테스트한 결과 표시 및 공개, 비공개 여부 선택, 결과 삭제
- **프로필 페이지**
  > 사용자의 닉네임 표시 및 변경

## 트러블 슈팅
<https://velog.io/@lukby2457/910-%EA%B3%BC%EC%A0%9C-%EB%82%B4%EC%9A%A9>