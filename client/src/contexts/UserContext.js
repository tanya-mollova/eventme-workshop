import { createContext, useContext } from "react";

export const UserContext = createContext({
  id: "",
  email: "",
  userName: "",
  accessToken: "",
  userLoginHandler: () => null,
  userLogoutHandler: () => null,
});

export function useUserContext() {
  const data = useContext(UserContext);
  return data;
}
