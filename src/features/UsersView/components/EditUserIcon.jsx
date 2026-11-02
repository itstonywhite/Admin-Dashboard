import { BiEdit } from "react-icons/bi";
import AddUsersField from "./AddUsersFields";
import Modal from "@/components/common/Modal";

function EditUserIcon({ user, onChange }) {
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-green-500">
      <BiEdit className="text-xl" />
    </button>
  );

  return (
    // eslint-disable-next-line react-hooks/static-components
    <Modal title="ویرایش کاربر" Trigger={<Trigger />} onSubmit={onChange}>
      <AddUsersField newUser={user} onChange={onChange} />
    </Modal>
  );
}

export default EditUserIcon;
