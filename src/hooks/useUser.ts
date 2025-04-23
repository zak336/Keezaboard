// hooks/useUser.ts
"use client";
import { useUserContext } from "@/context/userContext";

export const useUser = () => {
    return useUserContext();
};
