'use client';

import { generatePagination } from '@/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  const PaginationNumber = ({
    page,
    href,
    position,
    isActive,
  }: {
    page: string | number;
    href: string;
    position?: 'first' | 'last' | 'middle' | 'single';
    isActive: boolean;
  }) => {
    const style = clsx('flex h-10 w-10 items-center justify-center text-sm border', {
      'rounded-l-sm': position === 'first' || position === 'single',
      'rounded-r-sm': position === 'last' || position === 'single',
      'z-10 bg-blue-100 text-blue-500 text-white': isActive,
      'hover:bg-blue-100': !isActive && position !== 'middle',
      'text-gray-300 pointer-events-none': position === 'middle',
    });

    return isActive && position === 'middle' ? (
      <div className={style}>{page}</div>
    ) : (
      <Link href={href} className={style}>
        {page}
      </Link>
    );
  };

  const PaginationArrow = ({
    href,
    direction,
    isDisabled,
  }: {
    href: string;
    direction: 'left' | 'right';
    isDisabled?: boolean;
  }) => {
    const style = clsx('flex h-10 w-10 items-center justify-center text-sm border', {
      'pointer-events-none text-gray-300': isDisabled,
      'hover:bg-gray-100': !isDisabled,
      'mr-2': direction === 'left',
      'ml-2': direction === 'right',
    });

    const icon = direction === 'left' ? <HiChevronLeft size={20} /> : <HiChevronRight size={20} />;

    return isDisabled ? (
      <div className={style}>{icon}</div>
    ) : (
      <Link href={href} className={style}>
        {icon}
      </Link>
    );
  };

  return (
    <div className="inline-flex">
      <PaginationArrow href={createPageURL(currentPage - 1)} direction="left" isDisabled={currentPage <= 1} />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position: 'first' | 'last' | 'middle' | 'single' | undefined;

          if (index === 0) position = 'first';
          if (index === allPages.length - 1) position = 'last';
          if (allPages.length === 1) position = 'single';
          if (page === '...') position = 'middle';

          return (
            <PaginationNumber
              key={index}
              page={page}
              href={createPageURL(page)}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow href={createPageURL(currentPage + 1)} direction="right" isDisabled={currentPage >= totalPages} />
    </div>
  );
};
