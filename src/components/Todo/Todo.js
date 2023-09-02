import Button from "../Button";
import TodoApis from "../../helpers/commonApis/todoListApi.js";

const Todo = ({ todo, setTodos }) => {
  const handleCompleteTodo = async (id) => {
    try {
      const res = await TodoApis.updateComplete(id);
      const { data } = res.data;
      setTodos([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUndoTodo = async (id) => {
    try {
      if (todo.isCompleted === false) return;
      const res = await TodoApis.undoComplete(id);
      const { data } = res.data;
      setTodos([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveTodo = async (id) => {
    try {
      const res = await TodoApis.removeTodos(id);
      const { data } = res.data;
      setTodos([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <Button
          isDisabled={todo.isCompleted}
          onClick={() => handleCompleteTodo(todo.id)}
        >
          Complete
        </Button>
        <Button onClick={() => handleUndoTodo(todo.id)}>Undo</Button>
        <Button onClick={() => handleRemoveTodo(todo.id)}>X</Button>
      </div>
    </div>
  );
};

export default Todo;
