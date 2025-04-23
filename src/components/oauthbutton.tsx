import { cn } from "@/lib/utils";
import React from "react";
import { supabase } from '@/lib/supabaseClient'
import { redirect } from "next/navigation";

export function OAuthButton({
    icon,
    label,
    onClick,
}: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="group/btn gap-2 shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
        >
            <span className="h-4 w-4 text-neutral-800 dark:text-neutral-300">
                {icon}
            </span>
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                {label}
            </span>
            <BottomGradient />
        </button>
    );
}

export function BottomGradient() {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
}

export function LabelInputContainer({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
}

export const handleLoginGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `http://192.168.1.3/auth/callback`,
        },
    })
    
    if (error) console.error('Error logging in with Google:', error.message)
    else if (data) redirect(data.url)
}
export const handleLoginGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
            redirectTo: `http://192.168.1.3/auth/callback`,
        },
    })
    
    if (error) console.error('Error logging in with Github:', error.message)
    else if (data) redirect(data.url)
}
export const handleLoginDiscord = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
            redirectTo: `http://192.168.1.3/auth/callback`,
        },
    })

    if (error) console.error('Error logging in with Discord:', error.message)
    else if (data) redirect(data.url)
}

