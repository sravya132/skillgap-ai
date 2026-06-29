import SkillChip from "./SkillChip";

function SkillsFoundCard({ skills }) {

  return (

    <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-green-700">
          ✅ Skills Found
        </h2>

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          {skills.length} Skills
        </span>

      </div>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill, index) => (

          <SkillChip
            key={index}
            text={skill}
            color="green"
          />

        ))}

      </div>

    </div>

  );

}

export default SkillsFoundCard;