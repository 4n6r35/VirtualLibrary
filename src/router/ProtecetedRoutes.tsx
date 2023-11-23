import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/ctx";

export default function ProtectedRoutes() {
    
    const auth = useAuth()

    return auth.isAuthenticated ? <Outlet/> : <Navigate to="/"/>;
}


