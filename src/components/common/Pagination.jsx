import clsx from "clsx";
import { useEffect, useState } from "react";

function Pagination({ items, setItems, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = items.slice(startIndex, endIndex);

    setItems(paginatedItems);
  }, [currentPage, items, itemsPerPage, setItems]);

  const changePageHandler = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= pagesCount; i++) {
      pageNumbers.push(
        <button
          className={clsx("pagination-button", {
            "active-tab": i === currentPage,
            "not-active-tab": i !== currentPage,
          })}
          key={i}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>,
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination bg-zinc-50/40" dir="rtl">
      <button
        disabled={currentPage === 1}
        onClick={() => changePageHandler(currentPage - 1)}
        className={clsx("pagination-prev-button select-none", {
          "pages-ended active-tab": currentPage === 1,
        })}
      >
        قبل
      </button>
      <div className="flex items-center justify-center gap-1 mx-2">
        {renderPageNumbers()}
      </div>
      <button
        disabled={currentPage === pagesCount}
        onClick={() => changePageHandler(currentPage + 1)}
        className={clsx("pagination-next-button select-none", {
          "pages-ended active-tab": currentPage === pagesCount,
        })}
      >
        بعد
      </button>
    </div>
  );
}

export default Pagination;
