// Bismillah - Starting Keeza UI Revamp
// radial vhart for students failed and passed in subjects
"use client"
import { Button } from "@/components/ui/button"
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Link from "next/link"



export default function Dashboard() {
  return (
    <div className="bg-neutral-900 dark flex flex-col items-center justify-center relative w-full h-screen px-4 gap-6">
      <div className="z-10 text-center max-w-4xl space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 via-white to-white">
          Keezaboard
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 dark:text-neutral-300">
          Personalized student performance dashboard.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link href="/login"><Button className="px-8 py-6" variant="Login">Login</Button></Link>
          <Link href="/register"><Button className="px-8 py-6" variant="Register">Register</Button></Link>
        </div>
      </div>

      <p className="text-center text-lg md:text-2xl font-medium text-neutral-300 max-w-4xl px-4 leading-relaxed z-10">
        Visualize your academic progress with <span className="text-yellow-500 font-semibold">Keezaboard</span>. Transform grades into insights, identify strengths, and focus your study efforts where they matter most—all in one clear, personalized view.
      </p>

      <ShootingStars />
      <StarsBackground />
    </div>

  )
}

