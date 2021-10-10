import { Fragment } from "react";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import history from "./utils/history";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";
import NewTodo from "./pages/NewTodo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";

function App() {
  return (
    <Fragment>
      <Nav />
      <div className="container p-6">
        <div className="mt-9">
          <Router history={history}>
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
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="*">
              <h1>Not Found</h1>
            </Route>
          </Switch>
          </Router>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
