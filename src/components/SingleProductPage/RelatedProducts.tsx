import { AiOutlineShop } from "react-icons/ai";
import { useGetRelatedBooksQuery } from "../../store/api";
import { Book } from "../../types/cart.types";
import { relatedBooksBreakpoints } from "../../utils/slider.config";
import SingleProductCard from "../ShopPage/SingleProductCard";
import RelatedProductCardSkeleton from "./RelatedProductsCardSkeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export function RelatedProducts({ book }: { book: Book }) {
  const { data, error, isLoading, isFetching } = useGetRelatedBooksQuery(book._id);
  if (isLoading) return <RelatedProductCardSkeleton />;
  if (error) return <div>Failed to load</div>;
  const relatedBooks = data.data;
  return (
    <>
      <div className="bg-white pb-[50px] pt-[10px]">
        <div className="px-[15px] md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full mx-auto">
          <div className="mb-10">
            <span className="text-light-primary font-bold flex items-center mb-[10px]">
              <div className="bg-light-primary rounded-full flex items-center justify-center text-white p-1 mr-3">
                <AiOutlineShop />
              </div>
              Related
            </span>
            <h2 className="text-[26px] lg:text-[36px] text-heading font-bold mb-[30px]">
              Related Products
            </h2>
            {relatedBooks ? (
              <Swiper
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[]}
              breakpoints={relatedBooksBreakpoints}
              className="related-products-swiper"
            >
              {relatedBooks.map((book: Book) => (
                <SwiperSlide key={book._id}>
                  <SingleProductCard key={book._id} product={book} />
                </SwiperSlide>
              ))}
            </Swiper>
            ) : (
              <div className="flex justify-between w-full animate-pulse">
                <RelatedProductCardSkeleton />
                <RelatedProductCardSkeleton />
                <RelatedProductCardSkeleton />
                <RelatedProductCardSkeleton />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
