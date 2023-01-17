import { NextPageWithLayout } from "../_app";
import { MainLayout } from "../../layouts/MainLayout";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { useGetBookQuery } from "../../store/api";
import { SingleBook } from "../../components/SingleProductPage/SingleBook";
import { RelatedProducts } from "../../components/SingleProductPage/RelatedProducts";
import SingleProductSkeleton from "../../components/SingleProductPage/SimpleProductSkeleton";

const Shop: NextPageWithLayout = () => {
  const router = useRouter();
  console.log(router);
  const { slug } = router.query;
  const { data, error, isLoading, isFetching } = useGetBookQuery(slug as string);
  if (isLoading || isFetching) return <SingleProductSkeleton />;
  if (error) return <div>Not found!</div>;
  const book = data?.data;
  if (!book) return <div>Book not found</div>;
  return (
    <>
      <SingleBook book={book} />
      {book && <RelatedProducts book={book} />}
    </>
  );
};

Shop.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Shop;
