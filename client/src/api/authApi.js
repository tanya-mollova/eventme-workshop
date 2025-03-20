import { useEffect } from "react";
import { useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {
  // const abortRef = useRef(new AbortController());

  const login = async (email, password) =>
    request.post(
      `${baseUrl}/login`,
      { email, password }
      // { signal: abortRef.current.signal }
    );

  // useEffect(() => {
  //     const abortController = abortRef.current;

  //     return () => abortController.abort();
  // }, []);
  return {
    login,
  };
};

export const useRegister = () => {
  // const abortRef = useRef(new AbortController());

  const register = async (username, email, password) =>
    request.post(
      `${baseUrl}/register`,
      { username, email, password }
      // { signal: abortRef.current.signal }
    );

  // useEffect(() => {
  //     const abortController = abortRef.current;

  //     return () => abortController.abort();
  // }, []);

  return {
    register,
  };
};
