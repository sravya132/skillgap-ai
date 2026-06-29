function SkillMatchCard({ match }) {

  let color = "text-red-500";

  if (match?.toLowerCase().includes("excellent"))
    color = "text-green-600";

  else if (match?.toLowerCase().includes("good"))
    color = "text-amber-600";

  return (

    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

      <h2 className="text-xl font-semibold text-stone-700">
        ⭐ Overall Skill Match
      </h2>

      <p className={`mt-6 text-5xl font-bold ${color}`}>
        {match}
      </p>

      <p className="mt-4 leading-8 text-stone-500">
        AI evaluated your resume against current industry expectations.
      </p>

    </div>

  );

}

export default SkillMatchCard;