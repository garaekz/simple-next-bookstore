import { NextPageWithLayout } from "./_app";
import { useEffect } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { ReactElement, useState } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import GenreFilter from "../components/ShopPage/GenreFilter";
import { clearFilters, setGenreFilter } from "../store/slices/filters.slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import ProductGrid from "../components/ShopPage/ProductGrid";
import { BaseState } from "../types/state.types";
import { useSelector } from "react-redux";

const Shop: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const { query, route } = useRouter();
  const isShopPage = route === '/shop';

  const filters = useSelector((state: BaseState) => state.filters);
  let page = 1;
  const { page: queryPage, genre } = query;
  if (queryPage) page = parseInt(queryPage as string);

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    dispatch(clearFilters());
  }, [isShopPage, dispatch]);

  useEffect(() => {
    if (genre && genre !== filters.genre) {
      dispatch(setGenreFilter(genre as string));
    }
  }, [genre, filters, dispatch]);

  return (
    <>
      {/* BreadCrumbs */}
      <div className="relative pt-10 pb-[45px] bg-[#f8f8f8]">
        <div className="px-[15px] pt-20 w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="shrink-0 w-full max-w-full">
              <ul className="flex p-0 mb-4 items-center">
                <li className="inline-block font-medium text-[#999] hover:text-gray-900">
                  <Link href="/">Home</Link>
                </li>
                <li className="h-3 w-0.5 bg-[#e5e5e5] mx-2"></li>
                <li className="inline-block font-medium text-primary">
                  <span>Shop</span>
                </li>
              </ul>
              <h1 className="text-[34px] md:text-[40px] font-bold">
                Explore All Products
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Shop area */}
      <div className="py-[60px] sm:py-20 bg-white">
        <div className="px-[15px] w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap -mx-3">
            {/* Backdrop filters */}
            {isFiltersOpen && (
              <div
                onClick={() => setIsFiltersOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-70 z-30"
              ></div>
            )}
            {/* Filter menu */}
            <div
              className={`${
                isFiltersOpen ? "left-0" : "left-[-380px]"
              } z-40 lg:z-10 bg-white fixed top-0 bottom-0 lg:relative w-[280px] pt-[100px] px-5 pb-[50px] lg:w-1/4 lg:block lg:left-0 lg:p-0 lg:px-[15px] mx-auto transition-all duration-300 overflow-auto`}
            >
              <div className="pr-5 lg:relative">
                <div className="lg:hidden">
                  <button
                    onClick={() => setIsFiltersOpen(false)}
                    className="text-body rounded-full bg-light flex items-center justify-center hover:bg-primary hover:text-white transition duration-300 absolute top-[15px] w-[30px] h-[30px]"
                  >
                    <FaTimes />
                  </button>
                </div>
                {/* Genres */}
                <GenreFilter />
                {/* Authors */}
                {/* <div className="relative pb-10">
                  <div
                    className={`${
                      isAuthorsOpen ? "after:w-full" : "after:w-0"
                    } flex justify-between border-b-2 border-light mb-5 pb-2.5 relative items-center after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300`}
                  >
                    <h6 className="uppercase font-medium text-lg">author</h6>
                    <button onClick={() => setIsAuthorsOpen(!isAuthorsOpen)}>
                      {isAuthorsOpen ? <HiMinus /> : <HiPlus />}
                    </button>
                  </div>
                  <div className="h-full">
                    <ul
                      className={`${
                        !isAuthorsOpen ? "h-0" : "h-56"
                      } transition-all duration-300 overflow-hidden -my-[5px]`}
                    >
                      {authors.map((author, index) => (
                        <li className="m-0 py-[6px]" key={index}>
                          <button
                            className="flex items-center gap-3"
                            onClick={() => filterProducts("author", author)}
                          >
                            {filter.type === "author" &&
                            filter.filter === author ? (
                              <BsCheckCircleFill className="text-primary" />
                            ) : (
                              <BsCircle className="text-body" />
                            )}
                            <span className="text-sm font-medium text-body">
                              {author}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> */}
                <button
                  onClick={() => dispatch(clearFilters())}
                  className="block relative w-full text-center text-white bg-primary py-[15px] rounded-lg font-bold transition duration-300 before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-500 hover:before:scale-110 before:rounded-lg before:bg-primary before:z-[-1]"
                >
                  Clear Filter
                </button>
              </div>
            </div>
            <div className="px-4 w-full lg:w-3/4 max-w-full shrink-0">
              <ProductGrid page={page} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Shop.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Shop;
