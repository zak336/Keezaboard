"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
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
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Page() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
                data: {
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                },
                emailRedirectTo: `${location.origin}/dashboard`,
            },
        });

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        const user = data.user;
        if (!user) {
            setError("No user returned after sign up.");
            setLoading(false);
            return;
        }

        const { error: insertError } = await supabase.from("user").insert([
            {
                id: user.id,
                email: formData.email,
                first_name: formData.firstname,
                last_name: formData.lastname,
                username: null, // Will prompt them later to set it
                created_at: new Date(),
            },
        ]);

        if (insertError) {
            setError("User registered but profile creation failed: " + insertError.message);
        } else {
            setMessage("Verification link sent. Please check your email.");
        }

        setLoading(false);
    };


    return (
        <div className="shadow-input mx-auto w-full max-w-md rounded-none overflow-y-auto max-h-screen sm:py-8 p-4 md:rounded-2xl md:p-8 bg-transparent">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Welcome to Keezaboard</h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">let&apos;s get started</p>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" placeholder="Firoz" type="text" onChange={handleChange} value={formData.firstname} />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" placeholder="Khan" type="text" onChange={handleChange} value={formData.lastname} />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="lolhahaXD@fc.com" type="email" onChange={handleChange} value={formData.email} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="••••••••" type="password" onChange={handleChange} value={formData.password} />
                </LabelInputContainer>

                <button
                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Signing up..." : "Sign up →"}
                    <BottomGradient />
                </button>

                {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
                {message && <p className="mt-4 text-green-500 text-sm">{message}</p>}

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                <div className="flex flex-col space-y-4">
                    <OAuthButton onClick={handleLoginGithub} icon={<IconBrandGithub />} label="GitHub" />
                    <OAuthButton onClick={handleLoginGoogle} icon={<IconBrandGoogle />} label="Google" />
                    <OAuthButton onClick={handleLoginDiscord} icon={<IconBrandDiscord />} label="Discord" />
                    <Link href={"/onlyfans"}>
                        <button
                            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                            type="button"
                        >
                            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">OnlyFans</span>
                            <BottomGradient />
                        </button>
                    </Link>
                </div>
            </form>
            Already have an account?{" "}
            <Link href="/login">
                <span className="text-amber-400 hover:text-amber-500">Login</span>
            </Link>
        </div>
    );
}