import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const { default: pool } = await import('@/lib/db');
        const formData = await request.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const university = formData.get('university') as string;
        const degree = formData.get('degree') as string;
        const linkedin = formData.get('linkedin') as string;
        const role = formData.get('role') as string;
        const resume = formData.get('resume') as File;

        if (!name || !email || !phone || !university || !degree || !role || !resume) {
            return NextResponse.json(
                { success: false, error: 'Please fill out all required fields and upload your resume.' },
                { status: 400 }
            );
        }

        // Save PDF File
        const bytes = await resume.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Create a unique filename
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        const filename = `resume-${uniqueSuffix}.pdf`;

        const uploadDir = join(process.cwd(), 'public', 'uploads');
        const filepath = join(uploadDir, filename);

        // Write file to public/uploads
        await writeFile(filepath, buffer);
        const resumeUrl = `/uploads/${filename}`;

        // Database Insertion using Prisma
        const result = await pool.internship_applications.create({
            data: {
                name,
                email,
                phone,
                university,
                degree,
                linkedin_url: linkedin || null,
                resume_url: resumeUrl,
                role
            }
        });

        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully',
            result
        }, { status: 201 });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
