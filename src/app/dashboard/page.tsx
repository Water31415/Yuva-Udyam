'use client'

import React from 'react';
import { 
  Briefcase, CheckCircle2, XCircle, Clock, 
  Search, Filter, Calendar, Video, ChevronRight, 
  MoreHorizontal, Bell, User 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const stats = [
  { label: 'Total Applied', count: 24, change: '+2 past week', icon: Briefcase, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { label: 'Selected', count: 7, change: '+1 past week', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { label: 'Withdrawn', count: 5, change: '-1 past week', icon: XCircle, color: 'text-rose-400', bg: 'bg-rose-400/10' },
  { label: 'Still In Progress', count: 12, change: '+3 past week', icon: Clock, color: 'text-sky-400', bg: 'bg-sky-400/10' },
];

const applications = [
  { title: 'Chemical Architect', org: 'MHRD', date: 'Apr 20, 2024', status: 'Selected', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  { title: 'Data Analyst', org: 'ISRO', date: 'Apr 17, 2024', status: 'Withdrawn', color: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
  { title: 'Stenographer', org: 'SSC', date: 'Apr 15, 2024', status: 'Withdrawn', color: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
  { title: 'Software Developer', org: 'NPCIL', date: 'Apr 12, 2024', status: 'Applied', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  { title: 'Research Scientist', org: 'ICMR', date: 'Apr 10, 2024', status: 'Withdrawn', color: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
];

export default function HighFidelityDashboard() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-slate-300 p-6 font-sans">
      {/* Navbar Mockup */}
      <nav className="flex items-center justify-between mb-8 px-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xl">Y</div>
            <span className="font-bold text-lg tracking-tight text-white uppercase">Yuva Udyam</span>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <span className="text-blue-500 border-b-2 border-blue-500 pb-1 cursor-pointer">Jobs</span>
            <span className="hover:text-white cursor-pointer transition-colors">Dashboard</span>
            <span className="hover:text-white cursor-pointer transition-colors">Courses</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 cursor-pointer hover:text-white" />
          <div className="w-8 h-8 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-12 lg:col-span-9 space-y-8">
          
          <header>
            <h1 className="text-2xl font-bold text-white mb-1">Welcome Back, Raj!</h1>
            <p className="text-slate-500 text-sm">Track your job application status here.</p>
          </header>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-[#151921] border-slate-800 shadow-xl hover:border-slate-700 transition-all">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${stat.bg}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</span>
                      <span className="text-2xl font-bold text-white">{stat.count}</span>
                    </div>
                    <p className={`text-[10px] mt-1 ${stat.change.includes('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {stat.change}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Applications Table Area */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">My Applications</h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input placeholder="Search..." className="bg-[#151921] border-slate-800 pl-10 w-64 h-9 text-sm focus:ring-blue-500/50" />
                </div>
                <Button variant="outline" size="icon" className="h-9 w-9 bg-[#151921] border-slate-800">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Card className="bg-[#151921] border-slate-800 shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-500 font-bold uppercase tracking-tighter">
                      <th className="px-6 py-4">Job Title</th>
                      <th className="px-6 py-4">Organization</th>
                      <th className="px-6 py-4">Applied On</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {applications.map((app, i) => (
                      <tr key={i} className="hover:bg-slate-800/20 transition-colors group">
                        <td className="px-6 py-4 font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{app.title}</td>
                        <td className="px-6 py-4 text-slate-400">{app.org}</td>
                        <td className="px-6 py-4 text-slate-500 font-mono text-xs">{app.date}</td>
                        <td className="px-6 py-4">
                          <Badge className={`px-3 py-1 rounded-full border ${app.color}`}>
                            {app.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <Card className="bg-[#151921] border-slate-800 shadow-xl">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  Upcoming Interview
                </div>
                <MoreHorizontal className="w-4 h-4 text-slate-500 cursor-pointer" />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Wed, Apr 24 | 10:00am - 10:30am</p>
                  <h3 className="font-bold text-slate-200">Chemical Architect at MHRD</h3>
                  <Badge className="mt-2 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Confirmed</Badge>
                </div>

                <div className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 shadow-lg shadow-blue-500/20">
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-white font-bold text-sm">Google Meet Integration</h4>
                      <p className="text-blue-100 text-[10px] mt-1">Video interview capabilities enabled</p>
                    </div>
                    <Button className="bg-white text-blue-600 hover:bg-slate-100 font-bold px-8 h-10 w-full rounded-lg">
                      Join
                    </Button>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-white/20 transition-all" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mini Interview List */}
          <Card className="bg-[#151921] border-slate-800 shadow-xl overflow-hidden">
             <div className="p-4 border-b border-slate-800 flex justify-between items-center">
               <span className="text-xs font-bold uppercase text-slate-500">Quick View</span>
               <ChevronRight className="w-4 h-4 text-slate-500" />
             </div>
             <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                   <div className="text-sm">
                      <p className="font-bold text-slate-200">Chemical Architect</p>
                      <p className="text-xs text-slate-500">MHRD</p>
                   </div>
                   <Badge className="bg-emerald-500 text-white h-5 px-1.5 text-[10px]">Selected</Badge>
                </div>
                <Button variant="link" className="text-xs text-blue-500 h-auto p-0 hover:no-underline hover:text-blue-400">View All</Button>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
}