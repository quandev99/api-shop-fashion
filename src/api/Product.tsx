import { IProduct } from "../interface/Product";
import { instance } from "./instance";
//api
export const getAllProduct = (keywords: string, page: number) => {
  return instance.get(`/products?_keywords=${keywords}&_page=${page}`)
}

export const getAllProducts = () => {
  return instance.get(`/products`)
}

export const getProductById = (_id: string) => {
  return instance.get("/products/" + _id);
};

export const getProductByCategoryID = (_id: string) => {
  return instance.get("/products/categoryId/" + _id);
};
export const addProduct = (product: IProduct) => {
  return instance.post("/products", product);
};
export const deleteProduct = (_id: string) => {
  return instance.delete(`/products/` + _id);
};

export const updateProduct = (product: IProduct) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id, createdAt, updatedAt, slug, ...data } = product;
  return instance.put(`/products/${_id}`, data)
}

export const getProductSearch = (_keywords: string, _limit: number) => {
  return instance.get(`/products?_keywords=${_keywords}&_limit=${_limit}`);
}
