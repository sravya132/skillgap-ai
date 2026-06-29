import {
  CheckCircle,
  TrendingUp,
  Brain,
  FileText,
} from "lucide-react";

function AIShowcase() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-widest text-amber-600">
            AI Preview
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Your Personal AI Career Assistant
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-stone-600">
            Upload your resume and instantly receive detailed
            insights, ATS compatibility, missing skills,
            personalized roadmaps and interview preparation.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <div className="space-y-8">

            <div className="flex gap-5">

              <div className="rounded-2xl bg-amber-100 p-4">
                <TrendingUp
                  className="text-amber-600"
                  size={30}
                />
              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  ATS Resume Score
                </h3>

                <p className="mt-2 text-stone-600">
                  Understand how recruiters and ATS systems
                  evaluate your resume.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="rounded-2xl bg-amber-100 p-4">
                <Brain
                  className="text-amber-600"
                  size={30}
                />
              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  AI Recommendations
                </h3>

                <p className="mt-2 text-stone-600">
                  Receive personalized suggestions to improve
                  your resume and career profile.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="rounded-2xl bg-amber-100 p-4">
                <FileText
                  className="text-amber-600"
                  size={30}
                />
              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  Skill Gap Analysis
                </h3>

                <p className="mt-2 text-stone-600">
                  Discover missing technologies and soft skills
                  required for your target role.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-stone-200 bg-[#FFFCF8] p-8 shadow-xl">

            <div className="flex items-center justify-between">

              <h3 className="text-2xl font-bold">
                Resume Dashboard
              </h3>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                Excellent
              </span>

            </div>

            <div className="mt-10">

              <div className="mb-8">

                <div className="flex justify-between">

                  <span>ATS Score</span>

                  <span className="font-bold">
                    92%
                  </span>

                </div>

                <div className="mt-3 h-3 rounded-full bg-stone-200">

                  <div className="h-3 w-[92%] rounded-full bg-amber-500"></div>

                </div>

              </div>

              <div className="space-y-4">

                {[
                  "React",
                  "Java",
                  "SQL",
                  "Spring Boot",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle
                      size={20}
                      className="text-green-600"
                    />

                    <span>{skill}</span>

                  </div>
                ))}

              </div>

              <div className="mt-10 rounded-2xl bg-amber-50 p-5">

                <h4 className="font-semibold">
                  Missing Skills
                </h4>

                <p className="mt-3 text-stone-600">
                  Docker • AWS • Kubernetes
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AIShowcase;