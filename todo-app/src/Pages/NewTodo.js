import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tryLocalLogin } from "../store/user-actions";
import TodoForm from "../components/TodoForm";

const NewTodo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tryLocalLogin());
  }, []);
  return (
    <div>
      <TodoForm
        initialValues={{ title: "", id: "" }}
        onFormSubmit="Create"
        bntText="Save"
      />
    </div>
  );
};

export default NewTodo;
