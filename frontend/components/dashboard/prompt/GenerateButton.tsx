"use client";

type GenerateButtonProps = {
  onGenerate: () => void;
  loading: boolean;
};

export default function GenerateButton({
  onGenerate,
  loading,
}: GenerateButtonProps) {
  return (
    <div className="flex justify-end mt-10">

      <button
        onClick={onGenerate}
        disabled={loading}
        className="
          px-10
          py-4
          rounded-xl
          bg-white
          text-black
          font-semibold
          text-lg
          transition
          duration-300
          hover:bg-gray-200
          disabled:bg-gray-500
          disabled:text-white
          disabled:cursor-not-allowed
        "
      >
        {loading ? "Generating..." : "Generate with AI"}
      </button>

    </div>
  );
}