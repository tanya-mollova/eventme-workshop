import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function GuestGuard() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/my-events" />;
  }

  return <Outlet />;
}
