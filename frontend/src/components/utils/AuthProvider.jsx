import { createContext, useContext, useEffect, useState, useMemo } from "react";
import api from "../utils/api"; // adjust the path

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    // Check auth status on load
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await api.get("/auth/checkAuthStatus");
                setIsLoggedIn(res.data.isLoggedIn);
                setUser(res.data.isLoggedIn ? res.data.user : null);
            } catch (err) {
                setIsLoggedIn(false);
                setUser(null);
                if (import.meta.env.DEV) console.error("Auth check failed:", err);
            }
        };
        checkAuth();
    }, []);

    // Logout function
    const logout = async () => {
        try {
            await api.post("/auth/logout");
            setIsLoggedIn(false);
            setUser(null);
        } catch (err) {
            if (import.meta.env.DEV) console.error("Logout failed:", err);
        }
    };

    const value = useMemo(
        () => ({ isLoggedIn, user, setIsLoggedIn, setUser, logout }),
        [isLoggedIn, user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
