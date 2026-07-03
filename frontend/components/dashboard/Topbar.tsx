"use client";

import {
  Search,
  Bell,
  Moon,
  Sparkles,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between bg-[#0D0D0D] border-b border-zinc-800 px-10 py-5">

      {/* Left */}

      <div>

        <p className="text-sm text-gray-500">
          Welcome back
        </p>

        <h1 className="text-3xl font-bold text-white mt-1">
          Creative Workspace
        </h1>

        <p className="text-gray-400 mt-2">
          Build videos, images, presentations, documents and more using AI.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search projects..."
            className="w-80 rounded-full bg-zinc-900 border border-zinc-700 py-3 pl-11 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-zinc-600 transition"
          />

        </div>

        {/* Credits */}

        <div className="rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-3">

          <p className="text-xs uppercase tracking-wider text-gray-500">
            Credits
          </p>

          <h2 className="text-2xl font-bold text-white">
            200
          </h2>

        </div>

        {/* Theme */}

        <button
          className="w-12 h-12 rounded-2xl border border-zinc-700 bg-zinc-900
          flex items-center justify-center
          hover:bg-zinc-800 transition"
        >

          <Moon className="text-white" size={18} />

        </button>

        {/* Notification */}

        <button
          className="w-12 h-12 rounded-2xl border border-zinc-700 bg-zinc-900
          flex items-center justify-center
          hover:bg-zinc-800 transition"
        >

          <Bell className="text-white" size={18} />

        </button>

        {/* Upgrade */}

        <button
          className="rounded-2xl bg-white text-black px-6 py-3
          font-semibold hover:bg-gray-200 transition
          flex items-center gap-2"
        >

          <Sparkles size={18} />

          Upgrade

        </button>

        {/* Avatar */}

        <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">

          <span className="font-semibold text-white">
            FA
          </span>

        </div>

      </div>

    </header>
  );
}