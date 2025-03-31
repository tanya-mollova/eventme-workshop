import { UserContext } from "../contexts/UserContext";
import useLocalStorage from "../hooks/useLocalStorage";

export default function UserProvider({ children }) {
  const [authData, setAuthData] = useLocalStorage("auth", {});
  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  };
  const userLogoutHandler = () => {
    setAuthData({});
  };

  return (
    <UserContext.Provider
      value={{ ...authData, userLoginHandler, userLogoutHandler }}
    >
      {children}
    </UserContext.Provider>
  );
}
