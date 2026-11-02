import Modal from "@/components/common/Modal";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";

function EditUserIcon({ user, onChange }) {
  const [userFullName, setUserFullName] = useState(user.fullName);
  const [userUserName, setUserUserName] = useState(user.userName);
  const [userEmail, setUserEmail] = useState(user.email);
  const [userPhoneNumber, setUserPhoneNumber] = useState(user.phoneNumber);
  const [userRole, setUserRole] = useState(user.role.value);

  const Trigger = () => (
    <button className="cursor-pointer text-xl text-green-500">
      <BiEdit className="text-xl" />
    </button>
  );

  const handleChange = (key, value) => {
    const user = {
      ...user,
      [key]: value,
    };

    onChange(user);
  };

  return (
    <Modal title="ویرایش کاربر" Trigger={<Trigger />}>
      <div>
        <p className="text-zinc-700 text-sm">نام و نام خانوادگی:</p>
        <input
          className="w-full mt-2 mb-4 p-2 border primary-border-color rounded-lg bg-gray-100/15 outline-none"
          type="text"
          placeholder="نام و نام خانوادگی..."
          value={userFullName}
          onChange={(e) => {
            setUserFullName(e.target.value);
            handleChange("fullName", e.target.value);
          }}
        />
      </div>
      <div>
        <p className="text-zinc-700 text-sm">نام کاربری:</p>
        <input
          className="w-full mt-2 mb-4 p-2 border primary-border-color rounded-lg bg-gray-100/15 outline-none"
          type="text"
          placeholder="نام کاربری..."
          value={userUserName}
          onChange={(e) => {
            setUserUserName(e.target.value);
            handleChange("userName", e.target.value);
          }}
        />
      </div>
      <div>
        <p className="text-zinc-700 text-sm">ایمیل کاربر:</p>
        <input
          className="w-full mt-2 mb-4 p-2 border primary-border-color rounded-lg bg-gray-100/15 outline-none"
          type="email"
          placeholder="ایمیل..."
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
            handleChange("email", e.target.value);
          }}
        />
      </div>
      <div>
        <p className="text-zinc-700 text-sm">شماره موبایل:</p>
        <input
          className="w-full mt-2 mb-4 p-2 border primary-border-color rounded-lg bg-gray-100/15 outline-none"
          type="number"
          placeholder="موبایل کاربر..."
          value={userPhoneNumber}
          onChange={(e) => {
            setUserPhoneNumber(Number(e.target.value));
            handleChange("phoneNumber", Number(e.target.value));
          }}
        />
      </div>
      <div>
        <select
          className="block mt-1 mb-2 px-3 rounded-md bg-linear-to-t from-zinc-100/70 shadow placeholder:text-sm h-10 border outline-none primary-border-color w-full"
          value={String(user.role.label)}
          onChange={(e) => {
            setUserRole(e.target.value);
            handleChange("role", {
              label:
                e.target.value === "USER"
                  ? "کاربر"
                  : e.target.value === "ADMIN"
                    ? "ادمین"
                    : e.target.value === "SUPPORT"
                      ? "پشتیبانی"
                      : "",
              value: e.target.value,
            });
          }}
        >
          <option value="USER">کاربر</option>
          <option value="ADMIN">کاربر</option>
          <option value="SUPPORT">پشتیبان</option>
        </select>
      </div>
      <div>
        <p className="text-zinc-700 text-sm">ارشدیت کاربر</p>
        <input
          className="w-full mt-2 mb-4 p-2 border primary-border-color rounded-lg bg-gray-100/15 outline-none"
          type="text"
          placeholder="نقش کاربر..."
          value={
            userRole === "USER"
              ? "کاربر"
              : userRole === "ADMIN"
                ? "ادمین"
                : userRole === "SUPPORT"
                  ? "پشتیبان"
                  : ""
          }
          onChange={(e) => setUserRole(e.target.value === "")}
        />
      </div>
    </Modal>
  );
}

export default EditUserIcon;
