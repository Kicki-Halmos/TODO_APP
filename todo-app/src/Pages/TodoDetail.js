import { useParams, useHistory } from "react-router-dom";
import { useRef } from "react";
import { removeTodoItem, putTodoItem } from "../store/api-actions";
import { useSelector, useDispatch } from "react-redux";

const TodoDetail = () => {
  const params = useParams();
  const history = useHistory()
  const dispatch = useDispatch();
  const titleInput = useRef();
  const bodyInput = useRef();

  const id = params.id;
  const todoList = useSelector((state) => state.api.todoList);
  const item = todoList.data.filter((item) => item._id === id);

  const deleteItem = () => {
    dispatch(removeTodoItem(id));
    history.push('/todo-list');
  };

  const updateItem = (event) => {
    event.preventDefault();
    const title = titleInput.current.value;
    const body = bodyInput.current.value;
    dispatch(putTodoItem(id, title, body));
    history.push('/todo-list');
  };
  return (
    <div className="p-6 max-w-xs mx-auto bg-white rounded-xl shadow-md items-center space-x-4">
      <form onSubmit={updateItem}>
        <input
          className="text-lg m-2 p-2 border-2 rounded-lg"
          type="text"
          name="title"
          id="title"
          value={item[0].title}
          ref={titleInput}
        />
        <textarea
          name="body"
          id="body"
          ref={bodyInput}
          className="m-2 p-2 border-2 rounded-lg"
        >
          {item[0].body}
        </textarea>

        <input
          className="py-2 px-4 m-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
          type="submit"
          value="Update"
        />
        <button
          className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
          type="button"
          onClick={deleteItem}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default TodoDetail;
