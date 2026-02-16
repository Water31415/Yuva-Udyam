'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EmailStep({
  email,
  setEmail,
  loading,
  onSubmit,
}: any) {
  return (
    <div className="space-y-5">
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        className="w-full"
        disabled={loading}
        onClick={onSubmit}
      >
        {loading ? "Sending..." : "Send OTP"}
      </Button>
    </div>
  );
}
