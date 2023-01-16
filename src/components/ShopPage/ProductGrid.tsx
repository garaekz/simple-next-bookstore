import Link from "next/link";
import { useRouter } from "next/router";
import { HiFilter } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useGetPaginatedBooksQuery } from "../../store/api";
import { changeSort, FilterState } from "../../store/slices/filters.slice";
import { Book } from "../../types/cart.types";
import { BaseState } from "../../types/state.types";
import Paginator from "../Shared/Paginator";
import SingleProductCard from "./SingleProductCard";
import SortProductsSelect from "./SortProductsSelect";

function ProductGrid({ page }: { page: number }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const filters = useSelector((state: BaseState) => state.filters);
  const { data, error, isLoading } = useGetPaginatedBooksQuery(
    { filters, page },
    { refetchOnMountOrArgChange: true }
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;
  const books = data?.data;
  const pagination = data?.pagination;

  const isFirstDisabled = page === 1;
  const isLastDisabled = page === pagination?.totalPages;
  const isPrevDisabled = page === 1;
  const isNextDisabled = page === pagination?.totalPages;

  return (
    <>
      {/* Select part */}
      <div className="flex flex-wrap -mx-4">
        <div className="px-4 w-full max-w-full">
          <div className="mb-10">
            <div className="flex flex-wrap justify-between lg:justify-end items-center -m-2.5">
              <span className="m-2.5 font-medium">
                {`Showing ${books.length} of ${pagination.totalItems} products`}
              </span>
              <SortProductsSelect />
            </div>
            <button
              //onClick={() => setIsFiltersOpen(true)}
              className="lg:hidden mt-5 md:mt-2.5 uppercase text-sm flex items-center"
            >
              <HiFilter className="mr-2 text-lg" /> filter
            </button>
          </div>
        </div>
      </div>
      {/* Product grid */}
      <div className="flex flex-wrap -mx-4">
        {/* Single product */}
        {books.map((book: Book, index: number) => (
          <div
            key={index}
            className="px-4 w-full md:w-1/2 xl:w-1/3 max-w-full transition ease-in-out duration-300"
          >
            <SingleProductCard product={book} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
          <Paginator pagination={pagination} />
      </div>
    </>
  );
}

export default ProductGrid;
