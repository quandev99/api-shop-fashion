import { ICategory } from "../interface/Category";
import { instance } from "./instance";
//api 
const getAllCategory = () => {
    return instance.get('/categories')
}
export const getAllCategories = (_keywords: string, _page: number) => {
    return instance.get(`/categories?_keywords=${_keywords}&_page=${_page}&_limit=10`)
}
const getCategoryById = (_id: string) => {
    return instance.get('/categories/' + _id)
}
const addCategory = (category: ICategory) => {
    return instance.post('/categories', category)
}
const deleteCategory = (_id: string) => {
    return instance.delete(`/categories/` + _id)
}
const getCategoryProducts = (categoryId: string) => {
    return instance.get(`/categories/${categoryId}/products`);
};

const updateCategory = (category: ICategory) => {
    return instance.put(`/categories/${category._id}`, category);
}
export { getAllCategory, getCategoryById, addCategory, deleteCategory, updateCategory, getCategoryProducts }
//     const { _id, ...data } = category;
//     return instance.put(`/categories/${_id}`, data);
// };
