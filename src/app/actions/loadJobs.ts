'use server'
import {db} from '@/lib/db';


export async function getAllJobs() {
  try {
    const jobs = await db.job.findMany({
      orderBy: {
        createdAt: 'desc' // Newest jobs first
      }
    });
    return jobs;
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}