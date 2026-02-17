'use client'

import { masterDeepSync } from '@/src/app/actions/jobs/SyncGrid';
import { toast } from "sonner";
import { RefreshCw, Sparkles } from "lucide-react";
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function SyncButton() {
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = async () => {
    setIsSyncing(true);
    const toastId = toast.loading("Gemini is scouting the National Grid for unlisted jobs...");
    
    const result = await masterDeepSync();
    
    if (result.success) {
      toast.success(
        (result.count ?? 0) > 0 
          ? `Forged ${result.count} new jobs into your feed!` 
          : "Grid is up to date. No new unlisted jobs found.", 
        { id: toastId }
      );
    } else {
      toast.error("Deep Search failed. Check API configuration.", { id: toastId });
    }
    setIsSyncing(false);
  };

  return (
    <Button 
      onClick={handleSync}
      disabled={isSyncing}
      variant="outline" 
      className="border-blue-500/30 bg-blue-500/5 text-blue-400 hover:bg-blue-500 hover:text-white gap-2 h-9 px-4 text-xs font-bold transition-all"
    >
      <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
      {isSyncing ? "AI Scouting..." : "Deep Sync Grid"}
    </Button>
  );
}