import LoginForm from "@/src/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-black p-6">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
