'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CodeStep({
  email,
  code,
  setCode,
  loading,
  onVerify,
  onResend,
  onBack,
}: any) {
  return (
    <div className="space-y-5">
      <Input
        type="text"
        placeholder="00000000"
        value={code}
        maxLength={8}
        onChange={(e) =>
          setCode(e.target.value.replace(/\D/g, "").slice(0, 8))
        }
        className="text-center text-xl tracking-widest"
      />

      <p className="text-xs text-slate-400 text-center">
        Code sent to {email}
      </p>

      <Button
        className="w-full"
        disabled={loading || code.length !== 8}
        onClick={onVerify}
      >
        {loading ? "Verifying..." : "Verify & Login"}
      </Button>

      <div className="flex justify-between text-sm text-slate-400">
        <button onClick={onBack}>Change Email</button>
        <button onClick={onResend}>Resend</button>
      </div>
    </div>
  );
}
