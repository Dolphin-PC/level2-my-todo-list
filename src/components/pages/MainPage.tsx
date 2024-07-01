import TodoForm from "@/components/template/TodoForm";
import TodoCard from "@/components/molecules/TodoCard";
import { useSelector } from "react-redux";
import { TStore } from "@/redux/config/configStore";
import { ReactNode } from "react";

const MainPage = (): ReactNode => {
  const todos = useSelector((state: TStore) => state.todos);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">📝Todo List📝</h1>
      <TodoForm />

      <h2 className="text-xl font-bold">👨🏻‍💻Working..!👨🏻‍💻</h2>
      <div className="flex flex-wrap">
        {todos
          .filter((e) => !e.isDone)
          .map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
      </div>

      <h2 className="text-xl font-bold">🎉Done..!🎉</h2>
      <div className="flex flex-wrap">
        {todos
          .filter((e) => e.isDone)
          .map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
      </div>
    </div>
  );
};

export default MainPage;
