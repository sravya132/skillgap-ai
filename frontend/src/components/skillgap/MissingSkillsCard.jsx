import SkillChip from "./SkillChip";
import { AlertTriangle } from "lucide-react";

function MissingSkillsCard({ skills }) {
  return (
    <div className="rounded-3xl border border-red-100 bg-white p-8 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="flex items-center gap-2 text-2xl font-bold text-red-700">
          <AlertTriangle size={24} />
          Missing Skills
        </h2>

        <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
          {skills.length} Missing
        </span>

      </div>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill, index) => (
          <SkillChip
            key={index}
            text={skill}
            color="red"
          />
        ))}

      </div>

    </div>
  );
}

export default MissingSkillsCard;