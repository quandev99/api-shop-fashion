import { createContext, useReducer } from "react";
import { CommentReducer } from "../store/CommentReducer";
import { produce } from "immer";

export const CommentContext = createContext({} as any);

type Prop = {
  children: React.ReactNode;
};

const initialState = {
  comments: [],
};

const CommentProvider = ({ children }: Prop) => {
  const [state, dispatch] = useReducer(produce(CommentReducer), initialState);
  return (
    <CommentContext.Provider value={{ state, dispatch }}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;
