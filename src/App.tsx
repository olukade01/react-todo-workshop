import { useState } from "react";
import styled from "styled-components";
import TodoFooter from "./components/TodoFooter";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";
import { todoEntity } from "./store/todo.entity";
import { ITodo } from "./types";

const TodoWrapper = styled.div`
  width: 38rem;
  margin: 2rem auto;
`;

const Card = styled.div`
  box-shadow: ${(props) => props.theme.styles.boxShadow};
  background-color: white;
  position: relative;

  /* * {
    position: relative;
  } */
  :before,
  :after {
    position: absolute;
    content: "";
    background-color: white;
    border: 1px solid lightgray;
  }
  :before {
    width: 95%;
    bottom: -1rem;
    height: 1rem;
    left: 2.5%;
  }
  :after {
    width: 98%;
    left: 1%;
    height: 0.5rem;
    bottom: -0.5rem;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.lightred};
  font-size: 100px;
  line-height: 20px;
  text-align: center;
  font-weight: 100;
`;

const App = () => {
  const { items: todos } = todoEntity.use();

  return (
    <TodoWrapper>
      <Title>todos</Title>
      <Card>
        <TodoInput />
        <TodoItems />
        {todos.length > 0 && <TodoFooter />}
      </Card>
    </TodoWrapper>
  );
};

export default App;
