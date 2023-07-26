import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../../provider/CategoryProvider";
import { deleteCategory, getAllCategory } from "../../../api/Category";
import { toast } from'react-toastify' 
const CategoryList = () => {
    const { state, dispatch } = useContext(CategoryContext) as any;

    useEffect(() => {
        (async () => {
            try {
                const data = await getAllCategory();
                const category = data.data.CategoryResponse;
                dispatch({ type: "FETCH_CATEGORY", payload: category });
            } catch (error: any) {
                alert(error.response.data.message);
            }
        })();

    }, [dispatch]);

    const onHandleDelete = async (_id: string) => {
        const confirm = window.confirm("Bạn có chắc muốn xóa");
        if (confirm) {
            try {
                const data = await deleteCategory(_id);
                const id = data.data.category._id;
                toast.success(data.data.message)
                dispatch({ type: "DELETE_CATEGORY", payload: id })
            } catch (error:any) {
                toast.error(error.response.data.message)
            }
        }
    };
    return (
        <div>
            <Link to="/admin/categories/add" className="bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-700 duration-200">THÊM DANH MỤC</Link>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
                <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead
                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-center">
                            <th scope="col" className="px-6 py-3">Tên danh mục</th>
                            <th scope="col" className="px-6 py-3">Ảnh</th>
                            <th scope="col" className="px-6 py-3">Ngày tạo</th>
                            <th scope="col" className="px-6 py-3">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {state?.docs?.map((item: any) => {
                            return (
                                <tr key={item._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.category_name}
                                    </td>
                                    <td className="px-6 py-4 w-[150px] text-center">
                                        <img className="p-0 w-full"
                                            src={item.category_images}
                                            alt="" />
                                    </td>
                                    <td scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.createdAt}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => onHandleDelete(item._id)}
                                            className="font-medium text-red-400 text-[20px] duration-100 hover:text-red-600 hover:underline"><i
                                                className="fa-solid fa-trash"></i></button>
                                        <Link to={`/admin/categories/${item._id}/update`}
                                            className="font-medium text-yellow-400 text-[20px] duration-100 hover:text-yellow-600 hover:underline">
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryList;