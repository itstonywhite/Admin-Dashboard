import SidebarHeader from "./components/SidebarHeader";
import Menu from "./components/Menu";
import menu from "../../data/menus";

function Sidebar() {
  return (
    <aside className="w-68 z-10 bg-white h-screen sticky top-0 border-l primary-border-color p-6">
      <SidebarHeader />
      <Menu menu={menu} />
    </aside>
  );
}

export default Sidebar;
