// components/ClientLayout.tsx
"use client";

import { useEffect, useState } from "react";
import { UserProvider } from "@/context/userContext";
import Navbar from "@/components/ui/navbar";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) return null; // or show loading spinner

    return (
        <UserProvider>
            <Navbar />
            {children}
        </UserProvider>
    );
}
