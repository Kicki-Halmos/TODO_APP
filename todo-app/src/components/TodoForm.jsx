/* eslint-disable react/prop-types */
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { putTodoItem, postTodoItem } from '../store/todo-actions';

const TodoForm = ({
  initialValues, id, onFormSubmit, btnText,
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [body, setBody] = useState(initialValues.body);

  const titleInput = useRef();
  const bodyInput = useRef();

  const history = useHistory();
  const dispatch = useDispatch();

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  /* const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  }; */

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const titleFinal = titleInput.current.value.trim();

    if (onFormSubmit === 'Update') {
      dispatch(putTodoItem(id, titleFinal, body));
    } else {
      dispatch(postTodoItem(titleFinal, body));
    }
    history.push('/todo-list');
  };
  return (
    <div className="p-6 max-w-m mx-auto bg-white rounded-xl shadow-md items-center space-x-4">
      <form onSubmit={formSubmitHandler}>
        <input
          className="text-lg m-2 p-2 border-2 rounded-lg"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={titleChangeHandler}
          ref={titleInput}
        />
        <MDEditor
          name="body"
          id="body"
          onChange={setBody}
          ref={bodyInput}
          className="m-2 p-2 border-2 rounded-lg"
          value={body}
        />

        <input
          className="py-2 px-4 m-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 cursor-pointer"
          type="submit"
          value={btnText}
        />
      </form>
    </div>
  );
};

export default TodoForm;
