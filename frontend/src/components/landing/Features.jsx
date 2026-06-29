import {
  FileText,
  Brain,
  Target,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume Analysis",
    description:
      "Upload your resume and receive a detailed ATS score with AI-powered insights.",
  },
  {
    icon: Brain,
    title: "Skill Gap Detection",
    description:
      "Identify missing technical and soft skills required for your dream role.",
  },
  {
    icon: GraduationCap,
    title: "Learning Roadmap",
    description:
      "Receive a personalized roadmap to bridge your skill gaps efficiently.",
  },
  {
    icon: Target,
    title: "Interview Preparation",
    description:
      "Generate role-specific interview questions and recruiter feedback instantly.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-widest text-amber-600">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold text-stone-900">
            Everything You Need To Get Hired
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
            SkillGap AI combines resume analysis, AI guidance,
            interview preparation and learning roadmaps into one
            powerful platform.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-stone-200 bg-[#FFFCF8] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-amber-100 p-4">
                  <Icon
                    className="text-amber-600"
                    size={30}
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-600">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Features;