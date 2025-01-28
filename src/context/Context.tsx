"use client"
import { ContextType } from "@/types";
import React, { createContext, ReactNode, useState, useEffect } from "react";

export const Context = createContext<ContextType>({
    showCategory: false,
    setShowCategory: () => null,
    token: "",
    setToken: () => null
});

export const GlobalContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [showCategory, setShowCategory] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        }
    }, [token]);

    return <Context.Provider value={{ showCategory, setShowCategory, setToken, token }}>
        {children}
    </Context.Provider>;
};
