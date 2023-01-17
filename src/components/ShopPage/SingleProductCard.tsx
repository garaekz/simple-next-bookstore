import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/slices/cart.slice";
import { Book } from "../../types/cart.types";
import { BaseState } from "../../types/state.types";
import RatingStars from "../RatingStars";
import { AuthorLink } from "../Shared/AuthorLink";

function SingleProductCard({ product }: { product: Book }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: BaseState) => state);
  
  return (
    <div className="group relative mb-8 text-center md:text-left">
      {/* Thumbnail */}
      <div className="relative">
        <Link
          href={`/shop/${product.slug}`}
          className="block bg-[#f7f7f7] rounded-lg overflow-hidden relative h-[400px] p-10 w-full"
        >
          <Image
            src={product.cover}
            width={150}
            height={150}
            alt="product"
            className="rounded-lg max-h-[500px] h-full w-auto mx-auto object-cover group-hover:scale-110 transition duration-300"
          />
        </Link>
        {product.discount > 0 && (
          <div className="absolute z-10 top-6 left-auto -right-[10px]">
            <div className="uppercase bg-primary pt-[6px] px-2.5 pb-[5px] text-xs text-white rounded-md shadow-discount font-bold">
              {`${product.discount}% off`}
            </div>
          </div>
        )}
        <div className="invisible absolute opacity-0 inset-x-0 bottom-0 transition-all duration-500 group-hover:visible group-hover:opacity-100 group-hover:bottom-[30px] group-hover:delay-200">
          <ul className="flex justify-center items-center m-[-5px]">
            {/* <li className="m-[5px]">
                    <a href="wishlist.html" className="relative block w-10 h-10 rounded text-sm duration-300 bg-white text-heading flex justify-center items-center before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-200 hover:before:scale-110 before:rounded before:bg-white z-10 before:z-[-1] before:text-[30px]">
                      <FaRegHeart />  
                    </a>
                  </li> */}
            <li className="m-[5px]">
              <button
                onClick={() => dispatch(addProduct(product))}
                className="relative block h-10 bg-secondary text-white font-bold rounded px-[18px] leading-[39px] before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-200 hover:before:scale-110 before:rounded before:bg-secondary z-10 before:z-[-1]"
              >
                Add to Cart
              </button>
            </li>
            <li className="m-[5px]">
              <a
                href="wishlist.html"
                className="relative block w-10 h-10 rounded duration-300 bg-white text-heading flex justify-center items-center before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-200 hover:before:scale-110 before:rounded before:bg-white z-10 before:z-[-1] before:text-[30px]"
              >
                <FaRegEye />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Content */}
      <div className="py-6 flex flex-col justify-center items-center md:items-start">
        <div className="text-lg mb-2.5">
          <RatingStars rating={product.rating} />
        </div>
        <h5 className="text-body font-medium">
          <Link
            href={`/shop/${product.slug}`}
            className="hover:text-primary transition duration-300"
            >
            {product.title}
          </Link>
        </h5>
        <h6 className="text-gray-400 text-sm mb-2.5">
          {product.authors.map((author, index) => (
            <Fragment key={author._id}>
              <AuthorLink 
                href={"/shop"} 
                slug={author.slug}
                className="hover:text-primary">
                  {author.name}
              </AuthorLink>
              {index !== product.authors.length - 1 && ", "}
            </Fragment>
          ))}
        </h6>
        <div className="-m-1">
          {product.discount > 0 ? (
            <>
              <span className="text-heading text-xl font-bold mx-1">
                {`$${product.discountedPrice.toFixed(2)}`}
              </span>
              <span className="text-[#d6d6d6] text-xl font-bold mx-1 line-through	">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-heading text-xl font-bold mx-1">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProductCard;
