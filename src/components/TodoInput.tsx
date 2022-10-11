import styled from "styled-components";
import { addTodo } from "../store/todo.entity";

const TodoForm = styled.form`
  display: flex;
  padding: 0.5rem;
  background-color: white;
  border-bottom: ${(props) => props.theme.styles.borderBottom};

  input {
    flex: 1;
    padding: 1rem;
    outline: none;
    border: none;
    font-size: 24px;
    line-height: 34px;
    font-weight: 300;
    color: ${(props) => props.theme.colors.grey};
  }
`;

const TodoInput = () => {
  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newTodo = e.currentTarget.value;

    if (e.key === "Enter") {
      if (!newTodo.trim()) return;
      addTodo(newTodo);

      e.currentTarget.value = "";
    }
  };

  return (
    <TodoForm onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        onKeyPress={handleAddTodo}
        placeholder="What needs to be done?"
      />
    </TodoForm>
  );
};

export default TodoInput;
