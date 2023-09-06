import Button from "../Button";
import useUpdateApi from "../../hooks/useUpdateApi";
import useDeleteApi from "../../hooks/useDeleteApi";

const Todo = ({ todo, setTaskList }) => {
  const { updateTask } = useUpdateApi();
  const { deleteTask } = useDeleteApi();
  const handleCompleteTodo = async (id) => {
    try {
      const res = await updateTask("/todos/updateComplete", id);
      const { data } = res.data;
      setTaskList([...data] || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUndoTodo = async (id) => {
    try {
      if (todo.isCompleted === false) return;
      const res = await updateTask("/todos/undoComplete", id);
      const { data } = res.data;
      setTaskList([...data] || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveTodo = async (id) => {
    try {
      const res = await deleteTask("/todos/deleteTodo", id);
      const { data } = res.data;
      setTaskList([...data] || []);
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
