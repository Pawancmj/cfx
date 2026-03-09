import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Extremely simple hardcoded admin credentials
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin@123';

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            // Set an HTTP-Only secure cookie
            const cookieStore = await cookies();
            cookieStore.set({
                name: 'admin_session',
                value: 'authenticated',
                httpOnly: true,
                path: '/',
                maxAge: 60 * 60 * 24, // 1 day
            });

            return NextResponse.json({ success: true, message: 'Login successful' });
        } else {
            return NextResponse.json({ success: false, error: 'Invalid username or password' }, { status: 401 });
        }
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}
