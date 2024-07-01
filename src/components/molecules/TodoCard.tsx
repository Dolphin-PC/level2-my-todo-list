import React, { ReactNode } from "react";
import Button from "../atom/Button";
import { deleteTodo, toggleTodo, TTodo } from "@/redux/modules/todos";
import { useDispatch } from "react-redux";

type TProps = {
  todo: TTodo;
};

const TodoCard = (props: TProps): ReactNode => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };
  const onToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div
      key={todo.id}
      className="flex flex-col gap-5 p-3 border-solid border-2 border-green-800 rounded-lg"
      style={{ flexBasis: "calc(33.333% - 1rem)", margin: "0.5rem" }}
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
