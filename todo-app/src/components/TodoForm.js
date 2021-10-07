import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  useState, useRef } from "react";
import { putTodoItem, postTodoItem } from "../store/todo-actions";
import MDEditor from '@uiw/react-md-editor';

const TodoForm = ({ initialValues, id, onFormSubmit, btnText }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [body, setBody] = useState(initialValues.body);

  console.log(body);

  const titleInput = useRef();
  const bodyInput = useRef()

 

  //const [markDownBody, setMarkDownBody] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
 

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
    /*const splitContent = body.split("\n");
    const markDown = splitContent.map((item) =>  {
        return ('* ' + item);
    })
    
    let newString = "" 
    
    splitContent.forEach(item => {
      newString += ('* ' + item + '\n');
    })

    console.log(newString);
    //console.log(markDown);
   setMarkDownBody(newString);
    */
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const titleFinal = titleInput.current.value;
    const splitContent = bodyInput.current.value.split("\n");
    let markDownBody = "";

    splitContent.forEach(item => {
      markDownBody += ('* ' + item + '\n');
    })

  
    console.log(markDownBody);

    if (onFormSubmit === "Update") {
      dispatch(putTodoItem(id, titleFinal, markDownBody));
    }
    else{
      dispatch(postTodoItem(titleFinal, markDownBody))
    }
    history.push("/todo-list");
  };
  return (
    <div className="p-6 max-w-xs mx-auto bg-white rounded-xl shadow-md items-center space-x-4">
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
      <textarea
        name="body"
        id="body"
        onChange={bodyChangeHandler}
        ref={bodyInput}
        className="m-2 p-2 border-2 rounded-lg"
        value={body}
      ></textarea>

      <input
        className="py-2 px-4 m-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
        type="submit"
        value={btnText}
      />
    </form>
    </div>
  );
};

export default TodoForm;
