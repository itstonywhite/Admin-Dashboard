import clsx from "clsx";
import { useMemo, useState } from "react";
import Table from "@/components/common/Table/Table";
import TableRow from "@/components/common/Table/elements/TableRow";
import TableBody from "@/components/common/Table/elements/TableBody";
import TableCell from "@/components/common/Table/elements/TableCell";
import TableHead from "@/components/common/Table/elements/TableHead";
import TableHeadCell from "@/components/common/Table/elements/TableHeadCell";
import { users, usersAllTableHeadRow } from "@/data/users";
import Modal from "@/components/common/Modal";
import RemoveUserIcon from "./components/RemoveUserIcon";
import EditUserIcon from "./components/EditUserIcon";
import AddUsersFields from "./components/AddUsersFields";

function UsersTableView() {
  const [lastUsers, setLastUsers] = useState([...users]);
  const [paginatedUsers, setPaginatedUsers] = useState([...users]);
  const [newUser, setNewUser] = useState({
    fullName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    role: { label: "", value: "" },
    profile: "/images/profile-avatar.jpg",
  });

  const isThereUsers = lastUsers.length !== 0;

  const reversedUsers = useMemo(
    () => [...paginatedUsers].reverse(),
    [paginatedUsers],
  );

  const createNewUser = () => {
    setPaginatedUsers((prevUsers) => [
      ...prevUsers,
      { ...newUser, id: crypto.randomUUID() },
    ]);
    setNewUser({
      fullName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      role: "",
      profile: "/images/profile-avatar.jpg",
    });
  };

  const Buttons = (
    <Modal
      title="ایجاد کاربر جدید"
      onSubmit={createNewUser}
      Trigger={
        <button className="primary-bg px-3 py-1">ایجاد کاربر جدید</button>
      }
    >
      <AddUsersFields newUser={newUser} onChange={setNewUser} />
    </Modal>
  );

  const removeUser = (id) => {
    const newUsers = lastUsers.filter((user) => user.id !== id);
    setLastUsers(newUsers);
  };

  return (
    <div>
      <Table
        header={{
          title: `مدیریت کاربران (${users.length} کاربر)`,
          Buttons: Buttons,
        }}
        isProductAvailable={isThereUsers}
        pagination={{
          items: reversedUsers,
          setItems: setLastUsers,
          itemsPerPage: 5,
        }}
      >
        {isThereUsers ? (
          <>
            <TableHead>
              {usersAllTableHeadRow.map((row) => (
                <TableHeadCell key={row}>{row}</TableHeadCell>
              ))}
            </TableHead>

            <TableBody>
              {lastUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id.slice(0, 10)}...</TableCell>
                  <TableCell>{user.fullName}</TableCell>
                  <TableCell>{user.userName}</TableCell>
                  <TableCell>
                    <p className={"link-text"}>{user.email}</p>
                  </TableCell>
                  <TableCell>
                    <p className={"link-text"}>{user.phoneNumber}</p>
                  </TableCell>
                  <TableCell>
                    <p
                      className={clsx(
                        user.role.value === "USER"
                          ? "py-0.5 px-2 border-2 rounded text-zinc-900 bg-green-500"
                          : user.role.value === "ADMIN"
                            ? "py-0.5 px-2 border-2 rounded text-zinc-900 bg-blue-500"
                            : user.role.value === "SUPPORT"
                              ? "py-0.5 px-2 border-2 rounded text-zinc-900 bg-yellow-500"
                              : "",
                      )}
                    >
                      {user.role.label}
                    </p>
                  </TableCell>
                  <TableCell>
                    <RemoveUserIcon user={user} handler={removeUser} />
                    <EditUserIcon user={user} onChange={setNewUser} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        ) : (
          <h2 className="text-center text-lg font-bold text-red-400 mb-2">
            کاربری وجود ندارد
          </h2>
        )}
      </Table>
    </div>
  );
}

export default UsersTableView;
