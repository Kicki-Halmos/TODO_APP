import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeTodoItem } from '../store/api-actions';

const TodoItem = (props) => {
  const history = useHistory();
  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(removeTodoItem(props.id));
    history.push('/todo-list');
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md items-start space-x-4 m-4">
    <Link to={`/todo-list/${props.id}`}>
    
      <p className="text-md font-semibold mb-2">{props.title}</p>
      <p className="text-sm">{props.body}</p>
      
  
    </Link>  
    <button
    className="py-2 px-8 mt-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
    type="button"
    onClick={deleteItem}
  >
    Delete
  </button>
  </div>
  );
};

export default TodoItem;