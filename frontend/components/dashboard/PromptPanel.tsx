"use client";

import {
  Video,
  Image,
  FileText,
  Mic,
  Presentation,
  Share2,
  Sparkles,
  Paperclip,
  Wand2,
} from "lucide-react";

export default function PromptPanel() {
  return (
    <div className="space-y-8">

      {/* Quick Actions */}

      <div className="grid grid-cols-3 gap-6">

        <button className="group rounded-3xl border border-zinc-800 bg-[#18181B] p-6 text-left hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300">

          <Video className="text-white" size={30} />

          <h3 className="mt-5 text-xl font-semibold text-white">
            AI Video
          </h3>

          <p className="mt-2 text-gray-400 leading-6">
            Generate cinematic videos from a simple prompt.
          </p>

        </button>

        <button className="group rounded-3xl border border-zinc-800 bg-[#18181B] p-6 text-left hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300">

          <Image className="text-white" size={30} />

          <h3 className="mt-5 text-xl font-semibold text-white">
            AI Image
          </h3>

          <p className="mt-2 text-gray-400 leading-6">
            Create stunning realistic or artistic AI images.
          </p>

        </button>

        <button className="group rounded-3xl border border-zinc-800 bg-[#18181B] p-6 text-left hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300">

          <FileText className="text-white" size={30} />

          <h3 className="mt-5 text-xl font-semibold text-white">
            AI Writer
          </h3>

          <p className="mt-2 text-gray-400 leading-6">
            Blogs, captions, scripts, documents and more.
          </p>

        </button>

      </div>

      {/* Prompt */}

      <div className="rounded-3xl border border-zinc-800 bg-[#18181B] shadow-2xl">

        <div className="border-b border-zinc-800 px-8 py-6">

          <h2 className="text-3xl font-bold text-white">
            What would you like to create?
          </h2>

          <p className="mt-2 text-gray-400">
            Describe your idea and Prompt2Reel will automatically select the best AI workflow.
          </p>

        </div>

        <textarea
          placeholder={`Example:

Create a luxury perfume advertisement.

• Cinematic lighting
• Female narrator
• Slow motion
• Emotional background music
• 4K Quality
• 30 seconds`}
          className="h-80 w-full resize-none bg-transparent px-8 py-6 text-lg text-white placeholder:text-gray-500 focus:outline-none"
        />

        {/* Bottom Toolbar */}

        <div className="flex items-center justify-between border-t border-zinc-800 px-8 py-5">

          <div className="flex gap-3">

            <button className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800 transition flex items-center gap-2">

              <Paperclip size={18} />

              Attach

            </button>

            <button className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800 transition flex items-center gap-2">

              <Wand2 size={18} />

              Templates

            </button>

          </div>

          <p className="text-gray-500">
            0 / 5000
          </p>

        </div>

      </div>

      {/* Output */}

      <div className="rounded-3xl border border-zinc-800 bg-[#18181B] p-8">

        <h2 className="text-2xl font-bold text-white mb-6">
          Output Type
        </h2>

        <div className="grid grid-cols-3 gap-5">

          <button className="rounded-2xl border border-zinc-700 bg-white text-black py-5 font-semibold flex items-center justify-center gap-3 hover:bg-gray-200 transition">

            <Video size={20} />

            Video

          </button>

          <button className="rounded-2xl border border-zinc-700 bg-zinc-900 text-white py-5 font-semibold flex items-center justify-center gap-3 hover:bg-zinc-800 transition">

            <Image size={20} />

            Image

          </button>

          <button className="rounded-2xl border border-zinc-700 bg-zinc-900 text-white py-5 font-semibold flex items-center justify-center gap-3 hover:bg-zinc-800 transition">

            <FileText size={20} />

            Document

          </button>

          <button className="rounded-2xl border border-zinc-700 bg-zinc-900 text-white py-5 font-semibold flex items-center justify-center gap-3 hover:bg-zinc-800 transition">

            <Mic size={20} />

            Voice

          </button>

          <button className="rounded-2xl border border-zinc-700 bg-zinc-900 text-white py-5 font-semibold flex items-center justify-center gap-3 hover:bg-zinc-800 transition">

            <Presentation size={20} />

            Presentation

          </button>

          <button className="rounded-2xl border border-zinc-700 bg-zinc-900 text-white py-5 font-semibold flex items-center justify-center gap-3 hover:bg-zinc-800 transition">

            <Share2 size={20} />

            Social Media

          </button>

        </div>

        {/* Settings */}

        <div className="grid grid-cols-4 gap-5 mt-8">

          <select className="rounded-2xl border border-zinc-700 bg-zinc-900 p-4 text-white">
            <option>Style</option>
            <option>Realistic</option>
            <option>Cinematic</option>
            <option>Anime</option>
          </select>

          <select className="rounded-2xl border border-zinc-700 bg-zinc-900 p-4 text-white">
            <option>Quality</option>
            <option>HD</option>
            <option>2K</option>
            <option>4K</option>
          </select>

          <select className="rounded-2xl border border-zinc-700 bg-zinc-900 p-4 text-white">
            <option>Aspect Ratio</option>
            <option>16:9</option>
            <option>9:16</option>
            <option>1:1</option>
          </select>

          <select className="rounded-2xl border border-zinc-700 bg-zinc-900 p-4 text-white">
            <option>Language</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Kannada</option>
          </select>

        </div>

        <button className="mt-8 w-full rounded-2xl bg-white py-5 text-lg font-semibold text-black hover:bg-gray-200 transition flex items-center justify-center gap-3">

          <Sparkles size={20} />

          Generate Content

        </button>

      </div>

    </div>
  );
}