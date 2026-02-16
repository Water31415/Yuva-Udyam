'use server'
import {db} from '@/lib/db';

export async function getUserApplications(userId: string) {
  try {
    const applications = await db.application.findMany({
      where: { userId: userId },
      include: {
        job: true,       // Get the job details (title, org)
        interview: true  // Get the AI interview score if it exists
      },
      orderBy: { createdAt: 'desc' }
    });
    return applications;
  } catch (error) {
    console.error("Fetch Applications Error:", error);
    return [];
  }
}