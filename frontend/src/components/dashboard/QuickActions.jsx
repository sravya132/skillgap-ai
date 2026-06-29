import { useNavigate } from "react-router-dom";
import {
  Upload,
  FileText,
  Brain,
  GraduationCap,
} from "lucide-react";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Upload Resume",
      icon: <Upload size={26} />,
      path: "/resume/upload",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Resume Analysis",
      icon: <FileText size={26} />,
      path: "/resume/analysis",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Skill Gap",
      icon: <Brain size={26} />,
      path: "/resume/skill-gap",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Learning Roadmap",
      icon: <GraduationCap size={26} />,
      path: "/ai/roadmap",
      color: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold text-stone-800">
        Quick Actions
      </h2>

      <p className="mt-1 text-stone-500">
        Jump directly to the most used features.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {actions.map((action) => (
          <button
            key={action.title}
            onClick={() => navigate(action.path)}
            className="group rounded-2xl border border-stone-200 bg-[#FCFAF7] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl ${action.color}`}
            >
              {action.icon}
            </div>

            <h3 className="mt-5 text-lg font-semibold text-stone-800">
              {action.title}
            </h3>

            <p className="mt-2 text-sm text-stone-500">
              Open {action.title}
            </p>
          </button>
        ))}

      </div>

    </div>
  );
}

export default QuickActions;