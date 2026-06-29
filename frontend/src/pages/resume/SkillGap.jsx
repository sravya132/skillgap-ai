import { useEffect, useState } from "react";
import resumeService from "../../services/resumeService";

import SkillGapHeader from "../../components/skillgap/SkillGapHeader";
import SkillMatchCard from "../../components/skillgap/SkillMatchCard";
import SkillsFoundCard from "../../components/skillgap/SkillsFoundCard";
import MissingSkillsCard from "../../components/skillgap/MissingSkillsCard";
import RecommendedCoursesCard from "../../components/skillgap/RecommendedCoursesCard";
import AISuggestionCard from "../../components/skillgap/AISuggestionCard";

function SkillGap() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      const resumeId = localStorage.getItem("resumeId");

      const response = await resumeService.getSkillGap(resumeId);

      setData(response);
    }

    load();
  }, []);

  if (!data) {
    return (
      <div className="py-20 text-center text-xl text-stone-500">
        AI is analyzing your skills...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <SkillGapHeader />

      <SkillMatchCard
        match={data.skillMatch}
      />

      <div className="grid gap-8 lg:grid-cols-2">

        <SkillsFoundCard
          skills={data.skillsFound}
        />

        <MissingSkillsCard
          skills={data.missingSkills}
        />

      </div>

      <RecommendedCoursesCard
        courses={data.recommendedCourses}
      />

      <AISuggestionCard
        suggestion={data.aiSuggestion}
      />

    </div>
  );
}

export default SkillGap;