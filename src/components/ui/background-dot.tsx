import { cn } from "@/lib/utils";
import React from "react";
import Registrationform from "@/components/regestrationform";

export function DotBackgroundDemo() {
  return (
    <div className="relative flex h-screen w-full gap-none items-center justify-center bg-white dark:bg-black">
      <div className={cn(
        "absolute inset-0",
        "[background-size:20px_20px]",
        "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
        "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
      )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex flex-col">
        <h1 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-6xl font-bold text-transparent sm:text-7xl">
          Register
        </h1>
        <p className="text-center text-sm mt-2 text-neutral-300 relative z-20">
          Start your journey to Success with <span className="font-semibold text-amber-400">Keezaboard</span>.
        </p>
      </div>
    </div>
  );
}
