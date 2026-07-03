"use client";

import {
  FaVideo,
  FaImage,
  FaFileAlt,
  FaMicrophone,
  FaChalkboard,
  FaShareAlt,
} from "react-icons/fa";

type OutputSelectorProps = {
  outputType: string;
  setOutputType: React.Dispatch<React.SetStateAction<string>>;
};

export default function OutputSelector({
  outputType,
  setOutputType,
}: OutputSelectorProps) {
  const outputs = [
    { name: "Video", icon: <FaVideo /> },
    { name: "Image", icon: <FaImage /> },
    { name: "Document", icon: <FaFileAlt /> },
    { name: "Voice", icon: <FaMicrophone /> },
    { name: "Presentation", icon: <FaChalkboard /> },
    { name: "Social Media", icon: <FaShareAlt /> },
  ];

  return (
    <div className="mt-10">

      <h2 className="text-2xl font-semibold text-white mb-5">
        Output Type
      </h2>

      <div className="grid grid-cols-3 gap-5">

        {outputs.map((item) => (

          <button
            key={item.name}
            onClick={() => setOutputType(item.name)}
            className={`
              flex items-center justify-center gap-3
              rounded-2xl
              py-4
              font-semibold
              transition-all
              duration-200
              border

              ${
                outputType === item.name
                  ? "bg-white text-black border-white shadow-lg"
                  : "bg-[#232935] text-gray-300 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-500"
              }
            `}
          >
            {item.icon}
            {item.name}
          </button>

        ))}

      </div>

    </div>
  );
}