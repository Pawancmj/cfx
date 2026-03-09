import { NextResponse } from 'next/server';

export const revalidate = 0;
export const fetchCache = 'force-no-store';

export async function GET() {
    try {
        const { default: pool } = await import('@/lib/db');

        // Fetch Contact Submissions via Prisma
        const contactRows = await pool.contact_submissions.findMany({
            orderBy: { created_at: 'desc' }
        });

        // Fetch Internship Applications via Prisma
        const internshipRows = await pool.internship_applications.findMany({
            orderBy: { created_at: 'desc' }
        });

        return NextResponse.json({
            success: true,
            data: {
                contacts: contactRows,
                internships: internshipRows
            }
        });

    } catch (error: any) {
        console.error('Admin API Detailed Error:', {
            message: error.message,
            code: error.code,
            stack: error.stack
        });
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to fetch admin data.',
                details: error.message
            },
            { status: 500 }
        );
    }
}
