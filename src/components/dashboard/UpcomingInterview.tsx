'use client'

import React from 'react';
import { Video, MoreHorizontal, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from "sonner";

export function UpcomingInterview() {
  return (
    <Card className="bg-[#151921] border-slate-800 shadow-xl overflow-hidden">
      <CardContent className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Calendar className="w-4 h-4 text-blue-500" />
            Upcoming Interview
          </div>
          <MoreHorizontal className="w-4 h-4 text-slate-500 cursor-pointer hover:text-white transition-colors" />
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div>
            <p className="text-[10px] text-slate-500 font-mono mb-1 uppercase tracking-wider">
              Wed, Apr 24 | 10:00am - 10:30am
            </p>
            <h3 className="font-bold text-slate-200 text-sm leading-tight">
              Chemical Architect Interview at MHRD
            </h3>
            <Badge className="mt-2 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] px-2 py-0">
              Confirmed
            </Badge>
          </div>

          {/* Google Meet Integration Card */}
          <div className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-5 shadow-lg shadow-blue-500/20 mt-4">
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="p-2.5 bg-white/10 rounded-full backdrop-blur-md border border-white/10">
                <Video className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <h4 className="text-white font-bold text-xs">Google Meet Integration</h4>
                <p className="text-blue-100 text-[9px] mt-0.5 opacity-80">
                  Video interview capabilities enabled
                </p>
              </div>
              <Button 
                onClick={() => toast.success("Redirecting to Google Meet...")}
                className="bg-white text-blue-600 hover:bg-slate-100 font-bold px-8 h-9 w-full rounded-lg text-xs transition-transform active:scale-95"
              >
                Join Now
              </Button>
            </div>
            
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-white/20 transition-all duration-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}