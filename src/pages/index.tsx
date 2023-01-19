import { NextPageWithLayout } from "./_app";
import { MainLayout } from "../layouts/MainLayout";
import { ReactElement } from "react";
import { useGetAllGenresQuery, useGetFeaturedBooksQuery } from "../store/api";
import { HeaderWithSlider } from "../components/HomePage/HeaderWithSlider";
import { GenreSlider } from "../components/HomePage/GenreSlider";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Simple Next Bookstore | Home</title>
        <meta name="description" content="Simple Next Bookstore is a Bookstore, minimalist and clean using NextJS and sonsuming a custom made API in NestJS, build as a part of a personal frontend portfolio but thinking now to finishing it as a full working store" />
        <meta name="keywords" content="nextjs, typescript, tailwindcss, redux, react-query" />
        <meta name="author" content="David Garay (Garaekz)" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Simple Next Bookstore | Home" />
        <meta property="og:description" content="Simple Next Bookstore" />
        <meta property="og:image" content="https://i.imgur.com/8QJrYTI.png" />
        <meta property="og:url" content="https://simple-next-bookstore.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garaekz" />
        <meta name="twitter:creator" content="@garaekz" />
        <meta name="twitter:title" content="Simple Next Bookstore | Home" />
        <meta name="twitter:description" content="Simple Next Bookstore" />
        <meta name="twitter:image" content="https://i.imgur.com/8QJrYTI.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="pt-10 pb-[70px] xl:py-[110px] bg-light">
        <div className="px-[15px] w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap items-center">
            <HeaderWithSlider />
          </div>
        </div>
      </div>
      <div className="pt-10 pb-[70px] xl:py-[110px] bg-white">
        <div className="px-[15px] w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap items-center">
            <GenreSlider />
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
