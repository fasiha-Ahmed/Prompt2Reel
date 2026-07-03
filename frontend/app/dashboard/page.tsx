import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import PromptPanel from "@/components/dashboard/PromptPanel";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0A0A0A]">

      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="flex-1 flex flex-col overflow-hidden">

        <Topbar />

        <main className="flex-1 overflow-y-auto p-10">

          {/* Stats */}

          <div className="grid grid-cols-4 gap-6 mb-10">

            <div className="rounded-3xl border border-zinc-800 bg-[#18181B] p-6">

              <p className="text-gray-500 text-sm">
                Projects
              </p>

              <h2 className="text-4xl font-bold text-white mt-3">
                12
              </h2>

            </div>

            <div className="rounded-3xl border border-zinc-800 bg-[#18181B] p-6">

              <p className="text-gray-500 text-sm">
                Images
              </p>

              <h2 className="text-4xl font-bold text-white mt-3">
                48
              </h2>

            </div>

            <div className="rounded-3xl border border-zinc-800 bg-[#18181B] p-6">

              <p className="text-gray-500 text-sm">
                Videos
              </p>

              <h2 className="text-4xl font-bold text-white mt-3">
                26
              </h2>

            </div>

            <div className="rounded-3xl border border-zinc-800 bg-[#18181B] p-6">

              <p className="text-gray-500 text-sm">
                Credits
              </p>

              <h2 className="text-4xl font-bold text-white mt-3">
                200
              </h2>

            </div>

          </div>

          {/* Prompt */}

          <PromptPanel />

          {/* Recent Projects */}

          <div className="mt-12">

            <h2 className="text-3xl font-bold text-white mb-6">
              Recent Projects
            </h2>

            <div className="grid grid-cols-3 gap-6">

              <div className="rounded-3xl border border-zinc-800 bg-[#18181B] p-6 hover:border-zinc-600 transition">

                <h3 className="text-white font-semibold text-lg">
                  Nike Advertisement
                </h3>

                <p className="text-gray-500 mt-2">
                  AI Video • Yesterday
                </p>

              </div>

              <div className="rounded-3xl border border-zinc-800 bg-[#18181B] p-6 hover:border-zinc-600 transition">

                <h3 className="text-white font-semibold text-lg">
                  Instagram Reel
                </h3>

                <p className="text-gray-500 mt-2">
                  Social Media • 2 days ago
                </p>

              </div>

              <div className="rounded-3xl border border-zinc-800 bg-[#18181B] p-6 hover:border-zinc-600 transition">

                <h3 className="text-white font-semibold text-lg">
                  Podcast Voice
                </h3>

                <p className="text-gray-500 mt-2">
                  Voice Studio • Last week
                </p>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}