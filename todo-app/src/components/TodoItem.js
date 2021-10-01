import { Link } from 'react-router-dom';
import { removeTodoItem } from '../store/api-actions';

const TodoItem = (props) => {

  return (
    <Link to={`/todo-list/${props.id}`}>
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md items-start space-x-4 m-4">
      <p className="text-md font-semibold m-2">{props.title}</p>
      <p className="text-sm">{props.body}</p>
    </div>
    </Link>  
  );
};

export default TodoItem;