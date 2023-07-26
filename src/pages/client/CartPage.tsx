import { useState } from "react";


const CartPage = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    if (count <= 0) return;
    setCount((count) => count - 1);
  };
  return (
    <section className="cart my-5 ">
      <div className="page-container px-5">
        <div className="grid grid-cols-3 gap-x-5">
          <div className="cart_left col-span-2 bg-white p-4 rounded-t-md shadow-lg">
            <div className="cart-heading flex item center gap-x-5 mb-10">
              <span className="text-xl text-[#17191c] font-medium">
                Giỏ hàng
              </span>
              <span className="text-[18px] text-[#7A7A9D] font-medium">
                (2) <span>Sản phẩm</span>
              </span>
            </div>
            <table>
              <thead className="">
                <tr className="flex  items-center justify-between mb-5">
                  <th className="w-[400px]">Sản Phẩm</th>
                  <th className="">Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr className="flex justify-between ">
                  <td className=" mr-2">
                    <div className="flex gap-x-5">
                      <div className="h-120px">
                        <img
                          className="w-full h-full rounded-lg"
                          src="https://bizweb.dktcdn.net/thumb/compact/100/438/408/products/smm6015-tra-qam6049-den-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <h5>Áo Sơ Mi Nam Sợi Tre Dài Tay Quốc Dân</h5>
                        <div className="mt-auto mb-2">
                          <span>Trắng</span>
                          <span>/</span>
                          <span>L</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" font-semibold text-center  mr-2">399.000đ</td>
                  <td className="">
                    <div className="flex">
                      <button
                        onClick={handleDecrement}
                        className="w-10 h-10 text-[#7A7A9D] text-xl border border-gray-300 rounded-s"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={count}
                        name="quantity"
                        onChange={(e) => e.target.value}
                        id=""
                        className="inline-block  w-10 h-10 text-center border border-t-gray-300  text-[#7A7A9D] text-xl "
                      />

                      <button
                        onClick={handleIncrement}
                        className="w-10 h-10 border border-gray-300 rounded-r text-[#7A7A9D] text-xl"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="ml-2 font-semibold">5.187.000đ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cart_right col-span-1 bg-white shadow-lg">
            <div className="flex flex-col">
              <span className="text-[#17191C] bg-yellow-200 rounded-t-md block px-4 py-1 w-full ">
                Dùng mã giảm giá của YODY trong bước tiếp theo
              </span>
              <div className="flex py-5 mx-4">
                <div className="text-[#17191C] font-semibold">
                  Tổng đơn hàng (Tạm tính) :
                </div>
                <div className="ml-auto text-[#17191C] font-semibold">
                  5.187.000đ
                </div>
              </div>
              <div className="mx-4">
                <button className="w-full bg-secondary text-white rounded-lg text-xl px-4 h-14 inline-block">
                  Đặt hàng span (2)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
