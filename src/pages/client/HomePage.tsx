
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderHomePage from "../../components/slider/SliderHomePage";
import { v4 } from "uuid";
import ProductListCategory from "../../components/product/ProductListCategory";
const HomePage = () => {

  return (
    <>
      <main className="body">
        <section className="px-5 mb-10 overflow-hidden slider-home page-container">
          <Swiper
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            grabCursor={true}
            slidesPerView={"auto"}
            className="mySwiper "
          >
            {new Array(10).fill(0).map(() => (
              <SwiperSlide key={v4()}>
                <SliderHomePage key={v4()}></SliderHomePage>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className="px-5 mb-10 product-male page-container">
          <ProductListCategory categoryId="64b4f22643b1f1ef6da70c03" />

        </section>
        <section className="px-5 mb-10 product-male page-container">
          <ProductListCategory categoryId="64b4fa51242a568c6c4eb7bc" />
        </section>
        {/* <ProductList /> */}
      </main>
    </>
  );
};

// categoryId: truyền id của danh mục muốn hiển thị sản phẩm

export default HomePage;
