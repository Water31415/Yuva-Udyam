'use client'

import React from 'react';
import { Navbar } from '../../../components/dashboard/NavBar';
import { UserDetails } from '../../../components/dashboard/UserDetails';
import { StatsCards } from '../../../components/dashboard/StatsCards';
import { JobFeed } from '../../../components/dashboard/JobFeed';
import { ActiveApplications } from '../../../components/dashboard/UserDashBoard/ActiveApplications';
import { UpcomingInterview } from '../../../components/dashboard/UpcomingInterview';
import { ResumeScorer } from '../../../components/dashboard/ResumeScorer';
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Trophy, Target } from 'lucide-react';
import { scrapeGovtPortal } from '@/src/app/actions/jobs/Scraper';
import { toast } from "sonner";
import { RefreshCw } from "lucide-react";
import { Button } from '@/components/ui/button';
import { SyncButton } from '@/src/components/dashboard/SyncButton';

export default function DashboardPage() {
  // In a hackathon, you can hardcode a 'test-user-id' that exists in your DB
  const MOCK_USER = {
    id: "user_2026_forge",
    name: "Raj Singh"
  };



  return (
    <div className="min-h-screen bg-[#0B0E14] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* 1. DETACHED NAVIGATION */}


      <main className="max-w-[1400px] mx-auto px-6 py-6 grid grid-cols-12 gap-6">

        {/* LEFT COLUMN: Main Activity (9 Units) */}
        <div className="col-span-12 lg:col-span-9 space-y-8">


          {/* 2. IDENTITY SECTION */}
          <UserDetails name={MOCK_USER.name} id={MOCK_USER.id} />

          {/* 3. DYNAMIC IMPACT CARDS */}
          <StatsCards />

          {/* 4. ACTIVE TRACKING (The Relational DB Component) */}
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ActiveApplications userId={MOCK_USER.id} />
          </section>

          {/* 5. LIVE NATIONAL FEED (The Gemini PDF Extraction Component) */}
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-blue-500" />
                <h2 className="text-xl font-semibold text-white">
                  National Job Feed
                </h2>
              </div>

              <div className="flex items-center gap-4">
                <SyncButton />
                <p className="text-xs text-slate-500 font-mono">
                  Real-time DB Sync Active
                </p>
              </div>
            </div>

            <JobFeed />
          </section>
        </div>

        {/* RIGHT COLUMN: AI Intelligence Sidebar (3 Units) */}
      <div className="col-span-12 lg:col-span-3 space-y-6">


          {/* 6. GOOGLE MEET & INTERVIEW COMPONENT */}
          <UpcomingInterview />

          {/* 7. RESUME INTELLIGENCE (Gemini Scorer) */}
          <ResumeScorer />

          {/* 8. AI ANALYTICS WIDGET (Final Touch) */}
          <Card className="bg-gradient-to-br from-blue-600/10 to-transparent border-slate-800 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-20 h-20" />
            </div>
            <CardContent className="p-6 space-y-4 relative z-10">
              <h3 className="text-sm font-bold text-blue-400 flex items-center gap-2">
                <Trophy className="w-4 h-4" /> Performance Insights
              </h3>
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  Your average AI Interview score is <span className="text-white font-bold">78%</span>.
                  You are in the <span className="text-emerald-400 font-bold">top 15%</span> of candidates
                  applying for Technical roles this week.
                </p>
              </div>
              <div className="pt-2">
                <div className="w-full bg-slate-800 h-1 rounded-full">
                  <div className="bg-blue-500 w-3/4 h-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SYSTEM STATUS */}
          <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              Gemini 1.5 Flash Online
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

