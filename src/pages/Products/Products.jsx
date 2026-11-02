import Modal from "@/components/common/Modal";
import TitleSection from "@/components/common/TitleSection";
import { products } from "@/data/products";
import AddProductsFields from "@/features/ProductsTable/components/AddProductsFields";
import ProductGridView from "@/features/ProductsView/ProductGridView";
import ProductTableView from "@/features/ProductsView/ProductTableView";
import { useState } from "react";
import { CiGrid41, CiViewTable } from "react-icons/ci";

function Products() {
  const [layoutType, setLayoutType] = useState("TABLE");
  const [paginatedProducts, setPaginatedProducts] = useState([...products]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    img: "/images/product-img.png",
    isPublished: false,
    entity: "",
  });

  const toggleLayout = () => {
    const layout = layoutType === "TABLE" ? "GIRD" : "TABLE";
    setLayoutType(layout);
  };

  const createNewProduct = () => {
    setPaginatedProducts((prevProducts) => [...prevProducts, newProduct]);
    setNewProduct({
      title: "",
      description: "",
      price: "",
      img: "/images/product-img.png",
      isPublished: false,
      entity: "",
    });
  };

  const Buttons = (
    <>
      <button
        onClick={toggleLayout}
        className="text-2xl size-10 flex-center bg-[#ECEFF3] text-[#818898]
      *:stroke-1 rounded-md hover:bg-[#e1e4e7] active:scale-90 active:bg-[#ECEFF3] 
      duration-150 transition-all primary-border-color border cursor-pointer shadow"
      >
        {layoutType === "TABLE" ? <CiGrid41 /> : <CiViewTable />}
      </button>
      <Modal
        title="ایجاد محصول جدید"
        onSubmit={createNewProduct}
        Trigger={
          <button className="primary-bg px-3 py-1.5">ایجاد محصول</button>
        }
      >
        <AddProductsFields newProduct={newProduct} onChange={setNewProduct} />
      </Modal>
    </>
  );

  return (
    <>
      <TitleSection title="محصولات" buttons={Buttons} />
      <section className="mt-10 w-full! min-w-full!">
        {layoutType === "TABLE" ? (
          <>
            <ProductTableView products={[...paginatedProducts].reverse()} />
          </>
        ) : (
          <>
            <ProductGridView
              products={[...paginatedProducts].reverse()}
              paginatedProducts={paginatedProducts}
              setProducts={setPaginatedProducts}
            />
          </>
        )}
      </section>
    </>
  );
}

export default Products;
