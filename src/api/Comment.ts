import { IPostComment } from "../interface/Comment";
import { instance } from "./instance";
//api
export const getAllComments = () => {
  return instance.get(`/comments`);
};
export const getCommentByProduct = (productId: string) => {
  return instance.get(`/comments/${productId}`);
};

export const postComment = (comment: IPostComment) => {
  return instance.post(`/comments`, comment);
};
