export type idType = number | string;
export type showingTypes = "all" | "active" | "completed";

export interface ITodo {
  id: idType;
  text: string;
  done: boolean;
}
