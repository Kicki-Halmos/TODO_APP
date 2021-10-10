import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {  useDispatch } from "react-redux";
import { tryLocalLogin } from "../store/user-actions";
import TodoForm from "../components/TodoForm";
import { getTodoitem } from "../api/api";

const TodoDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const id = params.id;
  const [item, setItem] = useState();

  useEffect(() => {
    dispatch(tryLocalLogin());
  });

  useEffect(() => {
    async function fetchtodoItem() {
      const response = await getTodoitem(id);
      
      const clearMarkdown = response.data.data.body.replaceAll('*', '');
      console.log(clearMarkdown);
      const todoItem = {
        title: response.data.data.title,
        body: clearMarkdown
      }
      setItem(todoItem);
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
