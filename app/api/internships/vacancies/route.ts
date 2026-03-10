import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

// GET: Fetch all vacancies
export async function GET() {
    try {
        const vacancies = await prisma.internshipVacancy.findMany({
            orderBy: { created_at: 'desc' }
        });
        return NextResponse.json({ success: true, data: vacancies });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to fetch vacancies' }, { status: 500 });
    }
}

// POST: Add a new vacancy
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, description, location, type } = body;

        if (!title || !description || !location || !type) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        const vacancy = await prisma.internshipVacancy.create({
            data: { title, description, location, type }
        });

        return NextResponse.json({ success: true, data: vacancy }, { status: 201 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to create vacancy' }, { status: 500 });
    }
}

// PATCH: Update a vacancy
export async function PATCH(request: Request) {
    try {
        const body = await request.json();
        const { id, ...data } = body;

        if (!id) {
            return NextResponse.json({ success: false, error: 'Missing vacancy ID' }, { status: 400 });
        }

        const vacancy = await prisma.internshipVacancy.update({
            where: { id: parseInt(id) },
            data
        });

        return NextResponse.json({ success: true, data: vacancy });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to update vacancy' }, { status: 500 });
    }
}

// DELETE: Remove a vacancy
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ success: false, error: 'Missing vacancy ID' }, { status: 400 });
        }

        await prisma.internshipVacancy.delete({
            where: { id: parseInt(id) }
        });

        return NextResponse.json({ success: true, message: 'Vacancy deleted successfully' });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to delete vacancy' }, { status: 500 });
    }
}
