import { createContext, useReducer } from "react";
import { CategoryReducer } from "../store/CategoryReducer";

export const CategoryContext = createContext({} as any);

type Prop = {
    children: React.ReactNode
}

const initialState = {
    categories: []
};

const CategoryProvider = ({ children }: Prop) => {
    const [state, dispatch] = useReducer(CategoryReducer, initialState);
    return (
        <CategoryContext.Provider value={{ state, dispatch }}>{children}</CategoryContext.Provider>
    );
};

export default CategoryProvider;