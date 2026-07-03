export default function PromptSuggestions() {
    const suggestions = [
      "Instagram Reel",
      "Movie Trailer",
      "Product Advertisement",
      "Social Media Post",
      "AI Image",
      "Voice Over",
    ];
  
    return (
      <div className="flex flex-wrap gap-3 mt-8">
        {suggestions.map((item) => (
          <button
            key={item}
            className="px-5 py-3 rounded-full bg-zinc-800 border border-zinc-700 text-gray-300 hover:bg-zinc-700 hover:text-white transition-all duration-200"
          >
            {item}
          </button>
        ))}
      </div>
    );
  }