import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { Book } from "../types/cart.types";

export function FeaturedProductCard({ product }: { product: Book }) {
  return (
    <>
    <div className="featured-product group scale-100 px-[15px] xl:px-0 xl:pt-20 xl:mb-10 shadow-featured my-5 relative duration-300 rounded-lg text-center before:w-full before:h-50px before:bg-black before:absolute before:left-0 before:top-1/2 before:blur-[100px] before:translate-y-[-50%]">
      {/* Thumbnail */}
      <div className="relative block">
      <div
          className="rounded-t-lg overflow-hidden block relative bg-gray-200 p-5 xl:p-2 h-[400px] xl:h-[250px] xl:mx-auto"
        >
          <Image
            src={product.cover}
            width={150}
            height={150}
            alt="product"
            className="rounded-t-lg h-full w-auto mx-auto object-center object-cover duration-300"
          />
        </div>
      </div>
      {/* Content */}
      <div className="py-5 px-3 relative bg-white">
        <div className="duration-300"></div>
        {/* Rating */}
        <h5 className="text-body mb-2.5 font-medium">
          {product.title}
        </h5>
        <div className="-m-1 mb-2.5">
          {product.discount > 0 ? (
            <>
              <span className="text-[#d6d6d6] text-lg font-bold mx-1 line-through	">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-heading text-xl font-bold mx-1">
                ${product.discountedPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-heading text-xl font-bold mx-1">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
        <div className="w-full flex justify-center">
          <Link
            href={`/shop/${product.slug}`}
            className="relative block h-10 bg-secondary text-white font-bold rounded px-[18px] leading-[39px] before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-200 hover:before:scale-110 before:rounded before:bg-secondary z-10 before:z-[-1]"
          >
            More details
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
