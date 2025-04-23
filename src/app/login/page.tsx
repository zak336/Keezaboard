import React from "react";
import LoginPage from "@/components/loginform";
import { AnimatedDots } from "@/components/animatedDots";
export default function page() {
    return (
        <main className="min-h-screen items-center flex flex-col">
            <AnimatedDots />
            <div className="relative w-full h-screen  overflow-hidden flex flex-col backdrop-blur-lg items-center justify-center shadow-md">
                <LoginPage />
            </div>
        </main>

);
}