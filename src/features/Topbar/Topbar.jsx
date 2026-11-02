import Divider from "./components/Divider";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import SearchInput from "./components/SearchInput";

function Topbar() {
  return (
    <div className="w-full h-20 relative z-10 border-b primary-border-color bg-white flex items-center justify-between *:flex *:items-center *:gap-3">
      <div>
        <SearchInput />
      </div>

      <div className="gap-0!">
        <Notifications />
        <Divider />
        <Profile />
      </div>
    </div>
  );
}

export default Topbar;
