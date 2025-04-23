"use client";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/userContext";
import { useEffect } from "react";

export default function DashboardPage() {
    const { user, loading } = useUserContext();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login"); // Redirect unauthorized
        }
    }, [user, loading, router]);

    if (loading || !user) return <p className="p-4">Loading...</p>;

    return (
        <div className="p-4">
            <h1 className="text-xl font-semibold">Welcome, {user.user_metadata.firstname}!</h1>
            <p className="mt-2">This is your personalized dashboard.</p>
        </div>
    );
}
