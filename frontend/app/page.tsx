import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-10">
      <Navbar />

      <section className="flex flex-col items-center justify-center mt-28">
        <h1 className="text-6xl font-bold">
          Turn Text Into Amazing AI Videos
        </h1>

        <p className="text-gray-400 mt-6 text-xl">
          Create YouTube Shorts, Instagram Reels and TikTok videos using AI.
        </p>
      </section>
    </main>
  );
}