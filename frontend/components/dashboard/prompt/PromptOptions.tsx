type PromptOptionsProps = {
    style: string;
    setStyle: React.Dispatch<React.SetStateAction<string>>;
  
    quality: string;
    setQuality: React.Dispatch<React.SetStateAction<string>>;
  
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
  };
  
  export default function PromptOptions({
    style,
    setStyle,
    quality,
    setQuality,
    language,
    setLanguage,
  }: PromptOptionsProps) {
    return (
      <div className="grid grid-cols-3 gap-5 mt-10">
  
        {/* Style */}
  
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="bg-[#111827] border border-zinc-700 rounded-xl p-4 text-gray-300 outline-none focus:border-white transition"
        >
          <option>Realistic</option>
          <option>Cinematic</option>
          <option>Anime</option>
          <option>Minimal</option>
        </select>
  
        {/* Quality */}
  
        <select
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
          className="bg-[#111827] border border-zinc-700 rounded-xl p-4 text-gray-300 outline-none focus:border-white transition"
        >
          <option>Standard</option>
          <option>HD</option>
          <option>4K</option>
        </select>
  
        {/* Language */}
  
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-[#111827] border border-zinc-700 rounded-xl p-4 text-gray-300 outline-none focus:border-white transition"
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Kannada</option>
          <option>Tamil</option>
        </select>
  
      </div>
    );
  }