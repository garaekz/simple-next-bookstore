import { NextPageWithLayout } from "./_app";
import { useEffect } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { ReactElement, useState } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import GenreFilter from "../components/ShopPage/GenreFilter";
import {
  clearFilters,
  setAuthorFilter,
  setGenreFilter,
} from "../store/slices/filters.slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import ProductGrid from "../components/ShopPage/ProductGrid";
import AuthorFilter from "../components/ShopPage/AuthorFilter";
import Head from "next/head";

const Shop: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const { query, pathname, events } = useRouter();

  let page = 1;
  const { page: queryPage } = query;
  if (queryPage) page = parseInt(queryPage as string);

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const openFiltersMenu = () => setIsFiltersOpen(true);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url !== pathname) {
        dispatch(clearFilters());
      }
      clearFilters;
    };
    events.on("routeChangeStart", handleRouteChange);
    return () => {
      events.off("routeChangeStart", handleRouteChange);
    };
  }, [events, dispatch, pathname]);

  return (
    <>
      <Head>
        <title>Simple Next Bookstore | Shop</title>
        <meta
          name="description"
          content="Simple Next Bookstore is a Bookstore, minimalist and clean using NextJS and sonsuming a custom made API in NestJS, build as a part of a personal frontend portfolio but thinking now to finishing it as a full working store"
        />
        <meta
          name="keywords"
          content="nextjs, typescript, tailwindcss, redux, react-query"
        />
        <meta name="author" content="David Garay (Garaekz)" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Simple Next Bookstore | Home" />
        <meta property="og:description" content="Simple Next Bookstore" />
        <meta property="og:image" content="/images/react-banner.jpg" />
        <meta
          property="og:url"
          content="https://simplenextbookstore.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garaekz" />
        <meta name="twitter:creator" content="@garaekz" />
        <meta name="twitter:title" content="Simple Next Bookstore | Home" />
        <meta name="twitter:description" content="Simple Next Bookstore" />
        <meta name="twitter:image" content="/images/react-banner.jpg" />

        <link rel="icon" href="/react.svg" />
      </Head>
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
                <AuthorFilter />
                <button
                  onClick={() => dispatch(clearFilters())}
                  className="block relative w-full text-center text-white bg-primary py-[15px] rounded-lg font-bold transition duration-300 before:absolute before:inset-0 before:w-full before:h-full before:transition before:transition-all before:duration-500 hover:before:scale-110 before:rounded-lg before:bg-primary before:z-[-1]"
                >
                  Clear Filter
                </button>
              </div>
            </div>
            <div className="px-4 w-full lg:w-3/4 max-w-full shrink-0">
              <ProductGrid page={page} openFiltersMenu={openFiltersMenu} />
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
