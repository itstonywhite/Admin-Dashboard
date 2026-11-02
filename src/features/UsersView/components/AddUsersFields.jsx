import { userRoles } from "@/data/users";

function AddUsersField({ newUser, onChange }) {
  const fields = [
    {
      label: "نام و نام خانوادگی",
      key: "fullName",
      type: "text",
    },
    {
      label: "نام کاربری",
      key: "userName",
      type: "text",
    },
    {
      label: "ایمیل",
      key: "email",
      type: "email",
    },
    {
      label: "شماره تلفن",
      key: "phoneNumber",
      type: "number",
    },
    {
      label: "نقش کاربر",
      key: "role",
      type: "select",
    },
    {
      label: "عکس پروفایل",
      key: "profile",
      type: "text",
    },
  ];

  const handleChange = (key, value) => {
    const user = {
      ...newUser,
      [key]: value,
    };

    onChange(user);
  };

  return (
    <div>
      {fields.map((field) => (
        <div key={field.key}>
          <label className="text-sm select-none text-neutral-700">
            {" "}
            {field.label}:{" "}
          </label>
          {field.type === "select" ? (
            <select
              className="block mt-1 mb-2 px-3 rounded-md bg-linear-to-t from-zinc-100/70 shadow placeholder:text-sm h-10 border outline-none primary-border-color w-full"
              value={newUser.role.value}
              onChange={(e) => {
                const selectedRole = userRoles.find(
                  (r) => r.value === e.target.value,
                );
                handleChange("role", selectedRole);
              }}
            >
              <option value="">انتخاب کنید</option>
              <option value="USER">کاربر</option>
              <option value="ADMIN">مدیر</option>
              <option value="SUPPORT">پشتیبانی</option>
            </select>
          ) : (
            <input
              type={field.type}
              onChange={(e) => handleChange(field.key, e.target.value)}
              value={newUser[field.key]}
              className="block mt-1 mb-2 px-3 rounded-md bg-linear-to-t from-zinc-100/70 shadow placeholder:text-sm h-10 border outline-none primary-border-color w-full"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default AddUsersField;
