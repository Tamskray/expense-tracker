import { Navigate } from "react-router-dom";

import { selectIsLoggedIn } from "@store/reducers/userSlice";

import { useAppSelector } from "@hooks/redux";

interface PrivateRouteProps {
  component: React.ComponentType;
  redirectTo?: string;
}

const PrivateRoute = ({
  component: Component,
  redirectTo = "/login",
}: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
