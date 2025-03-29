import { useEffect, useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {
  const login = async (email, password) => {
    const response = await request.post(`${baseUrl}/login`, {
      email,
      password,
    });
    return response;
  };
  return {
    login,
  };
};

export const useRegister = () => {
  const register = async (username, email, password) => {
    const response = await request.post(
      `${baseUrl}/register`,
      { username, email, password }
      // { signal: abortRef.current.signal }
    );
    return response;
  };

  return {
    register,
  };
};
export const useLogout = () => {
  const { accessToken, userLogoutHandler } = useContext(UserContext);

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    const options = {
      headers: {
        "X-Authorization": accessToken,
      },
    };

    request.get(`${baseUrl}/logout`, null, options).then(userLogoutHandler);
  }, [accessToken, userLogoutHandler]);

  return {
    isLoggedOut: !!accessToken,
  };
};
