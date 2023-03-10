import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Author, Book, Genre } from "../../types/cart.types";
import { addProduct } from "../../store/slices/cart.slice";
import RatingStars from "../RatingStars";
import { AuthorLink } from "../Shared/AuthorLink";
import { GenreLink } from "../Shared/GenreLink";

export function SingleBook({
  book,
  className,
}: {
  book: Book;
  className?: string;
}) {
  const {
    title,
    authors,
    genres,
    rating,
    price,
    cover,
    discountedPrice,
    description,
  } = book;

  const dispatch = useDispatch();
  return (
    <>
      <div className="pt-[80px] pb-[80px]">
        <div className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full mx-auto flex flex-wrap">
          <div className="2xl:-mx-[50px] w-full flex flex-wrap">
            {/* Image */}
            <div className="w-full lg:w-1/2 lg:px-[50px] px-[15px] mb-10">
              <div className="h-full">
                <div className="sticky top-[100px] z-0">
                  <div className="relative">
                    <div className="relative block p-5 lg:p-10 xl:p-20 rounded-md">
                      <Image
                        src={cover}
                        alt={title}
                        width={500}
                        height={700}
                        className="w-full rounded-md h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="w-full lg:w-1/2 lg:px-[50px] px-[15px] mb-10">
              <div className="h-full">
                <div className="sticky top-[100px] z-0">
                  <div className="block">
                    <div>
                      <h2 className="text-dark font-bold text-[26px] md:text-[30px]">
                        {title}
                      </h2>
                      <h6 className="mb-5 font-medium text-[20px] text-body">
                      {authors.map((author, index) => (
                        <Fragment key={author._id}>
                          <AuthorLink 
                            href={"/shop"} 
                            slug={author.slug}
                            className="hover:text-primary">
                              {author.name}
                          </AuthorLink>
                          {index !== authors.length - 1 && ", "}
                        </Fragment>
                      ))}
                      </h6>
                      {discountedPrice ? (
                        <div className="flex">
                          <div className="pb-[10px] border-b-0 flex items-center font-medium text-[20px] md:text-[24px] mb-5 mr-4">
                            ${discountedPrice.toFixed(2)}
                          </div>
                          <div className="pb-[10px] border-b-0 flex items-center font-medium text-[20px] md:text-[24px] mb-5 line-through	text-[#d6d6d6] ">
                            ${price.toFixed(2)}
                          </div>
                        </div>
                      ) : (
                        <div className="pb-[10px] border-b-0 flex items-center font-medium text-[20px] md:text-[24px] mb-5">
                          ${price.toFixed(2)}
                        </div>
                      )}
                      <div className="flex justify-between mb-10">
                        <button
                          onClick={() => dispatch(addProduct(book))}
                          className="block relative w-full text-center text-white bg-primary py-[15px] rounded-md font-bold transition duration-300 before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-300 hover:before:scale-105 before:rounded-md before:bg-primary before:z-[-1]"
                        >
                          Add To Cart
                        </button>
                      </div>
                      <div className="border-b border-light my-[30px] pb-[30px] flex items-center lg:justify-between">
                        <div>
                          <span className="font-medium text-heading">
                            Genres:{" "}
                          </span>
                          {genres.map((genre: Genre, index: number) => (
                            <Fragment key={genre._id}>
                              <GenreLink 
                              href="/shop"
                              slug={genre.slug}
                              className="hover:text-primary">
                                {genre.name}
                              </GenreLink>
                            {index !== genres.length - 1 && ", "}
                          </Fragment>
                          ))}
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium text-heading mr-2">
                            Rating:{" "}
                          </span>
                          <RatingStars rating={rating} />
                        </div>
                      </div>
                      <div className="mt-[80px]">
                        <h4 className="text-primary font-bold text-[24px] mb-10">
                          Description
                        </h4>
                        <p
                          className="text-body"
                          dangerouslySetInnerHTML={{ __html: description }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
