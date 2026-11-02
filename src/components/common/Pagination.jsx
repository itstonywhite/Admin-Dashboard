import clsx from "clsx";
import { useEffect, useState } from "react";

function Pagination({ items, setItems, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(items.length / itemsPerPage);
  const safePage = Math.min(currentPage, Math.max(pagesCount, 1));

  useEffect(() => {
    const startIndex = (safePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setItems(items.slice(startIndex, endIndex));
  }, [safePage, items, itemsPerPage, setItems]);

  const changePageHandler = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= pagesCount; i++) {
      pageNumbers.push(
        <button
          className={clsx("pagination-button", {
            "active-tab": i === safePage,
            "not-active-tab": i !== safePage,
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
        disabled={safePage === 1}
        onClick={() => changePageHandler(safePage - 1)}
        className={clsx("pagination-prev-button select-none", {
          "pages-ended active-tab": safePage === 1,
        })}
      >
        قبل
      </button>
      <div className="flex items-center justify-center gap-1 mx-2">
        {renderPageNumbers()}
      </div>
      <button
        disabled={safePage === pagesCount}
        onClick={() => changePageHandler(safePage + 1)}
        className={clsx("pagination-next-button select-none", {
          "pages-ended active-tab": safePage === pagesCount,
        })}
      >
        بعد
      </button>
    </div>
  );
}

export default Pagination;
