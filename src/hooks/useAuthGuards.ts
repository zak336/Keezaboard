// hooks/useAuthGuard.ts
"use client";
import { useEffect } from "react";
import { useUser } from "./useUser";
import { useRouter } from "next/navigation";

export const useAuthGuard = () => {
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);
};
