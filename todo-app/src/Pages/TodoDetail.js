import { useParams, useHistory } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { fetchTodoItem } from "../store/api-actions";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { getTodoitem } from "../api/api";

const TodoDetail = () => {
  const params = useParams();

  const id = params.id;
  const [item, setItem] = useState();

  useEffect(() => {
    async function fetchtodoItem() {
      const response = await getTodoitem(id);
      const todoItem = response.data;
      setItem(todoItem.data);
      item && console.log(item);
    }

    fetchtodoItem();
  }, [id]);

  return (
    <div>
      {!item ? (
        <div>Loading...</div>
      ) : (
        <TodoForm
          initialValues={{ title: item.title, body: item.body }}
          id={id}
          onFormSubmit="Update"
          btnText="Update"
        />
      )}
    </div>
  );
};

export default TodoDetail;
