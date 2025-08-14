# Emobin

## 1. 프로젝트 개요 

Emobin은 사용자가 작성한 글 속 감정을 분석해 시각화하고, 해당 감정에 맞춘 콘텐츠를 추천하는 모바일 앱입니다. <br>
React Native를 기반으로 구현했으며, 감정 분석 API를 통해 실시간 분석 결과를 제공합니다.

---

## 2. 프로젝트 목적

사용자가 자신의 감정을 쉽게 기록하고 분석함으로써 정서 변화를 인식하고 그에 맞는 영화·콘텐츠를 추천받아 감정 관리에 도움을 주는 것을 목표로 합니다.


---

## 3. 주요 기능
### 메인 페이지
| 기능 | 설명 |
|------|------|
| 랜딩 페이지 | 앱 실행 시 첫 화면으로, 서비스 소개와 주요 기능 안내 |
| 감정 적는 페이지 | 사용자가 당일 느낀 감정을 자유롭게 글을 작성하는 화면 |
| 감정 처리 페이지 | 작성한 글을 감정 분석 API에 전송하여 처리 |
| 감성 분석 결과 페이지 | 당일 느낀 감정 분석 결과를 해시태그와 감정 종류를 함께 표시 |
| 히스토리 페이지 | 감정 분석 결과를 시각화(온도계 UI)와 함께 표시 ,날짜별로 과거 감정 기록 확인 가능 |
| 맞춤 추천 리스트 보기 페이지 | 감정 결과에 따라 맞춤 영화/콘텐츠 리스트 제공 |

### 설정 페이지
| 기능 | 설명|
| ---- | ---- |
| 푸시 알림 설정 | 푸시 알림 on/off 토글 설정 |
| 회원정보 페이지 | 사용자 프로필 확인 및 닉네임 등 개인정보 수정 |
| 공지사항 페이지 | 서비스 공지와 업데이트 내역 확인 |

### 로그인 페이지
| 기능 | 설명|
| ---- | ---- |
| 스플래시 페이지 | 앱 로딩 화면 및 브랜드 로고 표시 |
| 스플래시 페이지 - 로그인 | 카카오 로그인 등 OAuth 인증 페이지 |
| 회원가입 페이지 | 신규 회원 가입 및 약관 동의 화면 |


---
## 4. 화면

| ![image](https://github.com/user-attachments/assets/9a9af74d-fd4e-45e2-b219-3de1463bd950) | ![image](https://github.com/user-attachments/assets/e0e9aed9-4a7c-4788-8471-eb89f018a07a) | ![image](https://github.com/user-attachments/assets/51584714-9db0-4668-8063-f8a3b04354fa) |
|------|-------|-------|
|![image](https://github.com/user-attachments/assets/6c50c2ce-eb52-4422-8166-1f04b8f411e2) | ![image](https://github.com/user-attachments/assets/75770d04-e594-4ede-8178-4003b099bf3e) | ![image](https://github.com/user-attachments/assets/6b83c298-5c71-4423-83ec-8bf7962bb1c7) |
|------|-------|-------|
|![image](https://github.com/user-attachments/assets/264be8e1-f812-4121-bffa-e48ad61702b4) | ![image](https://github.com/user-attachments/assets/c644982d-1692-4849-aa27-0604a1b0a50c) | ![image](https://github.com/user-attachments/assets/b6c6afb9-0680-4d9c-a660-9c17b443e4f0) |
|------|-------|-------|
|![image](https://github.com/user-attachments/assets/cfe60f87-04f8-48ea-99da-c4c075b3c0cb) | ![image](https://github.com/user-attachments/assets/1b454f98-a502-4b0c-a8c7-e8b1d8240104) | ![image](https://github.com/user-attachments/assets/91a612cd-43b4-41d2-b329-0b3cab7d878c) |





---

## 5. 기술 스택

| 구분 | 기술 |
| :--- | :--- |
| **프레임워크** | React Native |
| **언어** | TypeScript |
| **스타일링** | React Native StyleSheet |
| **API 통신** | Axios |
| **상태 관리** | Zustand |
