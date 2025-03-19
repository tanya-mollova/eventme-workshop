import { createContext } from "react";

export const UserContext = createContext({
  id: "",
  email: "",
  userName: "",
  accessToken: "",
  userLoginHandler: () => null,
  userLogoutHandler: () => null,
});
