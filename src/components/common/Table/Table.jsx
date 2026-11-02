import Pagination from "../Pagination";
import TableHeader from "./elements/TableHeader";

function Table({
  header = { title: "لیست آیتم ها", Buttons: undefined },
  isProductAvailable,
  isThereUsers,
  pagination,
  children,
}) {
  return (
    <div className="mt-10 border min-w-full! bg-white primary-border-color rounded-xl overflow-hidden">
      <TableHeader header={header} />
      <div>{children}</div>

      {isProductAvailable || isThereUsers ? (
        <Pagination
          items={pagination.items}
          setItems={pagination.setItems}
          itemsPerPage={pagination.itemsPerPage}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Table;
