import { Link } from "react-router-dom";
import ProductItem from "../../components/product/ProductItem";
import { useEffect, useContext, useState } from "react";
import { ProductContext } from "../../provider/ProductProvider";
import { getAllProduct, getProductByCategoryID } from "../../api/Product";
import { IProduct } from "../../interface/Product";
import { CategoryContext } from "../../provider/CategoryProvider";
import { getAllCategory } from "../../api/Category";
import { ICategory } from "../../interface/Category";
const ProductPage = () => {
  /// context
  const { state, dispatch } = useContext(ProductContext);
  const { state: stateCategory, dispatch: dispatchCategory } =
    useContext(CategoryContext);
  // state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [productss, setProducts] = useState([]);
  const [keywords, setKeywords] = useState("");
  // Gọi hàm fetch data products
  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await getAllCategory();
      const categoryResponse = data.CategoryResponse;
      dispatchCategory({ type: "FETCH_CATEGORY", payload: categoryResponse });
    };
    fetchCategory();
  }, [dispatchCategory]);

  useEffect(() => {
    setKeywords("");
    const fetchProduct = async (keywords: any, page: number) => {
      const data = await getAllProduct(keywords, page);
      try {
        const productResponse = data.data.productResponse;
        dispatch({ type: "FETCH_PRODUCT", payload: productResponse });
        setProducts(productss);
        setCurrentPage(productResponse.page);
        setTotalPages(productResponse.totalPages);
        setTotalItems(totalItems);
        setPageSize(pageSize);
      } catch (error) {
        console.log("Error GetALL Product: ", error);
      }
    };
    fetchProduct(keywords, currentPage);
  }, [keywords, currentPage, dispatch]);
  const getProductByCategory = async (categoryId: any) => {
    try {
      const { data } = await getProductByCategoryID(categoryId);

      const productByCategory = data.productResponse;
      dispatch({ type: "PRODUCT_CATEGORY", payload: productByCategory });
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const products: IProduct[] = state.docs || [];
  return (
    <main className="product">
      <div className="product_heading page-container px-5">
        <ul className="flex flex-col items-center gap-x-1 mt-3 mb-8">
          <li className="text-sm font-semibold opacity-70 flex">
            <Link to="/" className="hover:text-black">
              Trang chủ
            </Link>
            <p className="px-2">/</p>
            <p>Sản phẩm</p>
          </li>
          <li className="text-xl font-semibold text-secondary ">
            <h1>BÁN CHẠY NHẤT CHO NAM</h1>
          </li>
        </ul>
      </div>
      <div className="product_content page-container px-5">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1 bg-white w-full">
            <div className="product_category mb-5">
              <h4 className="text-xl mb-5 ml-3 mt-3 font-bold">
                Loại sản phẩm
              </h4>
              <ul className="flex flex-wrap gap-2 ml-3">
                {stateCategory?.docs?.map((item: ICategory) => (
                  <li
                    key={item._id}
                    className="bg-[#F2F2F2] px-3 py-1 duration-300 transition-all text-[#7A7A9D] hover:bg-white hover:text-secondary hover:border hover:border-secondary rounded-md"
                    onClick={() => getProductByCategory(item._id)}
                  >
                    <Link to="">{item.category_name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="color_product mb-5">
              <h4 className="text-xl mb-5 ml-3 font-bold">Kích thước</h4>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-[#F2F2F2] ml-3 px-3 duration-300 transition-all text-[#7A7A9D] hover:bg-white hover:text-secondary hover:border hover:border-secondary rounded-md">
                  <Link to="">XS</Link>
                </li>
              </ul>
            </div>
            <div className="color_product mb-5">
              <h4 className="text-xl mb-5 ml-3 font-bold">Màu sắc</h4>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-[#F2F2F2] ml-3 px-3 duration-300 transition-all text-[#7A7A9D] hover:bg-white hover:text-secondary hover:border hover:border-secondary rounded-md">
                  <Link to="">Đen</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex items-center  py-3 justify-between">
              <span className="text-[#7A7A9D]">{products.length} sản phẩm</span>
              <div className="sort-cate-right">
                <label className="title mr-2">Sắp xếp theo</label>
                <select className="px-2 py-2 rounded outline-none hover:border-yellow-300 duration-300 transition-all border">
                  <option value="">Từ A {"->"} Z</option>
                  <option value="">Từ Z {"->"} A</option>
                  <option value="">Giá thấp đến cao</option>
                  <option value="">Giá từ cao đến thấp</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {products?.map((item) => (
                <ProductItem key={item._id} item={item}></ProductItem>
              ))}
            </div>
            <div className="col-span-4 py-2">
              <div className="col-span-4 py-2">
                <ul className="flex items-center justify-center gap-x-2">
                  <li className="px-3 py-1 border duration-300 transition-all border-[#7A7A9D] bg-white text-[#7A7A9D] hover:bg-secondary hover:text-white">
                    <button
                      onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                      disabled={currentPage === 1}
                    >
                      {"<"}
                    </button>
                  </li>
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <li
                      key={index + 1}
                      className={`px-3 py-1 border duration-300 transition-all border-[#7A7A9D] bg-white text-[#7A7A9D] hover:bg-secondary hover:text-white ${
                        index + 1 === currentPage
                          ? "bg-secondary text-black"
                          : ""
                      }`}
                    >
                      <button onClick={() => setCurrentPage(index + 1)}>
                        {index + 1}
                      </button>
                    </li>
                  ))}
                  <li className="px-3 py-1 border duration-300 transition-all border-[#7A7A9D] bg-white text-[#7A7A9D] hover:bg-secondary hover:text-white">
                    <button
                      onClick={() => setCurrentPage((nextPage) => nextPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      {">"}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
