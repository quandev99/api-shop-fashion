import { Routes, Route } from "react-router-dom";

import ClientLayout from "./layout/ClientLayout";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ProductList from "./pages/admin/product/ProductList";
import ProductAdd from "./pages/admin/product/ProductAdd";
import ProductUpdate from "./pages/admin/product/ProductUpdate";
import CategoryList from "./pages/admin/category/CategoryList";
import CategoryAdd from "./pages/admin/category/CategoryAdd";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
import UserList from "./pages/admin/user/UserList";
import UserUpdate from "./pages/admin/user/UserUpdate";
import HomePage from "./pages/client/HomePage";
import ProductPage from "./pages/client/ProductPage";
import ProductDetail from "./pages/client/ProductDetail";
import SigninPage from "./pages/auth/SigninPage";
import SignupPage from "./pages/auth/SignupPage";
import NotfoundPage from "./pages/client/NotfoundPage";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CategoryPage from "./pages/client/CategoryPage";
import CategoryDetail from "./pages/client/CategoryDetail";

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <Routes>
        {/* CLIENT */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductPage />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="categories">
            <Route index element={<CategoryPage />} />
            <Route path=":categoryId/products" element={<CategoryDetail />} />
          </Route>

          {/* AUTH */}
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />

          {/* NOT FOUND PAGE */}
          <Route path="*" element={<NotfoundPage />} />
        </Route>

        {/* ADMIN */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path="add" element={<ProductAdd />} />
            <Route path=":id/update" element={<ProductUpdate />} />
          </Route>
          <Route path="categories">
            <Route index element={<CategoryList />} />
            <Route path="add" element={<CategoryAdd />} />
            <Route path=":id/update" element={<CategoryUpdate />} />
          </Route>
          <Route path="users">
            <Route index element={<UserList />} />
            <Route path=":id/update" element={<UserUpdate />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
