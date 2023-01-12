import Link from "next/link";
import { GoFlame } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetAllGenresQuery } from "../../store/api";
import { genresSettings } from "../../utils/slider.config";
import { Genre } from "../../types/cart.types";
import Image from "next/image";

export function GenreSlider() {
  const { data, error, isLoading, isFetching } = useGetAllGenresQuery({});
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;
  const genres = data?.data;
  return (
    <>
      <div className="w-full">
        <div className="mb-[25px] xl:mb-0 xl:pr-20">
          <span className="text-secondary font-bold flex items-center mb-[16px] leading-none">
            <div className="bg-secondary rounded-full flex items-center justify-center text-white p-1 mr-3">
              <GoFlame />
            </div>
            The genres you love
          </span>
          <h1 className="text-[36px] xl:text-[36px] mb-10 leading-[1.1] font-bold text-heading">
            Browse through our genres
          </h1>
          <div className="">
            <Slider {...genresSettings }>
              {genres.map((genre: Genre) => (
                <div
                  key={genre._id}
                  className="flex items-center justify-center"
                >
                  <Link
                    key={genre._id}
                    href={`/shop?genre=${genre._id}`}
                    tabIndex={0}
                    className="rounded-lg border border-[#f0f0f0] bg-white text-heading p-3 text-sm rounded-md relative inline-block z-[1] font-bold shadow-explore mr-3"
                  >
                    <div className="mb-2">
                      <Image src={genre.image} width={150} height={150} className="h-24 w-40 w-full object-cover rounded-lg" alt={genre.name}/>
                    </div>
                    <h6 className="w-full flex justify-center text-lg text-heading font-medium">
                      {genre.name}
                    </h6>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
