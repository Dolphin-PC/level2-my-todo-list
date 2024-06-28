import { ChangeEvent, FormEvent, useRef, useState } from "react";
import TodoCard from "./components/TodoCard";
import Layout from "./components/Layout";
import Button from "./components/Button";

export type TTodo = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};

function App() {
  const titleRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [todos, setTodos] = useState<TTodo[]>([]);

  const onAddTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!title || !content) return;

    const newTodo: TTodo = {
      id: todos.length + 1,
      title,
      content,
      isDone: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
    setContent("");

    titleRef.current?.focus();
  };

  const onToggleTodo = (id: number): void => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDeleteTodo = (id: number): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">📝Todo List📝</h1>
        <form
          onSubmit={onAddTodo}
          className="p-5 border border-gray-300 rounded-md shadow-md flex items-center justify-between bg-gray-300"
        >
          <div className="flex gap-3 items-center">
            <label htmlFor="title">제목</label>
            <input
              id="title"
              ref={titleRef}
              className="p-2 rounded-md"
              type="text"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />

            <label htmlFor="content">내용</label>
            <input
              id="content"
              type="text"
              className="p-2 rounded-md"
              value={content}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setContent(e.target.value)
              }
            />
          </div>
          <div>
            <Button className="bg-blue-300">추가하기</Button>
          </div>
        </form>

        <h2 className="text-xl font-bold">👨🏻‍💻Working..!👨🏻‍💻</h2>
        {todos
          .filter((e) => !e.isDone)
          .map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          ))}

        <h2 className="text-xl font-bold">🎉Done..!🎉</h2>
        {todos
          .filter((e) => e.isDone)
          .map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
      </div>
    </Layout>
  );
}

export default App;
