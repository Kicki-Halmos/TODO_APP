/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MDEditor from '@uiw/react-md-editor';
import { removeTodoItem } from '../store/todo-actions';

const TodoItem = (props) => {
  const dispatch = useDispatch();
  let lastEdited = '';
  if (props.lastEdited) {
    lastEdited = props.lastEdited.slice(0, 10);
  }
  const deleteItem = () => {
    dispatch(removeTodoItem(props.id));
  };

  return (
    <div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md items-start space-x-4 m-4 flex flex-col justify-between">
        <Link to={`/todo-list/${props.id}`}>
          <p className="text-md font-semibold mb-2">{props.title}</p>
          <MDEditor.Markdown source={props.body} className="text-sm" />

        </Link>
        <div>
          <p className="text-sm mt-4 text-gray-500">
            last edited:
            {' '}
            {lastEdited}
          </p>
          <button
            className="py-2 px-8 mt-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
            type="button"
            onClick={deleteItem}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
