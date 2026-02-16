'use server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getUserDashboardStats(userId: string) {
  try {
    const total = await prisma.application.count({ where: { userId } });
    const selected = await prisma.application.count({ where: { userId, status: "Selected" } });
    const inProgress = await prisma.application.count({ where: { userId, status: "Applied" } });
    
    return { total, selected, inProgress };
  } catch (error) {
    return { total: 0, selected: 0, inProgress: 0 };
  }
}