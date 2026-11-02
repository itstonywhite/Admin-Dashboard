import { createBrowserRouter } from "react-router";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Products/Products";
import Users from "@/pages/Users/Users";
import Tickets from "@/pages/Tickets/Tickets";
import TicketDetails from "@/pages/TicketDetails/TicketDetails";
import Comments from "@/pages/Comments/Comments";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "users",
        Component: Users,
      },
      {
        path: "tickets",
        Component: Tickets,
      },
      {
        path: "tickets/:ticketId",
        Component: TicketDetails,
      },
      {
        path: "comments",
        Component: Comments,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
