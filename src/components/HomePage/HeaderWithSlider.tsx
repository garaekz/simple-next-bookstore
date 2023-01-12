import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { GoFlame } from "react-icons/go";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetFeaturedBooksQuery } from "../../store/api";
import { featuredSettings } from "../../utils/slider.config";
import { FeaturedProductCard } from "../FeaturedProductCard";
import { Book } from "../../types/cart.types";

export function HeaderWithSlider() {
  const { data, error, isLoading, isFetching } = useGetFeaturedBooksQuery({});
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;
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
        <Slider {...featuredSettings }>
          {featuredBooks.map((product: Book, index: number) => (
            <FeaturedProductCard
              key={index}
              product={product}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}
