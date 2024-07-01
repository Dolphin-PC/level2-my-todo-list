import { TStore } from "@/redux/config/configStore";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../atom/Button";
import { updateTodo } from "@/redux/modules/todos";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector((state: TStore) =>
    state.todos.find((e) => e.id === Number(id))
  );

  const [title, setTitle] = useState(todo?.title || "");
  const [content, setContent] = useState(todo?.content || "");
  const [isEdit, setIsEdit] = useState(false);

  const onUpdateTodo = () => {
    if (!todo) return;
    dispatch(
      updateTodo({
        ...todo,
        title,
        content,
      })
    );

    setIsEdit(false);
  };

  if (!todo) return <div>Todo Not Found</div>;

  return (
    <div className="flex flex-col gap-5 border-solid border-2 m-5 p-5">
      <div className="flex justify-between">
        <small>ID {todo.id}</small>
        <div className="flex gap-5">
          <button onClick={() => setIsEdit((prev) => !prev)}>✏️ 편집</button>
          <button onClick={() => navigate("/")}>◀️ 이전으로</button>
        </div>
      </div>
      {isEdit ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-solid border-2 "
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-solid border-2 "
          />
          <div onClick={onUpdateTodo}>
            <Button className="bg-green-300">💾 저장하기</Button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-3xl">{todo.title}</h3>
          <p>{todo.content}</p>
        </>
      )}
    </div>
  );
};

export default DetailPage;
