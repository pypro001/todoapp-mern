import AddTodo from "./AddTodo";
import TodosList from "./TodoList";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="my-5 mt-20 text-4xl font-bold text-white">
          {" "}
          My Todos{" "}
        </h1>
      <AddTodo />
      <TodosList />
      </div>
    </div>
  );
};

export default HomePage;