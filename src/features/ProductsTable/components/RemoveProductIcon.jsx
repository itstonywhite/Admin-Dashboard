import { HiOutlineTrash } from "react-icons/hi2";
import Modal from "@/components/common/Modal";

function RemoveProductIcon({ product, handler }) {
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-red-500">
      <HiOutlineTrash className="text-xl" />
    </button>
  );

  return (
    <Modal
      title="حذف محصول"
      // eslint-disable-next-line react-hooks/static-components
      Trigger={<Trigger />}
      onSubmit={() => handler(product.id)}
    >
      <div className="flex items-center justify-center">
        آیا از حذف محصول
        <kbd className="px-2 py-1 rounded-md mx-1 bg-red-500/15 font-black! text-red-500">
          {product.title}
        </kbd>
        اطمینان دارید؟
      </div>
    </Modal>
  );
}

export default RemoveProductIcon;
