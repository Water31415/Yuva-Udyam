'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"USER" | "ORG">("USER");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, role }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      // Redirect based on role
      if (data.role === "ORG") {
        router.push("/org/dashboard");
      } else {
        router.push("/dashboard");
      }

    } catch (err: any) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6 text-white">
      <h1 className="text-2xl font-bold text-center">Create Account</h1>

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

      <div className="space-y-2">
        <p className="text-sm text-slate-400">Select Role</p>

        <div className="flex gap-4">
          <button
            onClick={() => setRole("USER")}
            className={`flex-1 p-3 rounded-lg border ${
              role === "USER"
                ? "bg-indigo-600 border-indigo-600"
                : "border-slate-700"
            }`}
          >
            User
          </button>

          <button
            onClick={() => setRole("ORG")}
            className={`flex-1 p-3 rounded-lg border ${
              role === "ORG"
                ? "bg-indigo-600 border-indigo-600"
                : "border-slate-700"
            }`}
          >
            Organization
          </button>
        </div>
      </div>

      <Button
        className="w-full"
        onClick={handleSignup}
        disabled={loading}
      >
        {loading ? "Creating Account..." : "Sign Up"}
      </Button>
    </div>
  );
}
