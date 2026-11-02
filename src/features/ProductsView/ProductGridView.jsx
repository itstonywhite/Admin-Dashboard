import { useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "@/components/common/Pagination";

function ProductGridView({ products, paginatedProducts, setProducts }) {
  const [lastProducts, setLastProducts] = useState([...products]);
  const isProductAvailable = lastProducts.length !== 0;

  return (
    <>
      {isProductAvailable ? (
        <>
          <div
            className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2
        grid-cols-1 xl:grid-cols-5 gap-1"
          >
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            items={products}
            itemsPerPage={5}
            setItems={setProducts}
          />
        </>
      ) : (
        <h2 className="text-center text-lg font-bold text-red-400 mb-2">
          محصولی وجود ندارد
        </h2>
      )}
    </>
  );
}

export default ProductGridView;
