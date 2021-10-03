import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodoList } from "../store/api-actions";
import TodoDetail from "./TodoDetail";
import TodoItem from "../components/TodoItem";

const TodoList = (props) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.api.todoList);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  if (todoList && todoList.length > 0) {
    console.log(todoList);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <Link to="/new-todo">
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md items-start space-x-4 m-4">
          <p className="py-14 px-2 text-green-600">Click to enter a new note</p>
        </div>
      </Link>

      {!todoList || todoList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        todoList.map((item) => {
          return (
            <TodoItem
              key={item._id}
              id={item._id}
              title={item.title}
              body={item.body}
              lastEdited={item.updatedAt}
            />
          );
        })
      )}
    </div>
  );
};

export default TodoList;
