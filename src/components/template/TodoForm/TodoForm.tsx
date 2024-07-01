import { addTodo } from "@/redux/modules/todos";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import Button from "../../atom/Button";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const onAddTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!title || !content) return;

    dispatch(
      addTodo({
        title,
        content,
        isDone: false,
      })
    );

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

export default React.memo(TodoForm);
