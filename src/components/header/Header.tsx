import { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../search";
import { AuthContext } from "../../provider/AuthProvider";
const Header = () => {
  const { state } = useContext(AuthContext);
  const userStr = localStorage.getItem("users");
  const user = userStr ? JSON.parse(userStr) : null;
  console.log(state);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <header className="header bg-[#fff] w-full shadow-lg">
      <div className="flex items-center justify-between px-5 pt-2 mb-2 page-container">
        <div className="flex items-center w-1/2 gap-x-5">
          <div>
            <img
              src="https://bizweb.dktcdn.net/100/438/408/themes/913235/assets/logo.svg?1689344089966"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full">
            <Search />
          </div>
        </div>
        <div className=" header-tell">
          <span className="text-xs font-medium">
            ĐẶT HÀNG TRỰC TUYẾN HOẶC GỌI CHO CHÚNG TÔI 0932-307-248
          </span>
        </div>
      </div>
      <nav className="flex items-center justify-between px-5 nav page-container">
        <ul className="flex items-center py-2 pb-2 font-medium capitalize">
          <li className="pr-3 transition-all hover:text-secondary hover:border-b-2 hover:border-b-secondary">
            <Link to="/" className="font-bold">
              Trang chủ
            </Link>
          </li>
          <li className="px-3 transition-all hover:text-secondary hover:border-b-2 hover:border-b-secondary">
            <Link to="/categories" className="font-bold ">
              Danh mục
            </Link>
          </li>
          <li className="px-3 transition-all hover:text-secondary hover:border-b-2 hover:border-b-secondary">
            <Link to="/products" className="font-bold ">
              Sản phẩm
            </Link>
          </li>
          <li className="px-3 transition-all hover:text-secondary hover:border-b-2 hover:border-b-secondary">
            <Link to="#" className="font-bold ">
              Giới thiệu
            </Link>
          </li>
          <li className="px-3 transition-all hover:text-secondary hover:border-b-2 hover:border-b-secondary">
            <Link to="#" className="font-bold ">
              Liên hệ
            </Link>
          </li>
          <li className="px-3 transition-all hover:text-secondary hover:border-b-2 hover:border-b-secondary">
            <Link to="#" className="font-bold ">
              Tin tức
            </Link>
          </li>
        </ul>
        <div className="flex cursor-pointer items-center gap-x-5">
          <div className="ml-2">
            <span className="relative mr-2 ">
              <span className=" hover:text-secondary transition-all">
                <i className="text-2xl fa-solid fa-cart-shopping"></i>
              </span>
              <span className="absolute text-center px-1 text-sm leading-4; rounded-[50%] top-1 left-[10px] bg-secondary -translate-y-full translate-x-2/4">
                0
              </span>
            </span>
            <span className=" hover:text-secondary transition-all">
              Giỏ hàng
            </span>
          </div>
          <div className="account menu-item">
            {user ? (
              <Link to="/signin">
                <img
                  width={20}
                  className="rounded-full"
                  src={user.user_avatar}
                  alt="Avata"
                />
              </Link>
            ) : (
              <Link to="/signin">
                <i className="fa-solid fa-user"></i>
              </Link>
            )}
            {user ? (
              <ul className="submenu">
                <li>
                  <Link to="">Thông tin tài khoản</Link>
                </li>
                <li>
                  <button onClick={logout}>Đăng xuất</button>
                </li>
              </ul>
            ) : (
              <ul className="submenu">
                <li>
                  <Link to="/signin">Đăng nhập</Link>
                </li>
                <li>
                  <Link to="/signup">Đăng ký</Link>
                </li>
              </ul>
            )}
            {user?.user_role === "admin" ? (
              <ul className="submenu">
                <li>
                  <Link to="">Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to="/admin">Trang quản trị</Link>
                </li>
                <li>
                  <button onClick={logout}>Đăng xuất</button>
                </li>
              </ul>
            ) : (
              <div className="cart"></div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
