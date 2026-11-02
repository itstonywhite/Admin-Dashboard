import Modal from "@/components/common/Modal";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";

function EditProductIcon({ product }) {
  const [productTitle, setProductTitle] = useState(product.title);
  const [productIsPublished, setProductIsPublished] = useState(
    product.isPublished,
  );
  const [productImg, setProductImg] = useState(product.img);
  const [productPrice, setProductPrice] = useState(product.price);
  const [productDesc, setProductDesc] = useState(product.description);

  const Trigger = () => (
    <button className="cursor-pointer text-xl text-green-500">
      <BiEdit className="text-xl" />
    </button>
  );

  return (
    // eslint-disable-next-line react-hooks/static-components
    <Modal title="ویرایش محصول" Trigger={<Trigger />}>
      <div>
        <p className="text-zinc-700 text-sm">عنوان محصول:</p>
        <input
          className="w-full mt-2 mb-4 p-2 border primary-border-color rounded-lg bg-gray-100/15 outline-none"
          type="text"
          placeholder="عنوان محصول"
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
        />
      </div>
      <div>
        <p className="text-zinc-700 text-sm">وضعیت انتشار</p>
        <input
          className="w-full mt-2 mb-4 p-2 border primary-border-color rounded-lg bg-gray-100/15 outline-none"
          type="text"
          placeholder="وضعیت انتشار"
          value={productIsPublished ? "عمومی" : "خصوصی"}
          onChange={(e) => setProductIsPublished(e.target.value)}
        />
      </div>
      <div>
        <p className="text-zinc-700 text-sm">تصویر محصول</p>
        <input
          className="w-full mt-2 mb-4 p-2 border primary-border-color rounded-lg bg-gray-100/15 outline-none"
          type="text"
          placeholder="تصویر محصول"
          value={productImg}
          onChange={(e) => setProductImg(e.target.value)}
        />
      </div>
      <div>
        <p className="text-zinc-700 text-sm">قیمت محصول</p>
        <input
          className="w-full mt-2 mb-4 p-2 border primary-border-color rounded-lg bg-gray-100/15 outline-none"
          type="text"
          placeholder="قیمت محصول"
          value={productPrice.toLocaleString("fa-IR")}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <div>
        <p className="text-zinc-700 text-sm">توضیحات محصول</p>
        <input
          className="w-full mt-2 mb-4 p-2 border primary-border-color rounded-lg bg-gray-100/15 outline-none"
          type="text"
          placeholder="توضیحات محصول"
          value={productDesc}
          onChange={(e) => setProductDesc(e.target.value)}
        />
      </div>
    </Modal>
  );
}

export default EditProductIcon;
