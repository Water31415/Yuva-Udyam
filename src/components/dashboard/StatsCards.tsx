'use client'

import { Briefcase, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { label: 'Total Applied', count: 24, change: '+2 past week', icon: Briefcase, color: 'text-blue-400', bg: 'bg-blue-400/10' }, // [cite: 35, 37]
  { label: 'Selected', count: 7, change: '+1 past week', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-400/10' }, // [cite: 36, 38]
  { label: 'Withdrawn', count: 5, change: '-1 past week', icon: XCircle, color: 'text-rose-400', bg: 'bg-rose-400/10' }, // [cite: 39, 40]
  { label: 'In Progress', count: 12, change: '+3 past week', icon: Clock, color: 'text-sky-400', bg: 'bg-sky-400/10' }, // [cite: 41]
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="bg-[#151921] border-slate-800 shadow-xl hover:border-slate-700 transition-all">
          <CardContent className="p-4 flex items-center gap-4">
            <div className={`p-3 rounded-xl ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <div className="flex items-baseline gap-4">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{stat.label}</span>
                <span className="text-2xl font-bold text-white">{stat.count}</span>
              </div>
              <p className={`text-[10px] mt-0.5 ${stat.change.includes('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                {stat.change}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}