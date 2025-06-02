// Bismillah - Starting Keeza UI Revamp
// radial vhart for students failed and passed in subjects
"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Link from "next/link"
import dynamic from "next/dynamic";

const COLORS = ["#4ade80", "#ef4444"] // Green for pass, red for fail

export const data = [
  { name: "Aisha", marks: 470 },
  { name: "Kunal", marks: 250 },
  { name: "Fatima", marks: 150 },
  { name: "Rohan", marks: 220 },
  { name: "Nalini", marks: 470 },
  { name: "Sahil", marks: 500 },
  { name: "Jaspreet", marks: 270 },
  { name: "Ayush", marks: 480 },
  { name: "Zainab", marks: 300 },
  { name: "Vivek", marks: 310 },
  { name: "Mclin", marks: 190 },
  { name: "Siddharth", marks: 490 },
]

export  const performanceBrackets = [
  { bracket: "90-100%", students: 12 },
  { bracket: "80-89%", students: 28 },
  { bracket: "70-79%", students: 60 },
  { bracket: "60-69%", students: 70 },
  { bracket: "<60%", students: 35 },
]

export  const pieData = [
  { name: "Passed", value: 215 },
  { name: "Failed", value: 25 },
]

export  const topPerformers = [
  { name: "Ravi Kumar", score: "95%" },
  { name: "Sneha Verma", score: "91%" },
  { name: "Aarav Singh", score: "88%" },
  { name: "Priya Patel", score: "85%" },
  { name: "Rahul Meena", score: "84%" },
  { name: "Anjali Deshmukh", score: "83%" },
  { name: "Kartik Sinha", score: "81%" },
  { name: "Neha Thakur", score: "80%" },
  { name: "Yash Rawat", score: "78%" },
  { name: "Isha Nair", score: "77%" },
]

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false)
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

