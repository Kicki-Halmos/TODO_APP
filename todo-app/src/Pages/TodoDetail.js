import { useParams, useHistory } from "react-router-dom";
import { useRef, useState } from "react";
import { removeTodoItem, putTodoItem } from "../store/api-actions";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";

const TodoDetail = () => {
  const params = useParams();

  const id = params.id;
  const todoList = useSelector((state) => state.api.todoList);
  const item = todoList.filter((item) => item._id === id);
  

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
