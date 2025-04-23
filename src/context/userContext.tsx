// context/UserContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient"; // adjust the import path if needed

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    loading: boolean;
    setLoading: (value: boolean) => void;
    logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initSession = async () => {
            const { data } = await supabase.auth.getSession();
            setUser(data.session?.user ?? null);
            setLoading(false);
        };

        initSession();

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const logout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, setUser, loading, setLoading, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook to access user context easily
export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
};

