import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";

// Create Authentication Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    // Check authentication status on app load
    useEffect(() => {
        axios.get("http://localhost:8080/auth/checkAuthStatus", { withCredentials: true })
            .then((res) => {
                setIsLoggedIn(res.data.isLoggedIn);
                setUser(res.data.isLoggedIn ? res.data.user : null);
            })
            .catch(() => {
                setIsLoggedIn(false);
                setUser(null);
            });
    }, []);

    // Logout function
    const logout = async () => {
        try {
            await axios.post("http://localhost:8080/auth/logout", {}, { withCredentials: true });
            setIsLoggedIn(false);
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    // Memoize context value for performance
    const value = useMemo(() => ({ isLoggedIn, user, setIsLoggedIn, logout }), [isLoggedIn, user]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
