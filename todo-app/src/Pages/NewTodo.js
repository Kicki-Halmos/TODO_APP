import TodoForm from "../components/TodoForm";

const NewTodo = () => {
  return (
  <div>
  <h2>New todo page</h2>
  <TodoForm initialValues={{title: "", id: ""}} onFormSubmit="Create" bntText = "Save"/>
  </div>
  )
};

export default NewTodo;
