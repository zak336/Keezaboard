"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser"; // your custom hook

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useUser(); // pulls from userContext

    return (
        <nav className="fixed w-full z-50 backdrop-blur-md bg-black/40 text-white shadow-lg border-b border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-2xl font-extrabold text-amber-400 tracking-wide"
                >
                    Keezaboard
                </Link>

                <div className="hidden md:flex gap-6 items-center">
                    <Link
                        href="/dashboard"
                        className="hover:text-amber-400 hover:bg-white/10 px-3 py-1 rounded transition duration-200"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/about"
                        className="hover:text-amber-400 hover:bg-white/10 px-3 py-1 rounded transition duration-200"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="hover:text-amber-400 hover:bg-white/10 px-3 py-1 rounded transition duration-200"
                    >
                        Contact
                    </Link>

                    {user ? (
                        <>
                            <Button
                                variant="ghost"
                                onClick={logout}
                                className="text-white hover:text-red-400 px-4 py-2"
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button
                                    variant="ghost"
                                    className="text-white hover:text-amber-400 px-4 py-2"
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link href="/register">
                                <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 py-2">
                                    Register
                                </Button>
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col bg-black/80 backdrop-blur-lg px-4 pb-4 pt-2 gap-4 text-white animate-slide-down">
                    <Link
                        href="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-amber-400 hover:bg-white/10 px-3 py-2 rounded"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-amber-400 hover:bg-white/10 px-3 py-2 rounded"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-amber-400 hover:bg-white/10 px-3 py-2 rounded"
                    >
                        Contact
                    </Link>

                    {user ? (
                        <Button
                            onClick={() => {
                                logout();
                                setIsOpen(false);
                            }}
                            variant="ghost"
                            className="text-white hover:text-red-400 px-4 py-2"
                        >
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button
                                    variant="ghost"
                                    onClick={() => setIsOpen(false)}
                                    className="text-white hover:text-amber-400 px-4 py-2"
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link href="/register">
                                <Button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 py-2"
                                >
                                    Register
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}
