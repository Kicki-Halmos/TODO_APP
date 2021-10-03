import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";
import NewTodo from "./pages/NewTodo";
import Nav from './components/Nav'

function App() {
  return (
    <Fragment>
    <Nav />
    <div className="container p-6">
      <div className="mt-9">
      
      <Switch>
        <Route path="/" exact>
          <Redirect to="/todo-list" />
        </Route>
        <Route path="/todo-list" exact>
          <TodoList />
        </Route>
        <Route path="/todo-list/:id">
          <TodoDetail />
        </Route>
        <Route path="/new-todo">
          <NewTodo />
        </Route>
        <Route path="*">
          <h1>Not Found</h1>
        </Route>
      </Switch>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
