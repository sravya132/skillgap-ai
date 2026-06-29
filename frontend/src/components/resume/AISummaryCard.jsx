function AISummaryCard({ summary }) {
  if (!summary) return null;

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold text-stone-800">
        AI Resume Analysis
      </h2>

      {/* Overall Rating */}

      <div className="mt-8 rounded-2xl bg-amber-50 p-6">
        <h3 className="text-lg font-semibold text-stone-700">
          ⭐ Overall Rating
        </h3>

        <p className="mt-2 text-4xl font-bold text-amber-600">
          {summary.overallRating || "N/A"}
        </p>
      </div>

      {/* Professional Summary */}

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-stone-800">
          📄 Professional Summary
        </h3>

        <p className="mt-4 whitespace-pre-wrap leading-8 text-stone-600">
          {summary.professionalSummary || "No summary available."}
        </p>
      </div>

      {/* Strengths */}

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-green-700">
          💪 Strengths
        </h3>

        <ul className="mt-4 space-y-3">
          {(summary.strengths ?? []).map((item, index) => (
            <li
              key={index}
              className="rounded-xl bg-green-50 p-3 text-green-700"
            >
              ✓ {item}
            </li>
          ))}

          {(summary.strengths ?? []).length === 0 && (
            <li className="text-stone-500">
              No strengths available.
            </li>
          )}
        </ul>
      </div>

      {/* Weaknesses */}

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-red-700">
          ⚠ Weaknesses
        </h3>

        <ul className="mt-4 space-y-3">
          {(summary.weaknesses ?? []).map((item, index) => (
            <li
              key={index}
              className="rounded-xl bg-red-50 p-3 text-red-700"
            >
              • {item}
            </li>
          ))}

          {(summary.weaknesses ?? []).length === 0 && (
            <li className="text-stone-500">
              No weaknesses available.
            </li>
          )}
        </ul>
      </div>

      {/* Recommendation */}

      <div className="mt-8 rounded-2xl bg-blue-50 p-6">
        <h3 className="text-xl font-semibold text-blue-700">
          🎯 Recommendation
        </h3>

        <p className="mt-3 leading-8 text-blue-800">
          {summary.recommendation || "No recommendation available."}
        </p>
      </div>

    </div>
  );
}

export default AISummaryCard;