import { useParams, useHistory } from "react-router-dom";
import { useRef, useState } from "react";
import { removeTodoItem, putTodoItem } from "../store/api-actions";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";

const TodoDetail = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const titleInput = useRef();
  const bodyInput = useRef();

  const id = params.id;
  const todoList = useSelector((state) => state.api.todoList);
  const item = todoList.data.filter((item) => item._id === id);
  console.log("todo-detail " + item[0].title + item[0].body);

  const updateItem = (event, title, body) => {
    event.preventDefault();
    console.log("in todo-detail " + title, body)
    dispatch(putTodoItem(id, title, body));
    history.push("/todo-list");
  };
  return (
   
      <TodoForm
        initialValues={{ title: item[0].title, body: item[0].body }}
        id={id}
        onFormSubmit="Update"
        btnText="Update"
      />
    
  );
};

export default TodoDetail;
