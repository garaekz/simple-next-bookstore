import { NextPageWithLayout } from "../_app";
import { MainLayout } from "../../layouts/MainLayout";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { useGetBookQuery } from "../../store/api";
import { SingleBook } from "../../components/SingleProductPage/SingleBook";
import { RelatedProducts } from "../../components/SingleProductPage/RelatedProducts";
import SingleProductSkeleton from "../../components/SingleProductPage/SimpleProductSkeleton";
import Head from "next/head";

const Shop: NextPageWithLayout = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error, isLoading, isFetching } = useGetBookQuery(slug as string);
  if (isLoading || isFetching) return <SingleProductSkeleton />;
  if (error) return <div>Not found!</div>;
  const book = data?.data;
  if (!book) return <div>Book not found</div>;
  return (
    <>
      <Head>
        <title>Simple Next Bookstore | {book.title} details</title>
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
      <SingleBook book={book} />
      {book && <RelatedProducts book={book} />}
    </>
  );
};

Shop.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Shop;
