import React from "react";
import RegistrationForm from "@/components/regestrationform";
import { AnimatedDots } from "@/components/animatedDots";

export default function page() {
    return (
        <main className="min-h-screen overflow-hidden items-center flex gap-7 flex-col">
                <AnimatedDots />
            <div className="relative w-full h-screen overflow-hidden flex flex-col backdrop-blur-lg items-center justify-center shadow-md">
                <RegistrationForm />
            </div>
        </main>
    );
}

// const BottomGradient = () => {
//     return (
//         <>
//             <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
//             <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
//         </>
//     );
// };

// const LabelInputContainer = ({
//     children,
//     className,
// }: {
//     children: React.ReactNode;
//     className?: string;
// }) => {
//     return (
//         <div className={cn("flex w-full flex-col space-y-2", className)}>
//             {children}
//         </div>
//     );
// };