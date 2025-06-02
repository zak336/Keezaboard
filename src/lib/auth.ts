// lib/auth.ts
"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/dist/client/components/navigation.react-server";
import { cookies } from "next/headers";

export async function getUserOrRedirect() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    return user;
}

export async function logout() {
    const supabase = createServerComponentClient({ cookies });
    await supabase.auth.signOut();
}