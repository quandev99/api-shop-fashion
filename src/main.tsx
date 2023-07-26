import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./provider/ProductProvider.tsx";
import CategoryProvider from "./provider/CategoryProvider.tsx";
import AuthProvider from "./provider/AuthProvider.tsx";
import { ToastContainer } from "react-toastify";
import CommentProvider from "./provider/CommentProvider.tsx";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <CommentProvider>
          <CategoryProvider>
            <App />
            <ToastContainer />
          </CategoryProvider>
        </CommentProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>
);
