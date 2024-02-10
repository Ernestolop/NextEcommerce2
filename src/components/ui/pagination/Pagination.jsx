'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { generatePaginationNumbers } from '@/utils';

const Pagination = ({ totalPages }) => {

    const pathName = usePathname();
    const searchParams = useSearchParams();
    let currentPage = Number(searchParams.get('page')) ?? 1;
    if (isNaN(currentPage) || currentPage < 1) currentPage = 1;

    const allPages = generatePaginationNumbers(currentPage, totalPages);

    const createPageUrl = (pageNumber) => {
        const params = new URLSearchParams(searchParams);

        if (pageNumber === '...') {
            return `${pathName}?${params.toString()}`;
        }

        if (+pageNumber === 0) {
            return pathName;
        }

        if (pageNumber > totalPages) {
            return `${pathName}?${params.toString()}`;
        }

        params.set('page', pageNumber.toString());
        return `${pathName}?${params.toString()}`;
    }

    return (
        <div className="flex justify-center text-center mt-10 mb-32">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">

                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href={createPageUrl(currentPage - 1)}
                        >
                            <IoChevronBackOutline size={30} />
                        </Link>
                    </li>

                    {allPages.map((page, index) => (
                        <li key={index}>
                            <Link
                                className={
                                    clsx(
                                        "page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                                        {
                                            "bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:text-white": page === currentPage,
                                        }
                                    )
                                }
                                href={createPageUrl(page)}
                            >
                                {page}
                            </Link>
                        </li>
                    ))}

                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href={createPageUrl(currentPage + 1)}
                        >
                            <IoChevronForwardOutline size={30} />
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Pagination