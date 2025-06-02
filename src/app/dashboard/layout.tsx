// app/dashboard/layout.tsx
"use client";
import { useUserContext } from "@/context/userContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { user, loading } = useUserContext();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return <p className="p-4">Loading layout...</p>;
    }

    return (
        <div className="min-h-screen px-4 bg-neutral-900 text-white">
            <nav className="p-4 border-b border-neutral-700">Dashboard Nav</nav>
            <main className="p-6">{children}</main>
        </div>
    );
}
