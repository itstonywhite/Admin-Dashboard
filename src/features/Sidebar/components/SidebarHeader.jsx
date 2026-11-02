import { Link } from "react-router";

function SidebarHeader() {
  return (
    <div className="pb-6 border-b primary-border-color">
      <Link to="/" className="flex items-center gap-3">
        <img src="/images/logo.png" alt="logo" className="size-6" />
        <span className="font-black text-zinc-900">پنل مدیر</span>
      </Link>
    </div>
  );
}

export default SidebarHeader;
