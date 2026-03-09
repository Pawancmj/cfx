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
        const result = await pool.contact_submissions.create({
            data: {
                name,
                email,
                industry,
                message,
            }
        });

        return NextResponse.json(
            { success: true, message: 'Message submitted successfully.', result },
            { status: 201 }
        );

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
