import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export async function GET() {
    try {
        const count = await prisma.internshipVacancy.count({
            where: { is_active: true }
        });
        return NextResponse.json({ success: true, count });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to fetch vacancy count' }, { status: 500 });
    }
}
