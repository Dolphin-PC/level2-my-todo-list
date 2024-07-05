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

- React 앱에서 페이지 간의 이동을 관리하기 위한 기술입니다.
- 사용자가 다른 페이지로 이동할 때, 전체 페이지를 새로 불러오는 대신 필요한 컴포넌트만을 렌더링하여 빠른 페이지 전환을 가능하게 합니다.

### 2. Redux를 사용하여 애플리케이션의 상태 관리를 하셨을 것입니다. 어떤 상태들을 Redux로 관리하셨나요? 그 상태 값을 Redux를 통해 관리함으로 얻은 이점은 무엇이었나요?

- todo의 정보(id, title, content, isDone)정보를 redux로 관리했습니다.
- 이러한 정보들을 global state로 관리함으로써,
  - `MainPage`컴포넌트에서 `TodoCard`의 props로 Todo의 데이터를 전달하지 않아도 되었습니다. (props drilling 해결)
  - TodoCard의 사용자 Action(삭제,완료)와 같은 함수를 통해, MainPage의 todoList의 상태를 관리하기 위해 `setter`함수를 전달할 필요가 없었습니다. (Lifting State Up 해결)

### 3. Redux의 reducer 함수가 애플리케이션 로직과 어떻게 상호작용하는지 설명해 주세요.

- reducer함수는, 애플리케이션과 redux-store의 중간에 위치합니다.
- dispatch함수에 의해 전달된 action객체를 통해 state의 변경을 실행하고, 변경된 state값을 store에 전달합니다.
- <img style="width:300px" src="https://blog.kakaocdn.net/dn/bn7DZD/btscjkyS3Bv/AkpuhUj1TYmS2K7vCuNUW0/img.gif"/>

### 4. CSS in JS 라이브러리 중 하나인 "styled component"를 사용했을 때의 이점은 많습니다.  CSS in JS가 제공하는 이점을 두 가지만 설명해 주세요.

1. **Dynamic Styling** : state값에 따른 UI렌더링이 가능합니다.
   - styled의 props를 통해 조건에 따른 스타일링이 가능합니다.
   - TypeScript와 함께 사용하면, 스타일의 타입 검사를 적용하여 컴파일 시점에 오류를 잡아낼 수 있습니다.
2. style재사용성
   - styled-component는 특정 element의 스타일을 감싸 만들기 때문에, 컴포넌트의 style을 독립적으로 관리하고 재사용하기 쉽습니다.
   - 이점 : 편리한 유지보수, 코드 가독성, 코드 재사용성

### 5. useEffect hook을 사용한 부분이 있다면, 왜 사용해야 했고, 해당 hook이 언제 실행되는지 설명해주세요.

- useEffect를 사용하지 않았지만, useEffect가 사용하는 경우는 아래와 같습니다.
  1. `componentDidMount 모방` API를 초기에 호출해야 할 때 :: 컴포넌트가 렌더링되기 전에 API를 호출한다면 API시간 만큼 렌더링이 지연됩니다.
     - 컴포넌트가 렌더링된 이후에 API를 호출하게 되면, API응답후 re-render가 발생하여 **총 2번의 렌더링이 발생**하게 됩니다.
     - 이는, API호출에 따른 렌더링의 지연보다 2번의 리렌더링이 적합하다고 판단되기에, 렌더링이 발생한 이후에 API를 호출하곤 합니다.
  2. `componentDidUpdate 모방` 특정 변화에 따른 로직이 필요할 때 :: useEffect는 depency배열에 state를 추가하여, 특정 state의 변화가 일어났을 때마다 로직이 필요한 경우에 사용될 수 있습니다.
  3. `componentWillUnmount 모방`더 이상 필요하지 않은 데이터 연결 해제 :: 컴포넌트가 화면에서 사라졌을 때 setInterval, setTimeout과 같은 함수의 취소가 필요한 경우, `cleanup`함수를 통해 이를 취소/방지할 수 있습니다.

## 프로젝트 환경

- ⚙️ React, Vite, yarn
- 🔮Tailwind, styled-component

```
// 프로젝트 시작
yarn
yarn dev
```
