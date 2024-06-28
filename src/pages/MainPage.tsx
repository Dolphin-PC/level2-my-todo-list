import { useCallback, useState } from "react";
import Layout from "@/components/Layout";
import TodoCard from "@/components/TodoCard";
import TodoForm from "@/components/TodoForm";

export type TTodo = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};

const MainPage = (): React.ReactNode => {
  const [todos, setTodos] = useState<TTodo[]>([
    {
      id: 1,
      title: "React 공부하기",
      content: "React의 기초부터 익히기",
      isDone: false,
    },
    {
      id: 2,
      title: "TypeScript 공부하기",
      content: "TypeScript의 기초부터 익히기",
      isDone: false,
    },
    {
      id: 3,
      title: "Next.js 공부하기",
      content: "Next.js의 기초부터 익히기",
      isDone: false,
    },
  ]);

  const onToggleTodo = useCallback((id: number): void => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }, []);

  const onDeleteTodo = useCallback((id: number): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">📝Todo List📝</h1>
        <TodoForm todos={todos} setTodos={setTodos} />

        <h2 className="text-xl font-bold">👨🏻‍💻Working..!👨🏻‍💻</h2>
        <div className="flex flex-wrap">
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
        </div>

        <h2 className="text-xl font-bold">🎉Done..!🎉</h2>
        <div className="flex flex-wrap">
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
      </div>
    </Layout>
  );
};

export default MainPage;
