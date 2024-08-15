import { Suspense } from "react";

import { Navigate } from "react-router-dom";

import { useAppSelector } from "../hooks/redux";
import { selectIsLoggedIn } from "../store/reducers/userSlice";

interface RestrictedRouteProps {
  component: React.ComponentType;
  redirectTo?: string;
}
const RestrictedRoute = ({
  component: Component,
  redirectTo = "/",
}: RestrictedRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn !== null && (
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      )}
      {isLoggedIn === true && <Navigate to={redirectTo} />}
    </>
  );
};

export default RestrictedRoute;
