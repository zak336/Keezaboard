// hooks/useLogout.ts
"use client";

import { useUserContext } from "@/context/userContext";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export const useLogout = () => {
    const { setUser, setLoading } = useUserContext();
    const router = useRouter();

    const logout = async () => {
        setLoading(true);
        await supabase.auth.signOut();
        setUser(null);
        setLoading(false);
        router.push("/login"); // or wherever your login route is
    };

    return logout;
};
