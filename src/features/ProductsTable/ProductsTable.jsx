import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";
import Table from "@/components/common/Table/Table";
import EditProductIcon from "./components/EditProductIcon";
import RemoveProductIcon from "./components/RemoveProductIcon";
import { products, productsTableHeadRow } from "@/data/products";
import TableRow from "@/components/common/Table/elements/TableRow";
import TableBody from "@/components/common/Table/elements/TableBody";
import TableCell from "@/components/common/Table/elements/TableCell";
import TableHead from "@/components/common/Table/elements/TableHead";
import ChangeVisibilityIcon from "./components/ChangeVisibilityIcon";
import TableHeadCell from "@/components/common/Table/elements/TableHeadCell";

function ProductsTable() {
  const [lastProducts, setLastProducts] = useState([...products]);
  const [allProducts, setAllProducts] = useState([...products]);

  const isProductAvailable = lastProducts.length !== 0;

  const Buttons = () => {
    return (
      <Link
        to="/products"
        className="hover:text-blue-400 text-blue-500 flex-center gap-1 delay-75"
      >
        <span> صفحه محصولات </span>
        <MdOpenInNew />
      </Link>
    );
  };

  const removeProduct = (id) => {
    setAllProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const changeProductVisibility = (id) => {
    const newProducts = lastProducts.map((product) => {
      return product.id === id
        ? { ...product, isPublished: !product.isPublished }
        : { ...product };
    });

    setLastProducts(newProducts);
  };

  return (
    <div>
      <Table
        header={{ title: "لیست محصولات", Buttons: Buttons }}
        isProductAvailable={isProductAvailable}
        pagination={{
          items: allProducts,
          setItems: setLastProducts,
          itemsPerPage: 5,
        }}
      >
        {isProductAvailable ? (
          <>
            <TableHead>
              {productsTableHeadRow.map((row) => (
                <TableHeadCell key={row}>{row}</TableHeadCell>
              ))}
            </TableHead>

            <TableBody>
              {lastProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id.slice(0, 10)}...</TableCell>
                  <TableCell>{product.title}</TableCell>
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
    </div>
  );
}

export default ProductsTable;
