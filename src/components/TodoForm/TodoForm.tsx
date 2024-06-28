import { TTodo } from "@/pages/MainPage";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import Button from "../Button";

type TProps = {
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
  todos: TTodo[];
};

const TodoForm = (props: TProps) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null);

  const onAddTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!title || !content) return;

    const newTodo: TTodo = {
      id: props.todos.length + 1,
      title,
      content,
      isDone: false,
    };

    props.setTodos((prev) => [...prev, newTodo]);
    setTitle("");
    setContent("");

    titleRef.current?.focus();
  };

  return (
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
  );
};

export default TodoForm;
