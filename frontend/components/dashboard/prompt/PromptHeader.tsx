export default function PromptHeader() {
    return (
      <div>
        <h1 className="text-5xl font-bold text-white">
          What would you like to create today?
        </h1>
  
        <p className="mt-4 text-lg text-gray-400 leading-relaxed max-w-3xl">
          Describe your idea in as much detail as possible.
          Prompt2Studio intelligently selects the best AI models
          to generate high-quality content from a single prompt.
        </p>
      </div>
    );
  }