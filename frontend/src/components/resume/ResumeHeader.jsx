import { FileText } from "lucide-react";

function ResumeHeader() {
  return (
    <div className="rounded-3xl border border-[#EADFCB] bg-gradient-to-r from-[#FDF6E9] to-[#F8EEDC] p-8 shadow-md">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm uppercase tracking-widest text-amber-700">
            AI Resume Analysis
          </p>

          <h1 className="mt-3 text-4xl font-bold text-stone-800">
            Resume Analysis
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-stone-600">
            Analyze your resume, discover strengths, identify missing
            skills, and receive AI-powered recommendations.
          </p>

        </div>

        <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow">

          <FileText
            size={40}
            className="text-amber-600"
          />

        </div>

      </div>

    </div>
  );
}

export default ResumeHeader;