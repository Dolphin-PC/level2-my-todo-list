import { TStore } from "@/redux/config/configStore";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const todo = useSelector((state: TStore) =>
    state.todos.find((e) => e.id === Number(id))
  );

  if (!todo) return <div>Todo Not Found</div>;

  return (
    <div className="flex flex-col gap-5 border-solid border-2 m-5 p-5">
      <div className="flex justify-between">
        <small>ID {todo.id}</small>
        <button onClick={() => navigate("/")}>이전으로</button>
      </div>
      <h3 className="text-3xl">{todo.title}</h3>
      <p>{todo.content}</p>
    </div>
  );
};

export default DetailPage;
