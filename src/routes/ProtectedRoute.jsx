import { useContext } from "react";
import {AuthContext} from '../contexts/AuthContext'
import { Route, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user?.logado) {
    return <Navigate replace to="/login" />
  }
  return children
}