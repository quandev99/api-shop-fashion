export const CommentReducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_CommentByProduct":
      const { id, comment } = action.payload;
      state.comments = comment;
      console.log("FETCH_CommentByProduct", state.comments);
      return;
    case "ADD_Comment":
      console.log("ADD_Comment", action.payload);
      state.comments.push(action.payload);
      return;
    default:
      return state;
  }
};
