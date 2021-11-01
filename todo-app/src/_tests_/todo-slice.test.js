/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import todoSlice, { todoActions } from '../store/todo-slice';
import '@testing-library/jest-dom';

test('should return the initial state', () => {
  expect(todoSlice.reducer(undefined, {})).toEqual(
    {
      todoList: [],
    },
  );
});

test('should add a todo to an empty list', () => {
  const todoItem = {
    title: 'my todo',
    body: 'buy stuff',
  };
  expect(todoSlice.reducer(undefined, todoActions.addTodoItem({
    todoItem: {
      title: 'my todo',
      body: 'buy stuff',
    },
  }))).toEqual({
    todoList: [
      {
        title: 'my todo',
        body: 'buy stuff',
      }],
  });
});

test('should add a todo to an existing list', () => {
  const state = {
    todoList: [
      {
        title: 'my todo',
        body: 'buy stuff',
      },
    ],
  };

  expect(todoSlice.reducer(state, todoActions.addTodoItem({
    todoItem: {
      title: 'my new todo',
      body: 'buy records',
    },
  }))).toEqual({
    todoList: [
      {
        title: 'my todo',
        body: 'buy stuff',
      },
      {
        title: 'my new todo',
        body: 'buy records',
      },
    ],
  });
});

test('should get todoList', () => {
  const state = {
    todoList: [
      {
        title: 'my todo',
        body: 'buy stuff',
      },
      {
        title: 'my second todo',
        body: 'buy some more stuff',
      },
      {
        title: 'my third todo',
        body: 'buy even more stuff',
      },
    ],
  };

  expect(todoSlice.reducer(state, todoActions.getTodoList({
    todoList: [
      {
        title: 'my todo',
        body: 'buy stuff',
      },
      {
        title: 'my second todo',
        body: 'buy some more stuff',
      },
      {
        title: 'my third todo',
        body: 'buy even more stuff',
      },
    ],
  }))).toEqual({
    todoList: [
      {
        title: 'my todo',
        body: 'buy stuff',
      },
      {
        title: 'my second todo',
        body: 'buy some more stuff',
      },
      {
        title: 'my third todo',
        body: 'buy even more stuff',
      },
    ],
  });
});

test('should update a todo item', () => {
  const state = {
    todoList: [
      {
        _id: 0,
        title: 'my todo',
        body: 'buy stuff',
      },
      {
        _id: 1,
        title: 'my second todo',
        body: 'buy some more stuff',
      },
      {
        _id: 2,
        title: 'my third todo',
        body: 'buy even more stuff',
      },
    ],
  };

  expect(todoSlice.reducer(state, todoActions.updateTodoItem({
    updatedItem: {
      _id: 1,
      title: 'my best todo',
      body: 'buy records',
    },
  }))).toEqual({
    todoList: [
      {
        _id: 0,
        title: 'my todo',
        body: 'buy stuff',
      },
      {
        _id: 1,
        title: 'my best todo',
        body: 'buy records',
      },
      {
        _id: 2,
        title: 'my third todo',
        body: 'buy even more stuff',
      },
    ],
  });
});

test('should delete a todo-item', () => {
  const state = {
    todoList: [
      {
        _id: 0,
        title: 'my todo',
        body: 'buy stuff',
      },
      {
        _id: 1,
        title: 'my second todo',
        body: 'buy some more stuff',
      },
      {
        _id: 2,
        title: 'my third todo',
        body: 'buy even more stuff',
      },
    ],
  };

  expect(todoSlice.reducer(state, todoActions.deleteTodoItem({
    id: 1,
  }))).toEqual({
    todoList: [
      {
        _id: 0,
        title: 'my todo',
        body: 'buy stuff',
      },
      {
        _id: 2,
        title: 'my third todo',
        body: 'buy even more stuff',
      },
    ],
  });
});
