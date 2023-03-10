import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { GoFlame } from "react-icons/go";
import { useGetFeaturedBooksQuery } from "../../store/api";
import { featuredBreakpoints, featuredSettings } from "../../utils/slider.config";
import { FeaturedProductCard } from "../FeaturedProductCard";
import { Book } from "../../types/cart.types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export function HeaderWithSlider() {
  const { data, error, isLoading } = useGetFeaturedBooksQuery({});
  const featuredBooks = data?.data;
  return (
    <>
      <div className="w-full xl:w-1/2 mt-20">
        <div className="mb-[25px] xl:mb-0 xl:pr-20">
          <span className="text-secondary font-bold flex items-center mb-[16px] leading-none">
            <div className="bg-secondary rounded-full flex items-center justify-center text-white p-1 mr-3">
              <GoFlame />
            </div>
            A lit bookstore frontend made with React and Tailwind CSS
          </span>
          <h1 className="text-[34px] xl:text-[55px] mb-10 leading-[1.1] font-bold text-heading">
            Discover, try, test and love this bookstore frontend
          </h1>
          <div className="flex">
            <Link
              href={"/shop"}
              className="bg-white text-heading py-[12px] px-[25px] text-sm rounded-md relative inline-block z-[1] font-bold shadow-explore"
            >
              Know more <CgArrowLongRight className="inline-block ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/2">
        { error && <>Error: {error}</> }
        { isLoading && 
          <div className="flex animate-pulse pb-20 pt-[200px]">
            <div className="w-full h-[400px] bg-gray-200 rounded-md"></div>
            <div className="w-full h-[400px] bg-gray-200 rounded-md scale-125"></div>
            <div className="w-full h-[400px] bg-gray-200 rounded-md"></div>
          </div>
        }
        { featuredBooks && (
          <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={3}
          loop={true}
          centeredSlides={true}
          breakpoints={featuredBreakpoints}
          className="featured-slider"
        >
          { featuredBooks.map((product: Book, index: number) => (
            <SwiperSlide key={index}>
              <FeaturedProductCard key={index} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        )}
      </div>
    </>
  );
}
