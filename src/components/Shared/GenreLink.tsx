import Link from 'next/link';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { setGenreFilter } from '../../store/slices/filters.slice';
export const GenreLink = ({children, href, className, slug }: {children: ReactNode, href: string, className: string, slug: string}) => {
  const dispatch = useDispatch();
  return (
    <Link
      href={href}
      className={className}
      onClick={() => dispatch(setGenreFilter(slug))}
      >
     {children}
    </Link>
  );
};