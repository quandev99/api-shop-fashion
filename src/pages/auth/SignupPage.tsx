import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { SignupUser } from "../../api/Auth"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
const SignupPage = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const onHandleSubmit = async (value: any) => {
        try {
            const { data } = await SignupUser(value);
            if (data) {
                toast.success(data.message);
                navigate("/signin")
                dispatch({ type: "USER/SIGNUP", payload: data.user });
            }
        } catch (error: any) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className="bg-[url('https://bizweb.dktcdn.net/100/438/408/themes/915505/assets/bg_login.jpg?1690016531690')] py-12">
            <form action="" className="w-[600px] mx-auto py-10 px-[100px] bg-white" onSubmit={handleSubmit(onHandleSubmit)}>
                <p className="text-center mb-10">Chào mừng bạn đến với Yody!</p>
                <h1 className="text-center font-bold text-[30px]">ĐĂNG KÝ</h1>
                <div className="text-[16px] mt-5">
                    <div>
                        <input
                            type="text"
                            {...register("user_fullName")}
                            placeholder="Họ và tên"
                            className="w-full border outline-none rounded-sm px-5 py-2 mb-5 focus: duration-300 focus:border-b-secondary" />
                    </div>
                    <div>
                        <input
                            type="text"
                            {...register("user_phone")}
                            placeholder="Số điện thoại"
                            className="w-full border outline-none rounded-sm px-5 py-2 mb-5 focus: duration-300 focus:border-b-secondary" />
                    </div>
                    <div>
                        <input
                            type="email"
                            {...register("user_email")}
                            placeholder="Địa chỉ Email"
                            className="w-full border outline-none rounded-sm px-5 py-2 mb-5 focus: duration-300 focus:border-b-secondary" />
                    </div>
                    <div>
                        <input
                            {...register("user_password")}
                            type="password"
                            placeholder="Mật khẩu"
                            className="w-full border outline-none rounded-sm px-5 py-2 mb-5 focus:duration-300 focus:border-b-secondary" />
                    </div>
                    <div>
                        <input
                            {...register("user_confirmPassword")}
                            type="password"
                            placeholder="Mật khẩu"
                            className="w-full border outline-none rounded-sm px-5 py-2 mb-5 focus:duration-300 focus:border-b-secondary" />
                    </div>
                    <div className="text-center">
                        <button className="text-center w-full bg-[#ffb801] hover:bg-yellow-500 transition-all  duration-300 text-white py-2 rounded-sm mb-5">Đăng ký</button>
                    </div>
                    <div className="text-center">
                        <Link
                            to="#"
                            className="text-[#ffb801] hover:text-yellow-500 transition-all">Quên mật khẩu</Link>
                        <p className="mt-5 text-[17px] text-gray-700">Hoặc đăng nhập bằng</p>
                        <div className="flex items-center justify-center space-x-5 mt-5 mb-[80px]">
                            <Link
                                to=""
                                className="flex items-center space-x-2 border px-3 py-2 rounded-full">
                                <i className="fa-brands fa-google fa-bounce"></i>
                                <p>Google</p>
                            </Link>
                            <Link
                                to=""
                                className="flex items-center space-x-2 border px-3 py-2 rounded-full">
                                <i className="fa-brands fa-facebook fa-bounce"></i>
                                <p>Facebook</p>
                            </Link>
                        </div>
                        <div>
                            Bạn đã có tài khoản? <Link to="/signin" className="text-[#ffb801] hover:text-yellow-500 transition-all"> Đăng nhập ngay!</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignupPage