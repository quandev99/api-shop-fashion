export const ProductReducer = (state: any, action: any) => {
    switch (action.type) {
        case "FETCH_PRODUCT":
            return state.products = action.payload;
        case "ADD_PRODUCT":
            state.docs.push(action.payload);
            return 
        case "REMOVE_PRODUCT":
            const _id = action.payload;
            const id = _id.data.product._id; 
            const updatedDocs = state.docs.filter((item:any) => item._id !== id);
            return {
              ...state,
              docs: updatedDocs,
            };
      case "PRODUCT_CATEGORY":
          return (state.products = action.payload);
      case "DETAIL_PRODUCT":
           return (state.products = action.payload);
        default:
            return state
        
    }
}

