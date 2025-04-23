"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallback() {
    useEffect(() => {
        const handleAuth = async () => {
            const {
                data: { session },
                error,
            } = await supabase.auth.getSession();

            if (error || !session) {
                console.error("Auth failed", error);
                redirect("/login");
                return;
            }

            const user = session.user;

            const id = user.id;
            const email = user.email ?? "no-email@example.com"; // fallback
            const metadata = user.user_metadata || {};

            const firstname =
                metadata.firstname ||
                metadata.full_name?.split(" ")[0] ||
                "";
            const lastname =
                metadata.lastname ||
                metadata.full_name?.split(" ").slice(1).join(" ") ||
                "";
            const username =
                metadata.username || (email.includes("@") ? email.split("@")[0] : id);

            // Check if user exists
            const { data: existingUser, error: userError } = await supabase
                .from("users")
                .select("id")
                .eq("id", id)
                .single();

            if (!existingUser) {
                const { error: insertError } = await supabase.from("users").insert({
                    id,
                    email,
                    firstname,
                    lastname,
                    username,
                });

                if (insertError) {
                    console.error("User insert error:", insertError.message);
                }
            }

            redirect("/dashboard");
        };

        handleAuth();
    }, []);

    return (
        <p className="text-center mt-10 text-neutral-600 dark:text-neutral-300">
            Processing login...
        </p>
    );
}
