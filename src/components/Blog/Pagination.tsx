'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number): string => {
    if (page === 1) return baseUrl;
    return `${baseUrl}${baseUrl.endsWith('/') ? '' : '/'}page/${page}`;
  };

  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="nav-links">
      {currentPage > 1 && (
        <Link href={getPageUrl(currentPage - 1)} className="prev page-numbers">
          &laquo; Previous
        </Link>
      )}
      {pages.map((page) =>
        page === currentPage ? (
          <span key={page} className="page-numbers current">
            {page}
          </span>
        ) : (
          <Link key={page} href={getPageUrl(page)} className="page-numbers">
            {page}
          </Link>
        )
      )}
      {currentPage < totalPages && (
        <Link href={getPageUrl(currentPage + 1)} className="next page-numbers">
          Next &raquo;
        </Link>
      )}
    </div>
  );
}
