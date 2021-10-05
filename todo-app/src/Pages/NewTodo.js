import TodoForm from "../components/TodoForm";

const NewTodo = () => {
  return (
    <div>
      <TodoForm
        initialValues={{ title: "", id: "" }}
        onFormSubmit="Create"
        bntText="Save"
      />
    </div>
  );
};

export default NewTodo;
