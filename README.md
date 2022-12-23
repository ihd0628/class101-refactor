# 클래스IOI

## 기술 스택

![react](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)

선택 이유

- 대규모 커뮤니티를 통한 정보 습득에 유리
- JSX 문법을 사용함에 따라, JavaScript에 대한 지식을 바탕으로 접근성이 용이하다 판단
  </br>

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white)

선택 이유

- Javascript를 이용한 동적 스타일링이 가능
- CSS-in-JS 방식을 통해 CSS, SCSS파일을 생성하지 않고도 스타일을 컴포넌트 단위로 관리 가능

## 기능

- 클래스 개설 및 수정
- 강의 영상 촬영 및 녹화 기능
- 녹화한 강의 업로드

## 관련 포스팅

> 프로젝트 종료 후 개인적으로 성능 최적화 작업 진행 내용 기술

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=hoon0123&slug=성능-최적화를-위한-노력들-2&color=dark)](https://velog.io/@hoon0123/%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%85%B8%EB%A0%A5%EB%93%A4-2) </br>

### 주요 내용

1. 이미지 CDN 사용하여 이미지 최적화
2. @react-icons/all-files라이브러리를 사용하여 react-icons 번들 사이즈 최적화
3. React.lazy를 사용한 코드 스플리팅
4. heigth 미리 설정 통한 렌더링 시 레이아웃 변경 최소화

## commit convention

### convention 형식

```
convention 명 : 커밋 내역
```

<br />

### convention 종류

| 태그이름 | 설명                                                  |
| -------- | ----------------------------------------------------- |
| feat     | 새로운 기능 추가                                      |
| fix      | 버그 수정                                             |
| design   | css 등 사용자 UI 수정                                 |
| style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| refactor | 코드 리팩토링                                         |
| comment  | 필요한 주석 추가 및 변경                              |
| docs     | 문서 수정                                             |
| chore    | 패키지 매니저 설정                                    |
| rename   | 파일 혹은 폴더명 수정하거나 옮기는 작업               |
| remove   | 파일을 삭제하는 작업만 하는 경우                      |
