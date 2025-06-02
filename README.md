<div align="center">
  <h2>📚 AI 기반 도서 기록 및 추천 시스템</h2>
  <h4>React + Spring Boot + JWT 기반의 사용자 맞춤형 독서 기록 웹 애플리케이션</h4>
</div>

---

## 📌 프로젝트 개요

AI 기술을 활용하여 사용자의 독서 활동을 기록하고, 해시태그 기반 분류 및 추천 기능을 제공하는 웹 애플리케이션입니다. 사용자 인증을 통해 개인화된 독서 경험을 제공 합니다.

---

## 🔧 주요 기능

- **회원가입 / 로그인 (JWT 인증 기반)**
- **도서 등록**: 제목, 저자, 내용, 커버 이미지, 해시태그 등 입력
- **도서 목록 조회 및 검색**
- **도서별 상세 정보 조회**
- **사용자별 독서 이력 통계 제공 (차트 시각화 예정)**
- **Swagger를 활용한 API 문서화**
- **H2 Console을 통한 로컬 DB 테스트**

---

## 🖥️ 개발 환경 및 기술 스택

### 🌐 프론트엔드
<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="JavaScript" />
  <img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="40" alt="styled-components" />
</p>

### 🛠 백엔드
<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" height="40" alt="Spring Boot" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="40" alt="Java" />
</p>

---

## 🧑‍💻 팀원 및 역할 분담

<table>
  <thead>
    <tr>
      <th width="120px">이름</th>
      <th width="160px">역할</th>
      <th>주요 업무 요약</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>이성준</td>
      <td>PM / 프론트</td>
      <td>미니프로젝트 진행 상황 확인 및 2일차 회의록 작성, 전체 구조 점검 및 발표자료(PPT), 회의록 작성</td>
    </tr>
    <tr>
      <td>오유진</td>
      <td>프론트</td>
      <td>Book 데이터 편집하기, 데이터 수정하기, Book CRUD, Axios 통신</td>
    </tr>
    <tr>
      <td>이민욱</td>
      <td>프론트 / 백엔드</td>
      <td>SpringBoot 기반 API 개발, JWT 인증 처리, H2 연동, Swagger 적용, OpenAi 연동, 프론트 도서 입력/조회 페이지/로그인 페이지 개발</td>
    </tr>
    <tr>
      <td>김은서</td>
      <td>백엔드</td>
      <td>책 삭제, 2일차 회의록 작성, 전체 구조 점검 및 발표자료(PPT), 회의록 작성</td>
    </tr>
    <tr>
      <td>장희지</td>
      <td>백엔드</td>
      <td>책 등록, 수정, 엔티티, dto, 해시태그 백엔드 구현 및 API 적용</td>
    </tr>
    <tr>
      <td>양민석</td>
      <td>백엔드</td>
      <td>책 전체 조회, 상세 조회. 도서 목록/상세 조회 기능 점검</td>
    </tr>
  </tbody>
</table>

---

## 🛡️ 인증 방식
- 	JWT 토큰 기반 인증
- 	로그인 시 토큰 발급 → 이후 Authorization 헤더에 Bearer {token} 형식으로 전달
- 	Spring Security FilterChain + JwtAuthenticationFilter 적용

## 📌 향후 개선사항
- 	사용자별 통계 시각화 기능 (chart.js 연동)
- 	실제 이미지 업로드 기능 (AWS S3 사용)
- 	도서 추천 알고리즘 개발
- 	OAuth 로그인 연동
