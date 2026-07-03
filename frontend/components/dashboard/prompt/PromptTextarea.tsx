type PromptTextareaProps = {
    prompt: string;
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
  };
  
  export default function PromptTextarea({
    prompt,
    setPrompt,
  }: PromptTextareaProps) {
    return (
      <div className="mt-8">
  
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={`Describe your idea...
  
  Example:
  
  Create a cinematic advertisement for a luxury perfume.
  
  • Golden lighting
  • Slow-motion shots
  • Female narrator
  • Luxury background music
  • 4K Ultra HD
  • 30 seconds`}
          className="
            w-full
            h-72
            rounded-2xl
            bg-[#111827]
            border
            border-zinc-700
            p-6
            text-white
            placeholder:text-gray-500
            text-lg
            leading-7
            resize-none
            outline-none
            focus:border-white
            transition
          "
        />
  
      </div>
    );
  }