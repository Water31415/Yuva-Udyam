'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      if (data.role === "ORG") {
        router.push("/org/dashboard");
      } else {
        router.push("/dashboard");
      }

    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6 text-white">
      <h1 className="text-2xl font-bold text-center">Login</h1>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 p-3 rounded text-sm">
          {error}
        </div>
      )}

      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        className="w-full"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Checking..." : "Login"}
      </Button>
    </div>
  );
}
