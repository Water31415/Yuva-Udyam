import { ReactNode } from "react";

export default function AuthCard({
  title,
  error,
  children,
}: {
  title: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-8 text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-400">
          {error}
        </div>
      )}

      {children}
    </div>
  );
}
