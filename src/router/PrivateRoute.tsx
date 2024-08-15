import { Navigate } from "react-router-dom";

import { useAppSelector } from "../hooks/redux";
import { selectIsLoggedIn } from "../store/reducers/userSlice";

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
