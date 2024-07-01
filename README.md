# 2024 이노베이션 캠프 | React 주특기 과제 Level 2

> React Lv.1 를 react-router-dom, styled-components, redux를 사용해서 My Todo List 를 다시 만들어봅니다.

## 🌐 Vercel배포 - https://level2-my-todo-list.vercel.app

## ✅ Feature(구현기능)

- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo

## ✅ Requirement(요구사항)

<details>
<summary>공통</summary>

- **todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다.**
- todos 모듈은 **`Ducks 패턴`**으로 구현합니다.
</details>

<details>
<summary>메인 페이지</summary>

- **디자인과 화면 구성은 자유롭게 구현합니다.**
- **Todo의 상태에 “완료” 그룹과 “진행중" 그룹을 나뉘어서 보이도록 구현**합니다. 예시 영상 꼭 위, 아래가 아니어도 되며 창의적으로 구현해도 됩니다.
- **Todo를 추가하면 제목 `input`과 내용 `input`은 다시 빈 값이 되도록 구현**합니다.
- **input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화** 되도록 구현합니다.
- Todo의 완료상태**가 `true`**이면**,** 상태 버튼의 라벨을 **“취소”, `false`** 이면 라벨을 “**완료”** 로 보이도록 구현합니다.
- 전체 화면의 **최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한**하고, **컨텐츠를 화면의 가운데로 배치** 합니다.
- `상세보기` 클릭하면 **Todo의 상세 페이지로 이동**합니다. 상세 페이지에서 보여야 하는 내용은 아래 토글에서 별도 안내합니다.

</details>

<details>
<summary>상세 페이지</summary>

- 상세 페이지의 디자인과 화면 구성은 자유롭게 구현하되, 아래 요소들은 보여야 합니다.
  - Todo의 ID
  - Todo의 제목
  - Todo의 내용
  - `이전으로` 버튼
    - `이전으로` 버튼을 구현하고, `이전으로` 버튼을 클릭하면 리스트 화면으로 되돌아 갑니다.
    </details>

<details>
<summary>제한사항</summary>

- map을 사용할 때 **반드시 key**을 넣어야 하며, `map` 의 **index를 사용을 금지**합니다. 이것을 금지하는 이유는 강의에 다루었습니다.
- Todo Id 생성 시 `todos.length` 사용해서 생성하지 않습니다. `todos.length` 을 사용해서 id 생성 시 **발생할 수 있는 문제점에 대해 고민**해보시길 바랍니다.
</details>

## 💬 Why: 과제 제출시에는 아래 질문의 답변과 함께 제출해주세요.

### 1. 상세 페이지 이동을 위해 react-router-dom 라이브러리를 사용하셨을 거예요, CRA 라우팅이란 무엇인가요?

### 2. Redux를 사용하여 애플리케이션의 상태 관리를 하셨을 것입니다. 어떤 상태들을 Redux로 관리하셨나요? 그 상태 값을 Redux를 통해 관리함으로 얻은 이점은 무엇이었나요?

### 3. Redux의 reducer 함수는가 애플리케이션 로직과 어떻게 상호작용하는지 설명해 주세요.

### 4. CSS in JS 라이브러리 중 하나인 "styled component"를 사용했을 때의 이점은 많습니다.  CSS in JS가 제공하는 이점을 두 가지만 설명해 주세요.

### 5. useEffect hook을 사용한 부분이 있다면, 왜 사용해야 했고, 해당 hook이 언제 실행되는지 설명해주세요.

## 프로젝트 환경

- ⚙️ React, Vite, yarn
- 🔮Tailwind, styled-component

```
// 프로젝트 시작
yarn
yarn start
```
