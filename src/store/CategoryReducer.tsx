
export const CategoryReducer = (state: any, action: any) => {
    switch (action.type) {
        case "FETCH_CATEGORY":
            return state.categories = action.payload;
        case "ADD_CATEGORY":
            return { ...state.categories, categories: [...state.docs, action.payload] }
        case "DELETE_CATEGORY":
            return { ...state.categories, docs: state.docs.filter((item: any) => item._id !== action.payload) }
        case "UPDATE_CATEGORY":
            const id1 = action.payload._id;
            console.log(id1);
            return state.categories = state.docs.map((item: any) => item._id === id1 ? id1 : item)
        default:
            return state
    }
}