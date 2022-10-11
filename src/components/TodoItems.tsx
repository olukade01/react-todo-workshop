import styled from "styled-components";
import { removeTodo, todoEntity, toggleTodo } from "../store/todo.entity";
import CheckIcon from "./icons/CheckIcon";
import CloseIcon from "./icons/CloseIcon";

const TodoItem = styled.div`
  border-bottom: ${(props) => props.theme.styles.borderBottom};
  padding: 1rem;
  display: flex;
  align-items: center;

  .remove {
    visibility: hidden;
  }
  :hover .remove {
    visibility: visible;
    cursor: pointer;
  }
`;

const IsComplete = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid grey;
`;

const TodoText = styled.span<{ inactive: boolean }>`
  font-size: 24px;
  line-height: 29px;
  margin-left: 1rem;
  flex: 1;
  color: ${(props) => (props.inactive ? "#d9d9d9" : props.theme.colors.grey)};
  text-decoration: ${(props) => (props.inactive ? "line-through" : "none")};
`;

const TodoItems = () => {
  const { items, showing } = todoEntity.get();

  const todos =         
    showing === "active"
      ? items.filter((item) => !item.done)
      : showing === "completed"
      ? items.filter((item) => item.done)
      : items;

  return (
    <>
      {todos.map((item) => (
        <TodoItem key={item.id}>
          <IsComplete onClick={() => toggleTodo(item.id)}>
            {item.done && <CheckIcon />}
          </IsComplete>
          <TodoText inactive={item.done}>{item.text}</TodoText>
          <CloseIcon className="remove" onClick={() => removeTodo(item.id)} />
        </TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
