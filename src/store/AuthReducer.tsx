
export const AuthReducer = (state: any, action: any) => {
    switch (action.type) {
        case "USER/SIGNIN":
            state.users.push(action.payload)
            return;
        case "USER/SIGNUP":
            state.users.push(action.payload);
            break;
        default:
            return state;
    }
}