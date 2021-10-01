import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodoList } from "../store/api-actions";

const TodoList = (props) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.api.todoList);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  if (todoList && todoList > 0) {
    console.log(todoList.data);
  }

  return (
    <div>
      {!todoList || todoList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        todoList.data.map((item) => {
          return (
          <Link to={`/todo-list/${item._id}`}> 
          <p key={item._id}>{item.title}</p>
          </Link>
          )
         
        })
      )}
    </div>
  );
 
};

export default TodoList;
