import React from "react";

const Autocheck = React.lazy(() => import("./views/autocheck"));
const Dashboard = React.lazy(() => import("./views/dashboard"));
const Auction = React.lazy(() => import("./views/auction"));
const Packages = React.lazy(() => import("./views/packages"));
const Carfax = React.lazy(() => import("./views/carfax"));
const Tutorials = React.lazy(() => import("./views/tutorials"));
const Payment = React.lazy(() => import("./reusable/payment"));
const Redirect = React.lazy(() => import("./views/redirect"));
const PurchaseHistory = React.lazy(() => import("./views/purchaseHistory"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/auction", name: "Auction", component: Auction },
  { path: "/packages", name: "Packages", component: Packages },
  { path: "/autocheck", name: "Autocheck", component: Autocheck },
  { path: "/carfax", name: "Carfax", component: Carfax },
  { path: "/tutorials", exact: true, name: "Tutorials", component: Tutorials },
  { path: "/payment", exact: true, name: "Payment", component: Payment },
  { path: "/redirect", exact: true, name: "Redirect", component: Redirect },
  {
    path: "/history",
    exact: true,
    name: "History",
    component: PurchaseHistory,
  },
];

export default routes;
