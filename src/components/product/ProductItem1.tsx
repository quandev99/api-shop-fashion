import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../interface/Product";

interface Props {
    product: IProduct;
}

const ProductItem1: React.FC<Props> = ({ product }) => {
    return (
        <div className="flex flex-col h-full p-3 bg-white rounded-lg select-none movie-cart">
            <Link to="" className="overflow-hidden rounded-md">
                <span className="absolute z-10 bg-yellow-300 px-3">a %</span>
                <img
                    src={product.product_images}
                    alt=""
                    className="w-full hover:scale-105 h-[220px] duration-300 transition-all  object-cover rounded-md mb-5"
                />
            </Link>
            <div className="flex flex-col flex-1 mt-4">
                <h5 className="mb-2 hover:text-secondary  duration-200 transition-all">
                    <Link to="">{product.product_name}</Link>
                </h5>
                <div className="flex items-center justify-between mb-10 text-sm ">
                    <span className="font-bold text-[#CD151C] text-[15px]">
                        {product.product_price.toLocaleString()} đ
                    </span>
                    <span>***</span>
                </div>
                <button className="w-full py-2 text-white  duration-300 transition-all  rounded-lg cursor-pointer hover:text-primary bg-[#fcaf17] hover:bg-white hover:border border-secondary ">
                    Xem chi tiết
                </button>
            </div>
        </div>
    );
};

export default ProductItem1;
