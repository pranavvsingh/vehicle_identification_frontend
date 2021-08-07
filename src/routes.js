import React from "react";
import Auth from "./views/auth";
import Profile from "./views/profile";

const Autocheck = React.lazy(() => import("./views/autocheck"));
const Dashboard = React.lazy(() => import("./views/dashboard"));
const Auction = React.lazy(() => import("./views/auction"));
const Packages = React.lazy(() => import("./views/packages"));
const Carfax = React.lazy(() => import("./views/carfax"));
const Tutorials = React.lazy(() => import("./views/tutorials"));
const Payment = React.lazy(() => import("./reusable/payment"));
const Redirect = React.lazy(() => import("./views/redirect"));
const PurchaseHistory = React.lazy(() => import("./views/purchaseHistory"));

const routes = {
  commonRoutes: [
    { id: 2, path: "/dashboard", name: "Dashboard", component: Dashboard, showonNav: true },
    { id: 3, path: "/auction", name: "Auction", component: Auction, showonNav: true },
    { id: 4, path: "/packages", name: "Packages", component: Packages,showonNav: true },
    { id: 5, path: "/autocheck", name: "Autocheck", component: Autocheck, showonNav: true },
    { id: 6, path: "/carfax", name: "Carfax", component: Carfax, showonNav: true },
    { id: 7, path: "/tutorials", name: "Tutorials", component: Tutorials, showonNav: true },
    { id: 8, path: "/payment", name: "Payment", component: Payment ,showonNav: false},
    { id: 9, path: "/redirect", name: "Redirect", component: Redirect ,showonNav: false},
  ],
  authenticatedRoutes: [
    {
      id: 10,
      path: "/history",
      name: "History",
      component: PurchaseHistory,
      showonNav: true
    },
    {
      id: 11,
      path: "/profile",
      name: "Profile",
      component: Profile,
      showonNav: true
    },
  ],
  unauthenticatedRoutes: [
    {
      id: 12,
      path: "/auth",
      name: "Login",
      component: Auth,
      showonNav: true
    },
  ],
};

export default routes;
