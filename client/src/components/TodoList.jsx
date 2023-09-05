import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getAllTodos ,updateTodo } from "../redux/actions/todosAction";

const TodoList = () => {
  const dispatch = useDispatch();
  const { isLoading, todos, error, isLoadingPost, isLoadingDelete } =
    useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getAllTodos);
  }, [dispatch, isLoadingPost, isLoadingDelete]);
  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo({ todoId }));
  };
  const handelCompleteTodo = (todoId) =>{
        dispatch(updateTodo({todoId,status:"done"}))
  }
  return (
    <div className=" w-[70%] md:w-[80%] lg:w-[100%] my-5">
      {/* Loading & Error Redux State */}
      {isLoading && (
        <h2 className="text-white text-2xl text-center font-bold my-2">Loading ... !!!</h2>
      )}
      {error && (
        <h2 className="text-red-500 text-2xl font-bold my-2">
          Error: {error.message}
        </h2>
      )}
      <div className="flex flex-col items-center justify-center">
        {/* Todos List */}
        {todos.length === 0 ? (
          <h2 className="text-white text-2xl font-bold my-2">
            Sorry! No Todos Found.
          </h2>
        ) : (
         
        todos?.todos?.map(
            (todo) => (
                todo.status === 'done' ?( 
                    <div  key={todo._id} className="flex justify-between items-center bg-card-bg w-[90%] md:w-[80%] lg:w-[50%] p-5 rounded-sm my-1 shadow-md">
                    <div className="Title">
                    <h1 className="text-complete line-through text-4xl">{todo.title}</h1>
                    <h3 className="text-complete line-through">{todo.description}</h3>
                    </div>
                       <div className="Action button">
                           <button onClick={() => handleDeleteTodo(todo._id)} className="w-24 h-10 bg-white rounded-2xl text-red  border-2 border-red mx-2">Delete</button>
                       </div>
               </div>
                    ):(
            <div  key={todo._id} className="flex justify-between items-center bg-card-bg w-[90%] md:w-[80%] lg:w-[50%] p-5 rounded-sm my-1 shadow-md">
                 <div className="Title">
                 <h1 className="text-orange text-4xl">{todo.title}</h1>
                 <h3 className="text-white">{todo.description}</h3>
                 </div>
                    <div className="Action button">
                        <button onClick={() => handelCompleteTodo(todo._id)} className="w-24 h-10 bg-white rounded-2xl text-green  border-2 border-green mx-2">complete</button>
                        <button onClick={() => handleDeleteTodo(todo._id)} className="w-24 h-10 bg-white rounded-2xl text-red  border-2 border-red mx-2">Delete</button>
                    </div>
            </div>
                )
            )
            )
      
             
        )}
      </div>
    </div>
  );
};

export default TodoList;