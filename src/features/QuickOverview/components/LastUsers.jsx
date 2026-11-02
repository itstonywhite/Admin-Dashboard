import TitleSection from "@/components/common/TitleSection";
import { users } from "@/data/users";
import OpenInPage from "./OpenInPage";
import UserCard from "./UserCard";

function LastUsers() {
  return (
    <div className="col-span-2">
      <TitleSection title="آخرین کاربران" />

      <div className="space-y-5 mt-5">
        {users.slice(-4).map((user) => (
          <UserCard key={user.id} {...user} />
        ))}

        <OpenInPage itemsLength={users.length} navigateTo="/users" />
      </div>
    </div>
  );
}

export default LastUsers;
