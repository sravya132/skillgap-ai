import { Lightbulb } from "lucide-react";

function AISuggestionCard({ suggestion }) {
  return (
    <div className="rounded-3xl border border-amber-100 bg-gradient-to-r from-[#FFFDF8] to-[#FFF7E8] p-8 shadow-sm">

      <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold text-amber-700">
        <Lightbulb size={28} />
        AI Career Recommendation
      </h2>

      <p className="leading-9 text-lg text-stone-700">
        {suggestion}
      </p>

    </div>
  );
}

export default AISuggestionCard;