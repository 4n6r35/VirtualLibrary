/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../controllers/firebase/conection";
import PropTypes from "prop-types";

export const authCtx = createContext({
  isAuthenticated: false,
});

export const useAuth = () => {
  const ctx = useContext(authCtx);
  if (!ctx) throw new Error("No auth provider");
  return ctx;
};

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const _signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const _login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  return (
    <authCtx.Provider value={{ isAuthenticated, _signUp, _login }}>
      {children}
    </authCtx.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
