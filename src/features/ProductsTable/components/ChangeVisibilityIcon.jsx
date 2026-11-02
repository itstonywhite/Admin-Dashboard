import clsx from "clsx";
import { HiEye } from "react-icons/hi2";
import Modal from "@/components/common/Modal";

function ChangeVisibilityIcon({ product, handler }) {
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-sky-500">
      <HiEye className="text-xl" />
    </button>
  );

  return (
    <Modal
      title="تغییر وضعیت انتشار"
      // eslint-disable-next-line react-hooks/static-components
      Trigger={<Trigger />}
      onSubmit={() => handler(product.id)}
    >
      <div className="flex items-center justify-center">
        <p className="flex gap-1">
          آيا از
          <span
            className={clsx(
              product.isPublished ? "text-blue-500" : "text-green-500",
            )}
          >
            <strong>{product.isPublished ? "خصوصی" : "عمومی"}</strong>
          </span>
          کردن این محصول اطمینان دارید؟
        </p>
      </div>
    </Modal>
  );
}

export default ChangeVisibilityIcon;
