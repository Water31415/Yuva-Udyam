'use client'

import React from 'react';
import { Bell, User, Search, Zap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Jobs", href: "/user/job" },
  { name: "Dashboard", href: "/user/dashboard" },
  { name: "Courses", href: "/user/courses" },
];

export default function NavbarLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`text-sm font-bold px-4 py-2 rounded-lg transition-colors ${
              isActive
                ? "text-blue-500 bg-blue-500/10"
                : "text-slate-500 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

export function Navbar() {
  return (
    <div className="w-full pt-6 px-6">
      <nav className="max-w-[1400px] mx-auto h-16 bg-[#151921]/80 backdrop-blur-md border border-slate-800 rounded-2xl flex items-center justify-between px-6 shadow-2xl">
        {/* Brand Section */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/40">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="font-black text-xl tracking-tighter text-white uppercase">
              Yuva <span className="text-blue-500">Udyam</span>
            </span>
          </div>

          {/* Nav Links */}
            <NavbarLinks />
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input 
              placeholder="Search anything..." 
              className="bg-slate-950/50 border-slate-800 pl-10 w-64 h-9 text-xs focus:ring-1 focus:ring-blue-500/50 rounded-lg" 
            />
          </div>
          
          <div className="h-8 w-px bg-slate-800 mx-2" />

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative text-slate-400 hover:text-white">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#151921]" />
            </Button>
            
            <div className="flex items-center gap-3 pl-2 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">Raj Singh</p>
                <p className="text-[10px] text-slate-500 font-mono">ID: 4402-91</p>
              </div>
              <div className="w-9 h-9 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl border border-slate-700 flex items-center justify-center shadow-inner group-hover:border-blue-500/50 transition-all">
                <User className="w-5 h-5 text-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}