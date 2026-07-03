"use client";

import {
  LayoutDashboard,
  FolderOpen,
  Image,
  Video,
  FileText,
  Mic,
  BarChart3,
  Settings,
  Sparkles,
  UserCircle2,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { name: "Workspace", icon: LayoutDashboard, active: true },
    { name: "Projects", icon: FolderOpen },
    { name: "AI Images", icon: Image },
    { name: "AI Videos", icon: Video },
    { name: "AI Writer", icon: FileText },
    { name: "Voice Studio", icon: Mic },
    { name: "Analytics", icon: BarChart3 },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-72 h-screen bg-[#0D0D0D] border-r border-zinc-800 flex flex-col">

      {/* Logo */}

      <div className="px-8 py-8 border-b border-zinc-800">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center">

            <Sparkles className="text-white" size={22} />

          </div>

          <div>

            <h1 className="text-2xl font-bold text-white">
            Prompt2Studio
            </h1>

            <p className="text-gray-500 text-sm">
            One Prompt. Endless Creations.
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5 py-6">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`w-full flex items-center gap-4 rounded-xl px-4 py-3 mb-2 transition-all duration-200
              ${
                item.active
                  ? "bg-zinc-800 text-white border border-zinc-700"
                  : "text-gray-400 hover:bg-zinc-900 hover:text-white"
              }
              focus:outline-none focus:ring-0 active:scale-[0.98]
              `}
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.name}
              </span>
            </button>
          );
        })}

      </nav>

      {/* Upgrade */}

      <div className="mx-5 mb-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

        <h3 className="text-white font-semibold">
          Pro Plan
        </h3>

        <p className="text-gray-500 text-sm mt-2 leading-6">
          Unlock premium AI models, unlimited generations and faster rendering.
        </p>

        <button
          className="mt-5 w-full rounded-xl bg-white text-black py-3 font-semibold
          hover:bg-gray-200 transition
          focus:outline-none focus:ring-0"
        >
          Upgrade
        </button>

      </div>

      {/* User */}

      <div className="border-t border-zinc-800 px-6 py-5">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-zinc-800 flex items-center justify-center">

            <UserCircle2 className="text-white" size={23} />

          </div>

          <div>

            <h3 className="text-white font-medium">
              Fasiha Ahmed
            </h3>

            <p className="text-sm text-gray-500">
              Developer
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}