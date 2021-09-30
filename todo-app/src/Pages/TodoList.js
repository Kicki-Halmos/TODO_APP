import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodoData } from "../store/api-actions";

const TodoList = (props) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.api.todoList);


  useEffect(() => {
    dispatch(fetchTodoData());
  }, [dispatch]);

  if(todoList && todoList > 0){
    console.log(todoList.data)
  } 

  return (
    <div>
      {!todoList || todoList.length === 0 ? <p>Loading...</p> : todoList.data.map((item) => {
        return (
        <p key={item._id}>{item.title}</p>
        )
      })}
    </div>
  );
};

export default TodoList;
