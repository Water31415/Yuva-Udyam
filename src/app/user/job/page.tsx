'use client'

import React, { useState } from 'react';
import { JobFeed } from '@/src/components/dashboard/JobFeed';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, SlidersHorizontal, MapPin, Building2, Sparkles } from 'lucide-react';

export default function JobsDiscoveryPage() {
  const categories = ["All Jobs", "Technical", "Administrative", "Research", "Defense"];

  return (
    <div className="grid grid-cols-12 gap-8 animate-in fade-in duration-700">
      
      {/* 1. SEARCH & FILTER HEADER */}
      <div className="col-span-12 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[#151921] p-6 rounded-2xl border border-slate-800 shadow-xl">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <Input 
              placeholder="Search by role, organization, or keyword..." 
              className="bg-slate-950 border-slate-800 pl-12 h-12 text-base focus:ring-blue-500/40"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button variant="outline" className="h-12 border-slate-800 bg-slate-950 text-slate-400 gap-2 flex-1 md:flex-none">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </Button>
            <Button className="h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 flex-1 md:flex-none">
              Find Jobs
            </Button>
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, i) => (
            <Badge 
              key={cat} 
              className={`cursor-pointer px-5 py-2 rounded-full border transition-all whitespace-nowrap ${
                i === 0 ? 'bg-blue-600 text-white border-blue-500' : 'bg-slate-900 text-slate-500 border-slate-800 hover:border-slate-600'
              }`}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="col-span-12 lg:col-span-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Active Notifications</h2>
          <p className="text-xs text-slate-500 font-mono">Showing 124 results</p>
        </div>
        
        {/* REUSING YOUR JOB FEED COMPONENT */}
        <JobFeed />
      </div>

      {/* 3. RIGHT SIDEBAR: AI JOB ASSISTANT */}
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <Card className="bg-gradient-to-br from-indigo-900/20 to-blue-900/10 border-blue-500/20 p-6 shadow-2xl">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            AI Career Guide
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Need help choosing?</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Our Gemini-powered engine can match your resume against all active notifications to find the best fit for your skills.
          </p>
          <Button className="w-full bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all font-bold">
            Start Smart Match
          </Button>
        </Card>

        {/* Trending Organizations */}
        <div className="bg-[#151921] rounded-2xl border border-slate-800 p-6 space-y-4">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Top Organizations</h3>
          <div className="space-y-4">
            {[
              { name: "MHRD", jobs: 12, icon: Building2 },
              { name: "ISRO", jobs: 5, icon: Building2 },
              { name: "DRDO", jobs: 8, icon: Building2 }
            ].map((org) => (
              <div key={org.name} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-blue-500/50">
                    <org.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-sm font-bold text-slate-200">{org.name}</span>
                </div>
                <Badge variant="outline" className="text-[10px] border-slate-800 text-slate-500">
                  {org.jobs} Openings
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple Card wrapper if not already in your UI folder
function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border ${className}`}>
      {children}
    </div>
  );
}