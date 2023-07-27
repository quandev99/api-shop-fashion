import { useEffect, useState } from "react";
import { getAllProduct } from "../../api/Product";
import { IProduct } from "../../interface/Product";
import ProductItem1 from "./ProductItem1";

const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProduct("", 0);
      setProducts(response.data.productResponse.docs);
      console.log(response.data.productResponse.docs);
    } catch (error) {
      console.log(error);
    }
  };

  const limitedProducts = products.slice(0, 10); // Lấy 10 sản phẩm đầu tiên

  return (
    <div className="grid grid-cols-5 gap-4">
      {limitedProducts.map((product) => (
        <div key={product._id} className="bg-white rounded-lg p-4">
          <ProductItem1 product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
