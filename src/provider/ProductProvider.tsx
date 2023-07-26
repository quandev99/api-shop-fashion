import { createContext, useReducer } from "react";
import { ProductReducer } from "../store/ProductReducer";

export const ProductContext = createContext({} as any);

type Prop = {
    children: React.ReactNode
}

const initialState = {
    products: []
};

const ProductProvider = ({ children }: Prop) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-unsafe-assignment
    const [state, dispatch] = useReducer(ProductReducer, initialState);
    return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>
    );
};

export default ProductProvider;