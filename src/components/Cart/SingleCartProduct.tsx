import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { updateProduct, removeProduct } from "../../store/slices/cart.slice";
import RatingStars from "../RatingStars";
import { BaseState } from "../../types/state.types";
import { CartItem } from "../../types/cart.types";
import Image from "next/image";
import { AuthorLink } from "../Shared/AuthorLink";

function SingleCartProduct({ item }: { item: CartItem }) {
  const dispatch = useDispatch();
  const cart = useSelector((state: BaseState) => state.cart);
  const removeFromCart = (id: string) => {
    dispatch(removeProduct(id));
  };
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      return removeFromCart(id);
    }
    dispatch(updateProduct({ id, quantity }));
  };

  return (
    <li className="flex items-center text-body mt-2 mb-[30px] pb-[30px] border-b border-[#f6f7fb]">
      <div className="mr-[30px] relative">
        <Link
          href={"/shop"}
          className="block bg-[#f7f7f7] rounded-md overflow-hidden relative h-[100px] w-[100px] p-2 w-full"
        >
          <Image
            src={item.book.cover}
            alt="product"
            className="max-h-[150px] h-full w-auto mx-auto object-cover"
            width={150}
            height={150}
          />
        </Link>
        <button
          onClick={() => removeFromCart(item.book._id)}
          className="h-[31px] w-[31px] bg-[#f6f7fb] border-2 border-white rounded-full absolute top-[-15px] left-[-10px] transition-all duration-300"
        >
          <FaTimes className="text-black text-xs inline-block" />
        </button>
      </div>
      <div className="flex-1 relative pr-[110px]">
        <div className="mb-[14px] text-sm">
          <RatingStars rating={item.book.rating} />
        </div>
        <h3 className="text-heading font-bold hover:text-primary duration-300 mb-[10px] overflow-hidden ">
          <Link
            href={{
              pathname: "/shop/[slug]",
              query: { slug: item.book.slug },
            }}
          >
            {item.book.title}
          </Link>
        </h3>
        <div className="text-[14px] text-[#27272e] mb-2">
          {item.book.authors.map((author, index) => (
            <AuthorLink
              key={index}
              href={'/shop'}
              className="hover:text-primary duration-300"
              slug={author.slug}
            >
              {author.name}
              {index !== item.book.authors.length - 1 && ", "}
            </AuthorLink>
          ))}
        </div>
        <div className="text-[18px] text-black">
          $
          {(item.book.discountedPrice
            ? item.book.discountedPrice
            : item.book.price
          ).toFixed(2)}
        </div>
        <div className="flex items-center absolute top-1/2 right-0 justify-end">
          <span
            onClick={() => updateQuantity(item.book._id, item.quantity - 1)}
            className="text-[10px] flex items-center justify-center cursor-pointer h-[26px] w-[26px] bg-[#f6f7fb] rounded-full transition-all"
          >
            <FaMinus />
          </span>
          <input
            type="number"
            min={0}
            value={item.quantity}
            onChange={(event) =>
              updateQuantity(item.book._id, Number(event.target.value))
            }
            className="font-semibold text-[#27272e] h-[26px] w-[30px] border-none text-center p-0 outline-none"
          />
          <span
            onClick={() => updateQuantity(item.book._id, item.quantity + 1)}
            className="text-[10px] flex items-center justify-center cursor-pointer h-[26px] w-[26px] bg-[#f6f7fb] rounded-full transition-all"
          >
            <FaPlus />
          </span>
        </div>
      </div>
    </li>
  );
}

export default SingleCartProduct;
