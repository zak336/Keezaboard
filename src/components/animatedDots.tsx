"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export function AnimatedDots() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <div className="absolute inset-0 z-0">
            {/* Top Right Dot */}
            <motion.div
                initial={isMobile ? false : { scale: 0.8, opacity: 0.2 }}
                animate={
                    isMobile
                        ? undefined
                        : { scale: [0.8, 1, 0.8], opacity: [0.2, 0.3, 0.2] }
                }
                transition={ {disable:isMobile} }
                className="absolute top-20 right-80 w-[25rem] h-[40rem] bg-gradient-to-tr from-yellow-300 to-pink-400 dark:from-yellow-400 dark:to-purple-500 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"
            />

            {/* Bottom Left Dot */}
            <motion.div
                initial={isMobile ? false : { scale: 1, opacity: 0.2 }}
                animate={
                    isMobile
                        ? undefined
                        : { scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }
                }
                transition={ {disable:isMobile} }
                className="absolute bottom-[30rem] left-10 w-60 h-[25rem] bg-gradient-to-tr from-blue-300 to-purple-400 dark:from-blue-400 dark:to-indigo-500 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"
            />
        </div>
    );
}

// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   MotionValue,
// } from "framer-motion";

// export function AnimatedDots() {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const smoothMouseX = useSpring(mouseX, {
//     stiffness: 100,
//     damping: 20,
//   });

//   const smoothMouseY = useSpring(mouseY, {
//     stiffness: 100,
//     damping: 20,
//   });

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize(); // Initial check
//     window.addEventListener("resize", handleResize);

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isMobile) {
//         mouseX.set(e.clientX);
//         mouseY.set(e.clientY);
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [isMobile, mouseX, mouseY]);

//   // ✅ FIXED: Explicitly type the `[x, y]` as `[number, number]`
//   const rotate = useTransform<[number, number], string>(
//     [smoothMouseX, smoothMouseY] as [MotionValue<number>, MotionValue<number>],
//     ([x, y]) => {
//       const dx = x - window.innerWidth / 2;
//       const dy = y - window.innerHeight / 2;
//       const rotateVal = isMobile ? 0 : dx * 0.01;
//       return `${rotateVal}deg`;
//     }
//   );

//   return (
//     <motion.div
//       className="absolute bottom-10 left-10 h-6 w-6 rounded-full bg-blue-500"
//       style={{ rotate }}
//     />
//   );
// }