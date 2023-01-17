import Link from 'next/link';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthorFilter } from '../../store/slices/filters.slice';
export const AuthorLink = ({children, href, className, slug }: {children: ReactNode, href: string, className: string, slug: string}) => {
  const dispatch = useDispatch();
  return (
    <Link
      href={href}
      className={className}
      onClick={() => dispatch(setAuthorFilter(slug))}
      >
     {children}
    </Link>
  );
};