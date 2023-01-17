import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useGetAllAuthorsQuery } from "../../store/api";
import { useSelector } from "react-redux";
import type { Author } from "../../types/cart.types";
import { toggleAuthorFilter } from "../../store/slices/filters.slice";
import { useDispatch } from "react-redux";
import { BaseState } from "../../types/state.types";
import { useRouter } from "next/router";


function AuthorFilter() {
  const dispatch = useDispatch();
  const router = useRouter()
  const filter = useSelector((state: BaseState) => state.filters.author);
  const [isOpen, setIsOpen] = useState(true);
  const { data, error, isLoading, isFetching } = useGetAllAuthorsQuery({});
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;
  const authors = data?.data;
  
  return (
    <div className="relative pb-10">
      <div
        className={`${
          isOpen ? "after:w-full" : "after:w-0"
        } flex justify-between border-b-2 border-light mb-5 pb-2.5 relative items-center after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300`}
      >
        <h6 className="uppercase font-medium text-lg">author</h6>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiMinus /> : <HiPlus />}
        </button>
      </div>
      <div className="h-full">
        <ul
          style={{ height: isOpen ? `${authors.length * 35}px` : 0 }}
          className="transition-all duration-300 overflow-hidden -my-[5px]"
        >
          {authors.map((author: Author, index: number) => (
            <li className="m-0 py-[6px]" key={index}>
              <button
                className="flex items-center gap-3"
                onClick={() => dispatch(toggleAuthorFilter(author.slug))}
              >
                {filter === author.slug ? (
                  <BsCheckCircleFill className="text-primary" />
                ) : (
                  <BsCircle className="text-body" />
                )}
                <span className="text-sm font-medium text-body">
                  {author.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AuthorFilter;
