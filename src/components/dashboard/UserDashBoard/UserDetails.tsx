'use client'

import { User, ShieldCheck, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function UserDetails({ name, id }: { name: string, id: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl border-4 border-slate-900 shadow-2xl flex items-center justify-center">
          <User className="w-10 h-10 text-white" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-black text-white tracking-tight">Welcome, {name}</h1>
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20">
              <ShieldCheck className="w-3 h-3 mr-1" /> VERIFIED
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-slate-500 text-sm font-medium">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Uttar Pradesh, IN</span>
            <span className="font-mono text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">UID: {id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}