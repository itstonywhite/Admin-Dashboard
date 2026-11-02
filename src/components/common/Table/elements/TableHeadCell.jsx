import clsx from "clsx";

function TableHeadCell({ children, className }) {
  return <div className={clsx(className, "")}>{children}</div>;
}

export default TableHeadCell;
