import "./App.css";
import Todo from "../Todo/Todo";
import TodoForm from "../Todo/TodoForm";
import useFetchApi from "../../hooks/useFetchApi.js";

function App() {
  const { taskList, setTaskList } = useFetchApi("/todos");

  return (
    <div className="app">
      <div className="todo-list">
        {taskList.map((todo, index) => (
          <Todo key={index} todo={todo} setTaskList={setTaskList} />
        ))}
        <TodoForm setTaskList={setTaskList} />
      </div>
    </div>
  );
}

export default App;
