import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useGetAllGenresQuery } from "../../store/api";
import { useSelector } from "react-redux";
import type { Genre } from "../../types/cart.types";
import { toggleGenreFilter } from "../../store/slices/filters.slice";
import { useDispatch } from "react-redux";
import { BaseState } from "../../types/state.types";
import { useRouter } from "next/router";


function GenreFilter() {
  const dispatch = useDispatch();
  const router = useRouter()
  const filter = useSelector((state: BaseState) => state.filters.genre);
  const [isOpen, setIsOpen] = useState(true);
  const { data, error, isLoading, isFetching } = useGetAllGenresQuery({});
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;
  const genres = data?.data;
  
  return (
    <div className="relative pb-10">
      <div
        className={`${
          isOpen ? "after:w-full" : "after:w-0"
        } flex justify-between border-b-2 border-light mb-5 pb-2.5 relative items-center after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300`}
      >
        <h6 className="uppercase font-medium text-lg">genre</h6>
        <button onClick={() => setIsOpen(!isOpen)} name="Collapse Genre Filters">
          {isOpen ? <HiMinus /> : <HiPlus />}
        </button>
      </div>
      <div className="h-full">
        <ul
          style={{ height: isOpen ? `${genres.length * 35}px` : 0 }}
          className="transition-all duration-300 overflow-hidden -my-[5px]"
        >
          {genres.map((genre: Genre, index: number) => (
            <li className="m-0 py-[6px]" key={index}>
              <button
                className="flex items-center gap-3"
                onClick={() => dispatch(toggleGenreFilter(genre.slug))}
              >
                {filter === genre.slug ? (
                  <BsCheckCircleFill className="text-primary" />
                ) : (
                  <BsCircle className="text-body" />
                )}
                <span className="text-sm font-medium text-body">
                  {genre.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GenreFilter;
