import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

const ExpensesPage = lazy(() => import("@pages/Expenses/ExpensesPage"));
const LoginPage = lazy(() => import("@pages/Login/LoginPage"));
const Layout = lazy(() => import("@pages/Layout/Layout"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PrivateRoute component={ExpensesPage} redirectTo="/login" />,
      },
      {
        path: "/login",
        element: <RestrictedRoute component={LoginPage} redirectTo="/" />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
