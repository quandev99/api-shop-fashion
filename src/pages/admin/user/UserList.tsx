import { Link } from "react-router-dom"

const UserList = () => {
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">

                <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead
                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-center">
                            <th scope="col" className="px-6 py-3 w-[30px]">Id</th>
                            <th scope="col" className="px-6 py-3">Họ tên</th>
                            <th scope="col" className="px-6 py-3">Ảnh</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Số điện thoại</th>
                            <th scope="col" className="px-6 py-3">Địa chỉ</th>
                            <th scope="col" className="px-6 py-3">Giới tính</th>
                            <th scope="col" className="px-6 py-3">Trạng thái</th>
                            <th scope="col" className="px-6 py-3">Chức vụ</th>
                            <th scope="col" className="px-6 py-3">Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-6 py-4">1</td>
                            <td scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">2
                            </td>
                            <td className="px-6 py-4 w-[200px] text-center">
                                <img className="p-0"
                                    src="https://product.hstatic.net/200000571041/product/xanh-500x500_b204b865b41149e2bf4869a18e6777f1_grande.jpg"
                                    alt="" />
                            </td>
                            <td className="px-6 py-4">4</td>
                            <td className="px-6 py-4">5</td>
                            <td className="px-6 py-4">6</td>
                            <td className="px-6 py-4">6</td>
                            <td className="px-6 py-4">6</td>
                            <td className="px-6 py-4">6</td>
                            <td className="px-6 py-4">
                                <button
                                    className="font-medium text-red-400 text-[20px] duration-100 hover:text-red-600 hover:underline"><i
                                        className="fa-solid fa-trash"></i></button>
                                <Link to="/admin/users/:id/update"
                                    className="font-medium text-yellow-400 text-[20px] duration-100 hover:text-yellow-600 hover:underline">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList