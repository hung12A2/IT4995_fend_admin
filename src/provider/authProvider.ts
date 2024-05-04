import { AuthProvider } from "react-admin";
import { signIn } from "@/api/auth.api";

export type Credentials = {
  email: string;
  password: string;
};

const login = async ({ email, password }: Credentials): Promise<boolean> => {
  try {
    await signIn(email, password);
    return true;
  } catch (error) {
    console.log("err", error);
    throw error;
  }
};

const logout = async () => {
  localStorage.removeItem("user");
  return Promise.resolve();
};

const checkError = (error: any) => {
  const status = error.status;
  if (status === 401) {
    localStorage.removeItem("user");
    return Promise.reject();
  }

  return Promise.resolve();
};

const checkAuth = (params: any) => {
  return localStorage.getItem("user") ? Promise.resolve() : Promise.reject();
};

const getPermissions = (params: any) => {
  const auth: any = localStorage.getItem("user");

  const { permissions } = auth;
  return Promise.resolve({ permissions });
};


const getIdentity = () => {
  const user: any = localStorage.getItem("user");
  delete user.password;
  const identity = { ...user };
  return Promise.resolve(identity);
};

export const authProvider: AuthProvider = {
  login,
  logout,
  checkAuth,
  checkError,
  getPermissions,
  getIdentity,
};
