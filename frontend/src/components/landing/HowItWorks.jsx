import {
  Upload,
  ScanSearch,
  Brain,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Resume",
    description:
      "Upload your resume securely in PDF or DOCX format.",
  },
  {
    icon: ScanSearch,
    title: "AI Analysis",
    description:
      "Our AI analyzes your resume and calculates ATS compatibility.",
  },
  {
    icon: Brain,
    title: "Find Skill Gaps",
    description:
      "Discover missing technical and soft skills for your target role.",
  },
  {
    icon: GraduationCap,
    title: "Learning Roadmap",
    description:
      "Receive a personalized roadmap to become interview-ready.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#F8F5F0] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-widest text-amber-600">
            Process
          </p>

          <h2 className="mt-4 text-4xl font-bold text-stone-900">
            How SkillGap AI Works
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
            Four simple steps to transform your resume into a
            recruiter-ready profile.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border border-stone-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                  <Icon
                    size={30}
                    className="text-amber-600"
                  />
                </div>

                <div className="mt-6 inline-flex rounded-full bg-amber-600 px-3 py-1 text-sm font-semibold text-white">
                  Step {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-600">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;