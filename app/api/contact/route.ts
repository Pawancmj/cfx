import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const { default: pool } = await import('@/lib/db');
        const data = await request.json();
        const { name, email, industry, message } = data;

        // Basic validation
        if (!name || !email || !industry || !message) {
            return NextResponse.json(
                { success: false, error: 'All fields are required.' },
                { status: 400 }
            );
        }

        // Execute query using Prisma
        let result;
        try {
            result = await pool.contact_submissions.create({
                data: {
                    name,
                    email,
                    industry,
                    message,
                }
            });
        } catch (dbError: any) {
            console.error('Database Error:', dbError);
            // Fallback for environment without DB (demo mode)
            if (process.env.NODE_ENV === 'development' || !process.env.DATABASE_URL) {
                return NextResponse.json(
                    { success: true, message: 'Message received (Demo Mode).', note: 'Database connection offline.' },
                    { status: 201 }
                );
            }
            throw dbError; // Re-throw to be caught by outer catch
        }

        return NextResponse.json(
            { success: true, message: 'Message submitted successfully.', result },
            { status: 201 }
        );

    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
