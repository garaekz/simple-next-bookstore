import Link from 'next/link'
import { RxDotsHorizontal } from 'react-icons/rx'
interface Pagination {
  currentPage: number
  totalPages: number
  totalItems: number
  perPage: number
}

function Paginator ({ pagination }: { pagination: Pagination }) {
  const { currentPage, totalPages } = pagination;
  const pages = [];

  if (totalPages > 5) {
    if (currentPage <= 3) {
      for (let i = 1; i <= 3; i++) {
        pages.push(i);
      }
      if(currentPage === 3) pages.push(currentPage + 1);
      pages.push("separator", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "separator");
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, "separator");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push("separator", totalPages);
    }
  } else {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  }

  return (
    <div className="flex items-center rounded-lg bg-gray-100 border border-gray-150">
      {currentPage > 1 && (
        <Link href={`/shop?page=${currentPage - 1}`}>
          <span className="text-gray-600 rounded-l-lg py-2.5 px-5 hover:text-gray-800">
            Prev
          </span>
        </Link>
      )}
      {pages.map((page, index) => {
        if (page === "separator") {
          return (
            <span
              key={index}
              className="flex items-center text-gray-600 py-2.5 px-4 border-r border-gray-200 h-full"
            >
              <RxDotsHorizontal />
            </span>
          );
        }
        if (page === currentPage) {
          return (
            <span key={index} className="text-xl font-bold py-2.5 px-5 border-r border-gray-200">
              {page}
            </span>
          );
        }
        return (
          <Link href={`/shop?page=${page}`} key={index}>
            <span className="text-gray-500 hover:text-gray-700 py-2.5 px-5 border-r border-gray-200">
              {page}
            </span>
          </Link>
        );
      })}
      {currentPage < totalPages && (
        <Link href={`/shop?page=${currentPage + 1}`}>
          <span className="text-gray-600 rounded-r-lg py-2.5 px-5 hover:text-gray-800">
            Next
          </span>
        </Link>
      )}
    </div>
  );
}

export default Paginator