import { Sparkles } from "lucide-react";

function SkillGapHeader() {
  return (
    <div className="rounded-3xl border border-amber-100 bg-gradient-to-r from-[#FFF8EB] via-[#FFFDF9] to-[#FFF8EB] p-10 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[4px] text-amber-600">
            AI SKILL GAP ANALYSIS
          </p>

          <div className="mt-3 flex items-center gap-3">

            <h1 className="text-5xl font-bold text-stone-900">
              Skill Gap Analysis
            </h1>

            <Sparkles
              size={34}
              className="text-amber-500"
            />

          </div>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">
            Discover your strongest skills, identify missing technologies,
            and receive AI-powered recommendations to become placement-ready.
          </p>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-md">

          <img
            src="https://cdn-icons-png.flaticon.com/512/2784/2784445.png"
            alt="skill"
            className="h-16 w-16"
          />

        </div>

      </div>

    </div>
  );
}

export default SkillGapHeader;