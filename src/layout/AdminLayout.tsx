import { Link, Outlet } from "react-router-dom"

const AdminLayout = () => {
    return (
        <div>
            <div className="container">
                <div className="flex">
                    <header className="max-w-[230px] w-[100%] bg-white ml-10 mt-10 rounded-xl shadow-md">
                        <nav>
                            <div className="w-[70px] mx-auto">
                                <img width="70" src="https://fptshop.com.vn/cua-hang/mobiles/images/img/logo-mb.png" alt="" />
                            </div>
                            <ul className="w-[100%]  mt-3">
                                <li className="">
                                    <Link to="/admin"
                                        className="flex w-full py-3 px-4 hover:bg-red-300 hover:text-white  duration-200 items-center">
                                        <i className="fa-solid fa-database mr-3"></i>
                                        <h1 className="text-[20px]">Bảng điều khiển</h1>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/admin/products"
                                        className="flex w-full py-3 px-4 hover:bg-red-300 hover:text-white  duration-200 items-center">
                                        <i className="fa-brands fa-product-hunt  mr-3"></i>
                                        <h1 className="text-[20px]">Sản phẩm</h1>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/admin/categories"
                                        className="flex w-full py-3 px-4 hover:bg-red-300 hover:text-white  duration-200 items-center">
                                        <i className="fa-solid fa-list mr-3"></i>
                                        <h1 className="text-[20px]">Danh mục</h1>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/admin/comments"
                                        className="flex w-full py-3 px-4 hover:bg-red-300 hover:text-white  duration-200 items-center">
                                        <i className="fa-solid fa-comment  mr-3"></i>
                                        <h1 className="text-[20px]">Bình luận</h1>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/admin/users"
                                        className="flex w-full py-3 px-4 hover:bg-red-300 hover:text-white  duration-200 items-center">
                                        <i className="fa-solid fa-user  mr-3"></i>
                                        <h1 className="text-[20px]">Tài khoản</h1>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/admin/cart"
                                        className="flex w-full py-3 px-4 hover:bg-red-300 hover:text-white  duration-200 items-center">
                                        <i className="fa-solid fa-cart-shopping  mr-3"></i>
                                        <h1 className="text-[20px]">Giỏ hàng</h1>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/admin/statistical"
                                        className="flex w-full py-3 px-4 hover:bg-red-300 hover:text-white  duration-200 items-center">
                                        <i className="fa-solid fa-chart-simple  mr-3"></i>
                                        <h1 className="text-[20px]">Thống kê</h1>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <section className="w-full mt-10 max-w-[1500px]">
                        <div className="flex justify-between items-center w-[100%] px-10">
                            <h1 className="text-[25px]">Dash board</h1>
                            <input type="text" placeholder="Search"
                                className="px-10 w-[500px] py-3 text-[20px] rounded-full border outline-none" />
                            <div className="flex items-center gap-5">
                                <img className="rounded-full h-[70px] w-[70px]"
                                    src="https://res.cloudinary.com/djlylbhrb/image/upload/v1684247943/cld-sample.jpg" alt="" />
                                <div>
                                    <h1 className="font-bold">Đào Minh ngọc</h1>
                                    <p>ngoc@gmail.com</p>
                                    <p>Admin</p>
                                </div>
                            </div>
                        </div>
                        <div className=" px-10 ">
                            <Outlet />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout