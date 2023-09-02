import { useEffect, useState } from "react";
import "./App.css";
import Todo from "../Todo/Todo";
import TodoForm from "../Todo/TodoForm";
import TodoApis from "../../helpers/commonApis/todoListApi.js";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodoApis.getAllTodo()
      .then((res) => {
        const { data } = res.data;
        setTodos([...data]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} setTodos={setTodos} />
        ))}
        <TodoForm setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
