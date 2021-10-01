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

  if (todoList && todoList > 0) {
    console.log('todolist' + todoList.data);
  }

  return (
    <div className="grid grid-cols-4 gap-4" >
      {!todoList || todoList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        todoList.data.map((item) => {
          return (
            <TodoItem
              key={item._id}
              id={item._id}
              title={item.title}
              body={item.body}
            />
          );
        })
      )}
    </div>
  );
};

export default TodoList;
