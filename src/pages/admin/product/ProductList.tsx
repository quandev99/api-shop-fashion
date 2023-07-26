
import { Key, useContext, useEffect } from "react"
import { Link } from "react-router-dom"

import { ProductContext } from "../../../provider/ProductProvider"
import { deleteProduct, getAllProducts } from "../../../api/Product"
import { IProduct } from "../../../interface/Product"
import { toast } from "react-toastify"

const ProductList = () => {

    const { state, dispatch } = useContext(ProductContext)
    useEffect(() => {
        (async () => {
            try {
                const data = await getAllProducts();
                if (data) {
                    const productData = data.data.productResponse
                    dispatch({
                        type: "FETCH_PRODUCT",
                        payload: productData
                    })
                } else {
                    toast.error(data);
                }
            } catch (error: any) {
                toast.error(error.response.data.message);
            }
        })()
    }, [dispatch])

    const RemoveProduct = async (_id: string) => {
        const confirm = window.confirm('Bạn có chắc chắn muốn xóa')
        if (confirm) {
            try {
                const data = await deleteProduct(_id);
                if (data) {
                    dispatch({
                        type: "REMOVE_PRODUCT",
                        payload: data
                    })
                    toast.success(data.data.message);

                } else {
                    toast.error(data);
                }
            } catch (error: any) {
                toast.error(error.response.data.message);
            }
        }
    }

    return (
        <div>
            <Link to="/admin/products/add"
                className="bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-700 duration-200">THÊM SẢN PHẨM</Link>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">

                <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead
                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-center">
                            <th scope="col" className="px-6 py-3 w-[30px]">Id</th>
                            <th scope="col" className="px-6 py-3">Tên</th>
                            <th scope="col" className="px-6 py-3">Ảnh</th>
                            <th scope="col" className="px-6 py-3">Giá</th>
                            <th scope="col" className="px-2 py-3">Size</th>
                            <th scope="col" className="px-6 py-3">Màu</th>
                            <th scope="col" className="px-2 py-3">Số lượng</th>
                            <th scope="col" className="px-6 py-3">Giảm giá</th>
                            <th scope="col" className="px-6 py-3">Mô tả ngắn</th>
                            {/* <th scope="col" className="px-6 py-3">Mô tả dài</th> */}
                            <th scope="col" className="px-6 py-3">Thời gian tạo</th>

                            <th scope="col" className="px-6 py-3">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">

                        {state?.docs?.map((product: IProduct, index: Key | null | undefined) => {
                            return (

                                <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <td className="px-6 py-4">{index}</td>
                                    <td scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product?.product_name.length > 10 ? product?.product_name?.slice(0, 10).concat("...") : product?.product_name?.slice(0, 15).concat("...")}
                                    </td>
                                    <td className="px-6 py-4 w-[130px] text-center">
                                        <img className="p-0"
                                            src={product?.product_images}
                                            alt="" />
                                    </td>
                                    <td className="px-6 py-4">{product?.product_price} đ</td>
                                    <td className="px-2 py-4">{product?.product_size}</td>
                                    <td className="px-6 py-4">{product?.product_color}</td>
                                    <td className="px-2 py-4">{product?.product_quantity}</td>
                                    <td className="px-6 py-4">{product?.product_discount}</td>
                                    <td className="px-6 py-4">{product?.product_description_sort.slice(0, 15).concat("...")}</td>
                                    {/* <td className="px-6 py-4">{product?.product_description_long.slice(0, 15).concat("...")}</td> */}
                                    <td className="px-6 py-4">{product?.createdAt?.slice(0, 10)}</td>

                                    <td className="px-6 py-4">
                                        <Link to="" className=" text-black">
                                            <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <button onClick={() => dispatch(RemoveProduct(product._id as any))}
                                            className="font-medium text-red-400 text-[20px] duration-100 hover:text-red-600 hover:underline"><i
                                                className="fa-solid fa-trash"></i></button>

                                        <Link to={`/admin/products/${product._id}/update`}
                                            className="font-medium text-yellow-400 text-[20px] duration-100 hover:text-yellow-600 hover:underline">
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList