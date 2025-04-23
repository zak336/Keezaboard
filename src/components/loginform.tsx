"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
    IconBrandDiscord,
} from "@tabler/icons-react";
import Link from "next/link";
import {
    OAuthButton,
    BottomGradient,
    LabelInputContainer,
    handleLoginDiscord,
    handleLoginGithub,
    handleLoginGoogle
} from "@/components/oauthbutton";
import { ToastNotification } from '@/components/toastnotification'
import { supabase } from "@/lib/supabaseClient";
import { redirect } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [toastOpen, setToastOpen] = useState(false)
    const [toastData, setToastData] = useState({
        title: '',
        message: '',
        type: 'info' as 'success' | 'error' | 'info',
    })

    const showToast = (title: string, message: string, type: 'success' | 'error' | 'info') => {
        setToastData({ title, message, type })
        setToastOpen(true)
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!email || !password) {
            showToast('Missing Credentials', 'Please enter both email and password', 'error');
            return;
        }
    
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
    
        if (error) {
            console.error('Login error:', error.message);
            showToast('Login Failed', error.message, 'error');
        } else {
            showToast('Login Successful', 'Welcome back!', 'success');
            redirect('http://192.168.1.3/auth/callback');
        }
    };
    


    return (
        <div className="shadow-input mx-auto w-full max-w-md overflow-y-auto max-h-screen sm:py-20 rounded-none bg-transparent p-4 md:rounded-2xl md:p-8">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                Welcome Back to Keezaboard
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                Log in to continue your journey
            </p>

            <form className="my-8" onSubmit={handleLogin}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="you@keezaboard.com" required />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" type="password" />
                </LabelInputContainer>

                <button
                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    type="submit"
                >
                    Log in &rarr;
                    <BottomGradient />
                </button>

                Don&apos;t you remember your password{" "}
                <Link
                    href="/register"
                    className="text-amber-400 hover:text-amber-500"
                >
                    Click here
                </Link>

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                <div className="flex flex-col space-y-4">
                    <OAuthButton onClick={handleLoginGithub} icon={<IconBrandGithub />} label="GitHub" />
                    <OAuthButton onClick={handleLoginGoogle} icon={<IconBrandGoogle />} label="Google" />
                    <OAuthButton onClick={handleLoginDiscord} icon={<IconBrandDiscord />} label="Discord" />
                    <Link href={"/onlyfans"}>
                        <button
                            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                            type="submit"
                        >
                            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                OnlyFans
                            </span>
                            <BottomGradient />
                        </button>
                    </Link>
                </div>
            </form>
            Don&apos;t have an account?{" "}
            <Link
                href="/register"
                className="text-amber-400 hover:text-amber-500"
            >
                Register
            </Link>
            <ToastNotification
				open={toastOpen}
				setOpen={setToastOpen}
				title={toastData.title}
				message={toastData.message}
				type={toastData.type}
			/>
        </div>
    );
}
