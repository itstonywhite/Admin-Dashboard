import Modal from "@/components/common/Modal";
import { HiOutlineTrash } from "react-icons/hi";

function RemoveUserIcon({ user, handler }) {
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
      onSubmit={() => handler(user.id)}
    >
      <div className="flex items-center justify-center">
        آیا از حذف کاربر
        <kbd className="px-2 py-1 rounded-md mx-1 bg-red-500/15 font-black! text-red-500">
          {user.fullName}
        </kbd>
        اطمینان دارید؟
      </div>
    </Modal>
  );
}

export default RemoveUserIcon;
