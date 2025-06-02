// hooks/useSessionSync.ts
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/userContext";
import { supabase } from "@/lib/supabaseClient";
import type { User } from '@supabase/supabase-js';

export const useSessionSync = () => {
    const router = useRouter();
    const { setUser, setLoading } = useUserContext();

    useEffect(() => {
        const getSession = async () => {
            setLoading(true);
            const {
                data: { session },
                error,
            } = await supabase.auth.getSession();

            if (error) {
                console.error("Error fetching session:", error.message);
                setLoading(false);
                return;
            }

            const user = session?.user;

            if (user) {
                await handleUserUpsert(user);
                setUser(user);
            } else {
                setUser(null);
            }

            setLoading(false);
        };

        getSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
            const user = session?.user;

            if (user) {
                await handleUserUpsert(user);
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [setUser, setLoading, router]);

    //  handle profile insert/update into your 'profiles' table


const handleUserUpsert = async (user: User) => {
        const { email, id, user_metadata } = user;
        const { full_name, name, picture, preferred_username } = user_metadata || {};

        const [first_name = "", ...last_name_arr] = full_name?.split(" ") || name?.split(" ") || [""];
        const last_name = last_name_arr.join(" ");

        const { error } = await supabase
            .from("profiles")
            .upsert({
                id,
                email,
                first_name,
                last_name,
                avatar_url: picture || "",
                username: preferred_username || "", // empty string if not provided
            }, { onConflict: 'id' });

        if (error) {
            console.error("Profile upsert failed:", error.message);
        }
    };
};

