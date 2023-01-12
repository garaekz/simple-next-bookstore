import { FaStar, FaStarHalf } from "react-icons/fa";

function RatingStars({ rating }: { rating: number }) {
  return (
    <>
      {[...Array(Math.floor(rating))].map((_, i) => {
        return (
          <FaStar
            key={i}
            className={`text-[#FFC107] inline-block ${
              i < rating ? "opacity-100" : "opacity-50"
            }`}
          />
        );
      })}
      {rating % 1 !== 0 && (
        <FaStarHalf className="text-[#FFC107] inline-block" />
      )}
    </>
  );
}

export default RatingStars;
