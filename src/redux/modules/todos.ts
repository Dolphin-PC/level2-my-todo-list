export type TTodo = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};

type TTodoCreate = Omit<TTodo, "id">;

const initialState: TTodo[] = [
  {
    id: 1,
    title: "React 공부하기",
    content: "React의 기초부터 익히기",
    isDone: false,
  },
  {
    id: 2,
    title: "Redux 공부하기",
    content: "Redux의 기초부터 익히기",
    isDone: false,
  },
  {
    id: 3,
    title: "Next.js 공부하기",
    content: "Next.js의 기초부터 익히기",
    isDone: false,
  },
];

// Action
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const UPDATE_TODO = "todos/UPDATE_TODO";

export const addTodo = (todo: TTodoCreate) => {
  const id = Math.floor(Math.random() * 1000000);

  return {
    type: ADD_TODO,
    payload: { ...todo, id },
  };
};

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodo = (todo: TTodo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

type TAction = {
  type:
    | typeof ADD_TODO
    | typeof TOGGLE_TODO
    | typeof DELETE_TODO
    | typeof UPDATE_TODO;
  payload: TTodo | number;
};

// Reducer
export const todos = (state = initialState, action: TAction): TTodo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload as TTodo];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case UPDATE_TODO:
      return state.map((todo) => {
        const { id, content, title } = action.payload as TTodo;
        if (todo.id === id) {
          return {
            ...todo,
            title: title,
            content: content,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
