## 의문점

1. 커스텀 컴포넌트의 props

   - 기본 틀을 setting해놓고, 활용하는 화면에서 custom하게 하고 싶을 때, button의 property를 그대로 사용할 수 있는 효율적인 방법이 있을까요?
   - Button.tsx
   - 예) `<Button type="button" onClick={...}></Button>`

2. 현재 components폴더구조를 `atomic`하게 변경한다면, 아래 구조가 맞는 방법일까요?

   - atom (가장 기본적인 단위)
     - Button.tsx
     - Layout.tsx
   - molecules
     - TodoCard.tsx
   - template

     - TodoForm.tsx

   - 🤔 보통 이런 구조라고 하던데, `pages`를 `components`하위에 두는게 맞나요?

   ```
   src/
   ├── components/
   │   ├── atoms/
   │   │   ├── Button.js
   │   │   ├── Input.js
   │   │   └── ...
   │   ├── molecules/
   │   │   ├── Form.js
   │   │   ├── Card.js
   │   │   └── ...
   │   ├── organisms/
   │   │   ├── Header.js
   │   │   ├── Footer.js
   │   │   └── ...
   │   ├── templates/
   │   │   ├── HomeTemplate.js
   │   │   ├── AboutTemplate.js
   │   │   └── ...
   │   └── pages/
   │       ├── HomePage.js
   │       ├── AboutPage.js
   │       └── ...
   ├── assets/
   │   ├── images/
   │   ├── styles/
   │   └── ...
   ├── utils/
   ├── hooks/
   └── ...
   ```
