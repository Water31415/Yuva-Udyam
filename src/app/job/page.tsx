'use client'

import { StatsCards } from '@/src/components/dashboard/StatsCards';
import { JobFeed } from '@/src/components/dashboard/JobFeed';
import { Bell, User, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UpcomingInterview } from '@/src/components/dashboard/UpcomingInterview';
import { Navbar } from '@/src/components/dashboard/NavBar';
import { ResumeScorer } from '@/src/components/dashboard/ResumeScorer';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-slate-300 p-6 font-sans">
      {/* Navbar Section */}
      <Navbar />
      <nav className="flex items-center justify-between mb-8 px-4">
        <div className="flex items-center gap-2">
          </div>
        <div className="flex items-center gap-4">
        
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8">
        {/* LEFT COLUMN (9 Units) */}
        <div className="col-span-12 lg:col-span-9 space-y-8">
          <header>
            <h1 className="text-3xl font-bold text-white mb-1">Welcome Back, Raj!</h1>
            <p className="text-slate-500 text-sm">Track your job application status here. [cite: 33]</p>
          </header>

          {/* COMPONENT: Stats Cards */}
          <StatsCards />

          {/* PLACEHOLDER: The Job List will go here in Step 2 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Live Job Feed</h2>
              <div className="flex gap-2">
                <Input placeholder="Search..." className="bg-[#151921] border-slate-800 w-64 h-9" />
                <Button variant="outline" size="icon" className="h-9 w-9 bg-[#151921] border-slate-800"><Filter className="w-4 h-4" /></Button>
              </div>
            </div>
            <JobFeed />
          </div>
        </div>

        {/* RIGHT COLUMN (3 Units) - Sidebar */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
           {/* Sidebar Components will be added here one by one */}
           <ResumeScorer />
          <UpcomingInterview />
        </div>
      </div>
    </div>
  );
}