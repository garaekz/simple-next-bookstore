import { FaStar, FaStarHalf } from "react-icons/fa";
import { memo } from "react";

function RatingStars({ rating, className }: { rating: number, className?: string }) {
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const halfStars = roundedRating % 1;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className={`${className} flex items-center`}>
      {Array.from({ length: fullStars }, (_, index) => (
          <FaStar key={index} className="text-[#FFC107]" />
      ))}
      {halfStars > 0 && (
        <div className="relative">
          <FaStar className="text-gray-200" />
          <FaStarHalf className="text-[#FFC107] absolute top-0 left-0" />
        </div>
      )}
      {Array.from({ length: emptyStars }, (_, index) => (
          <FaStar key={index} className="text-gray-200" />
      ))}
    </div>
  );
}

export default memo(RatingStars);
