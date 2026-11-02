import Sidebar from "../../features/Sidebar/Sidebar";
import Topbar from "../../features/Topbar/Topbar";
import { Outlet } from "react-router";
import BackgroundOverlay from "../common/BackgroundOverlay";

function DashboardLayout() {
  return (
    <main className="flex h-dvh overflow-hidden">
      <Sidebar />

      <section className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <div className="shrink-0 px-6">
          <Topbar />
        </div>

        <div id="content" className="relative flex min-h-0 flex-1 flex-col">
          <div className="dashboard-scroll relative z-10 min-h-0 flex-1 overflow-y-scroll py-6 pl-6 pr-2">
            <div className="dashboard-scroll-content container mx-auto">
              <Outlet />
            </div>
          </div>

          <BackgroundOverlay />
        </div>
      </section>
    </main>
  );
}

export default DashboardLayout;
