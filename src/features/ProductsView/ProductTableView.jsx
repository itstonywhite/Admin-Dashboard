import clsx from "clsx";
import { useState } from "react";
import Table from "@/components/common/Table/Table";
import { productsAllTableHeadRow } from "@/data/products";
import TableRow from "@/components/common/Table/elements/TableRow";
import TableBody from "@/components/common/Table/elements/TableBody";
import TableHead from "@/components/common/Table/elements/TableHead";
import TableCell from "@/components/common/Table/elements/TableCell";
import EditProductIcon from "../ProductsTable/components/EditProductIcon";
import TableHeadCell from "@/components/common/Table/elements/TableHeadCell";
import RemoveProductIcon from "../ProductsTable/components/RemoveProductIcon";
import ChangeVisibilityIcon from "../ProductsTable/components/ChangeVisibilityIcon";

function ProductTableView({ products }) {
  const [lastProducts, setLastProducts] = useState([...products]);

  const removeProduct = (id) => {
    const newProducts = lastProducts.filter((product) => product.id !== id);
    setLastProducts(newProducts);
  };

  const changeProductVisibility = (id) => {
    const newProducts = lastProducts.map((product) => {
      return product.id === id
        ? { ...product, isPublished: !product.isPublished }
        : { ...product };
    });

    setLastProducts(newProducts);
  };

  const isProductAvailable = lastProducts.length !== 0;

  return (
    <Table
      header={{ title: "لیست محصولات" }}
      isProductAvailable={isProductAvailable}
      pagination={{
        items: products,
        setItems: setLastProducts,
        itemsPerPage: 4,
      }}
    >
      {isProductAvailable ? (
        <>
          <TableHead>
            {productsAllTableHeadRow.map((row) => (
              <TableHeadCell key={row}>{row}</TableHeadCell>
            ))}
          </TableHead>

          <TableBody>
            {lastProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id.slice(0, 10)}...</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-19 rounded-md border primary-border-color mt-1 mb-1"
                  />
                </TableCell>
                <TableCell>
                  <p
                    className={clsx(
                      product.isPublished ? "success-badge" : "danger-badge",
                      "badge",
                    )}
                  >
                    {product.isPublished ? "عمومی" : "خصوصی"}
                  </p>
                </TableCell>
                <TableCell>
                  {product.price.toLocaleString("fa-IR")} تومان
                </TableCell>
                <TableCell>{product.entity.toLocaleString("fa-IR")}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <RemoveProductIcon
                      product={product}
                      handler={removeProduct}
                    />
                    <ChangeVisibilityIcon
                      product={product}
                      handler={changeProductVisibility}
                    />
                    <EditProductIcon product={product} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </>
      ) : (
        <h2 className="text-center text-lg font-bold text-red-400 mb-2">
          محصولی وجود ندارد
        </h2>
      )}
    </Table>
  );
}

export default ProductTableView;
