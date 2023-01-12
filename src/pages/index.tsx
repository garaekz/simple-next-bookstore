import { NextPageWithLayout } from "./_app";
import { MainLayout } from "../layouts/MainLayout";
import { ReactElement } from "react";
import { useGetAllGenresQuery, useGetFeaturedBooksQuery } from "../store/api";
import { HeaderWithSlider } from "../components/HomePage/HeaderWithSlider";
import { GenreSlider } from "../components/HomePage/GenreSlider";

const Home: NextPageWithLayout = () => {
  const { data: featuredBooks, error: featuredBooksError, isLoading: isFeaturedBooksLoading, isFetching: isFeaturedBooksFetching } = useGetFeaturedBooksQuery({});
  const { data: genresData, error: genresError, isLoading: isGenresLoading, isFetching: isGenresFetching } = useGetAllGenresQuery({});
  const books = featuredBooks?.data;
  const genres = genresData?.data;
  return (
    <>
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
