import { Outlet, useParams, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useEvent } from "../../api/eventApi";

export default function AutorGuard() {
  const { userId } = useAuth();
  const { eventId } = useParams();
  const { eventData } = useEvent(eventId);
  const navigate = useNavigate();
  const isOwner = userId === eventData._ownerId;
  if (!isOwner) {
    return navigate("/");
  }

  return <Outlet />;
}
