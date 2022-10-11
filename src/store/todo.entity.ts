import { entity, persistence } from "simpler-state";
import { idType, ITodo, showingTypes } from "../types";
import { generateId } from "../utils";

interface ITodoEntity {
  showing: showingTypes;
  items: ITodo[];
}

const defaultState: ITodoEntity = {
  showing: "all",
  items: [
    { id: 1, text: "Learn Typescript", done: true },
    { id: 2, text: "Learn React", done: true },
    { id: 3, text: "Learn Styled Components", done: false },
    { id: 4, text: "Learn Tailwind", done: false },
    { id: 5, text: "Learn GraphQL", done: false },
  ],
};

export const todoEntity = entity(defaultState, [persistence("todo")]);

// actions
export const addTodo = (text: string) =>
  todoEntity.set((state) => ({
    ...state,
    items: state.items.concat({ text, done: false, id: generateId() }),
  }));
export const removeTodo = (id: idType) =>
  todoEntity.set((state) => ({
    ...state,
    items: state.items.filter((item) => item.id !== id),
  }));
export const toggleTodo = (id: idType) =>
  todoEntity.set((state) => ({
    ...state,
    items: state.items.map((item) => {
      if (item.id === id) item.done = !item.done;
      return item;
    }),
  }));
export const clearCompleted = () =>
  todoEntity.set((state) => ({
    ...state,
    items: state.items.filter((item) => !item.done),
  }));
export const setShowing = (value: showingTypes) =>
  todoEntity.set((state) => ({
    ...state,
    showing: value,
  }));