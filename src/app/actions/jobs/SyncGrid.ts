'use server'

import { db } from "@/lib/db";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { revalidatePath } from "next/cache";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function masterDeepSync() {
  try {
    // 1. Initialize Gemini with Search/Reasoning capability
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", // Most stable for JSON extraction
      generationConfig: { responseMimeType: "application/json" }
    });

    // 2. The Search Prompt
    // We specifically ask for February 2026 roles like ISRO, DRDO, and NTPC
    const prompt = `
      Search for active government job notifications in India for February 2026.
      Focus on Technical/Engineering roles (ISRO, DRDO, PSU through GATE, UPPSC).
      Return a list of 5 real jobs in JSON format:
      {
        "jobs": [
          {
            "role": "string",
            "organization": "string",
            "salary": "string",
            "location": "string",
            "deadline": "string",
            "skills": ["skill1", "skill2"]
          }
        ]
      }
    `;

    const result = await model.generateContent(prompt);
    const discoveredData = JSON.parse(result.response.text());

    // 3. The "Forge" Loop: Save to Neon Postgres
    let forgedCount = 0;
    for (const job of discoveredData.jobs) {
      // Check for duplicates before creating
      const exists = await db.job.findFirst({
        where: { organization: job.organization, role: job.role }
      });

      if (!exists) {
        await db.job.create({
          data: {
            ...job,
            status: "Active"
          }
        });
        forgedCount++;
      }
    }

    revalidatePath("/dashboard");
    return { success: true, count: forgedCount };

  } catch (error: any) {
    console.error("Deep Sync Error:", error.message);
    return { success: false, error: error.message };
  }
}