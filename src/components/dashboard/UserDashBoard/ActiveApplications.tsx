'use client'

import React, { useEffect, useState } from 'react';
import { getUserApplications } from '@/src/app/actions/dashboarduser/fetchApplication';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle2, AlertCircle, ChevronRight, Loader2 } from 'lucide-react';

export function ActiveApplications({ userId }: { userId: string }) {
  const [apps, setApps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getUserApplications(userId);
      setApps(data);
      setLoading(false);
    }
    load();
  }, [userId]);

  if (loading) return <Loader2 className="w-6 h-6 animate-spin mx-auto text-blue-500 mt-10" />;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">My Tracking List</h2>
        <Badge variant="outline" className="text-slate-500 border-slate-800">
          {apps.length} Applications
        </Badge>
      </div>

      <div className="grid gap-3">
        {apps.length === 0 ? (
          <p className="text-sm text-slate-600 italic py-10 text-center border border-dashed border-slate-800 rounded-xl">
            You haven't applied to any jobs yet. Browse the National Feed to start.
          </p>
        ) : (
          apps.map((app) => (
            <Card key={app.id} className="bg-[#151921] border-slate-800 p-4 hover:border-slate-700 transition-all group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                    {app.status === 'Selected' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    ) : app.status === 'Rejected' ? (
                      <AlertCircle className="w-5 h-5 text-rose-500" />
                    ) : (
                      <Clock className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                      {app.job.role}
                    </h4>
                    <p className="text-xs text-slate-500">{app.job.organization}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  {/* Show AI Score if Interview is complete */}
                  {app.interview && (
                    <div className="text-right hidden sm:block">
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">AI Score</p>
                      <p className={`text-sm font-mono font-bold ${app.interview.score > 70 ? 'text-emerald-400' : 'text-yellow-400'}`}>
                        {app.interview.score}%
                      </p>
                    </div>
                  )}
                  
                  <Badge className={`
                    ${app.status === 'Selected' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                      app.status === 'Rejected' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 
                      'bg-blue-500/10 text-blue-400 border-blue-500/20'}
                  `}>
                    {app.status}
                  </Badge>
                  
                  <Button variant="ghost" size="icon" className="text-slate-600 group-hover:text-white">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}