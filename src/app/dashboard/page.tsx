import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'; // App Router only

export default async function DashboardPage() {
const supabase = createServerComponentClient({ cookies });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session?.user) {
        redirect('/login'); // ✅ Prevent render completely
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
    );
}