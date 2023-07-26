import { createContext, useReducer } from "react";
import { AuthReducer } from "../store/AuthReducer";
import { produce } from "immer";

export const AuthContext = createContext({} as any);

type Prop = {
    children: React.ReactNode
}

const initialState = {
    users: []
}

const AuthProvider = ({ children }: Prop) => {

    const [state, dispatch] = useReducer(produce(AuthReducer), initialState);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider