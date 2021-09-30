import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TodoList from "./Pages/TodoList";
import TodoDetail from "./Pages/TodoDetail";
import NewTodo from "./Pages/NewTodo";

function App() {
  return (
    <div className="container">
      <h1>This is the home page</h1>
      <Switch>
        <Route path="todo-list/:id">
          <TodoDetail />
        </Route>
        <Route path="/new-todo">
          <NewTodo />
        </Route>
        <Route path="/todo-list">
          <TodoList />
        </Route>
        <Route path="/">
          <Redirect to="/todo-list" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
