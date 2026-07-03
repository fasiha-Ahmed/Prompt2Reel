"use client";

import { useState } from "react";

import PromptHeader from "./prompt/PromptHeader";
import PromptSuggestions from "./prompt/PromptSuggestions";
import PromptTextarea from "./prompt/PromptTextarea";
import OutputSelector from "./prompt/OutputSelector";
import PromptOptions from "./prompt/PromptOptions";
import GenerateButton from "./prompt/GenerateButton";

export default function PromptPanel() {

  const [prompt, setPrompt] = useState("");

  const [outputType, setOutputType] = useState("Video");

  const [style, setStyle] = useState("Realistic");

  const [quality, setQuality] = useState("HD");

  const [language, setLanguage] = useState("English");

  const [loading, setLoading] = useState(false);
  const handleGenerate = () => {

    setLoading(true);
  
    console.log({
      prompt,
      outputType,
      style,
      quality,
      language,
    });
  
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  
  };
  return (

    <div className="rounded-3xl border border-zinc-800 bg-[#18181B] p-10 shadow-xl">

      <PromptHeader />

      <PromptSuggestions />

      <PromptTextarea
        prompt={prompt}
        setPrompt={setPrompt}
      />

      <OutputSelector
        outputType={outputType}
        setOutputType={setOutputType}
      />

      <PromptOptions
        style={style}
        setStyle={setStyle}
        quality={quality}
        setQuality={setQuality}
        language={language}
        setLanguage={setLanguage}
      />

<GenerateButton
  loading={loading}
  onGenerate={handleGenerate}
/>
    </div>

  );
}