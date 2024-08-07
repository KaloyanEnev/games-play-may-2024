import { useContext } from "react";
import { login, register } from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthContext);
  const loginHandler = async (email, password) => {
    const {password : _,...result} = await login(email, password);
    changeAuthState(result);
    return result;
  };
  return loginHandler;
};

export const useRegister = () => {
  const { changeAuthState } = useContext(AuthContext);
  const registerHandler = async (email, password) => {
    const {password : _,...result} = await register(email, password);
    changeAuthState(result);
    return result;
  };
  return registerHandler;
};
