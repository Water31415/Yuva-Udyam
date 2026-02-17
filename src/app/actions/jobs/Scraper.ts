'use server'

import * as cheerio from 'cheerio';
import { db } from "@/lib/db";
import { discoverUnlistedJob } from "./Analyse"; // Your existing Gemini parser

export async function scrapeGovtPortal() {
  try {
    // We'll target the UPSC "What's New" as a primary example
    const TARGET_URL = "https://upsc.gov.in/whats-new";
    const response = await fetch(TARGET_URL);
    const html = await response.text();
    const $ = cheerio.load(html);

    const discoveredJobs: string[] = [];

    // Find all PDF links in the "What's New" section
    $('a[href$=".pdf"]').each((index, element) => {
      const link = $(element).attr('href');
      const text = $(element).text().toLowerCase();

      // Filter for actual job/recruitment notifications
      if (link && (text.includes('recruitment') || text.includes('notification'))) {
        // Construct full URL if it's relative
        const fullUrl = link.startsWith('http') ? link : `https://upsc.gov.in${link}`;
        discoveredJobs.push(fullUrl);
      }
    });

    console.log(`Found ${discoveredJobs.length} potential notifications.`);

    // For the first discovery, let's process the latest one found
    if (discoveredJobs.length > 0) {
       const latestPdfUrl = discoveredJobs[0];
       
       // NEXT SUB-STEP: Convert this URL to Base64 and pass to Gemini
       // This automates the "PDF-to-Data" translation we planned
       await processDiscoveredPdf(latestPdfUrl);
    }

    return { success: true, count: discoveredJobs.length };
  } catch (error) {
    console.error("Scraper Error:", error);
    return { success: false };
  }
}

async function processDiscoveredPdf(url: string) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');

  // Trigger your existing Gemini Parser to "Forge" the job into Neon Postgres
  return await discoverUnlistedJob(base64);
}