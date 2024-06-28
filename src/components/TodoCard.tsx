import React, { ReactNode } from "react";
import Button from "./Button";
import { TTodo } from "@/pages/MainPage";

type TProps = {
  todo: TTodo;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
};

const TodoCard = (props: TProps): ReactNode => {
  const { todo, onToggleTodo, onDeleteTodo } = props;

  return (
    <div
      key={todo.id}
      className="w-2/6 p-3 border-solid border-2 border-green-800 rounded-lg"
    >
      <h3 className="text-xl font-bold">{todo.title}</h3>
      <p>{todo.content}</p>

      <div className="flex gap-3">
        <div className="flex-1" onClick={() => onDeleteTodo(todo.id)}>
          <Button className="border-solid border-2 border-red-500">
            삭제하기
          </Button>
        </div>

        <div className="flex-1" onClick={() => onToggleTodo(todo.id)}>
          <Button className="border-solid border-2 border-green-500">
            {todo.isDone ? "취소" : "완료"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoCard);
