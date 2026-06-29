import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import resumeService from "../../services/resumeService";

import ResumeHeader from "../../components/resume/ResumeHeader";
import ResumeTextCard from "../../components/resume/ResumeTextCard";
import AISummaryCard from "../../components/resume/AISummaryCard";

function ResumeAnalysis() {
  const [analysis, setAnalysis] = useState("");
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const resumeId = localStorage.getItem("resumeId");

        console.log("Resume ID:", resumeId);

        if (!resumeId) {
          toast.error("Resume not found.");
          return;
        }

        // Extracted Resume
        const analysisResponse =
          await resumeService.analyzeResume(resumeId);

        setAnalysis(analysisResponse.extractedText);

        // AI Summary
        const summaryResponse =
          await resumeService.getAISummary(resumeId);

        console.log("AI Summary Response:", summaryResponse);

        console.log("Summary Object:", summaryResponse.summary);
console.log("Strengths:", summaryResponse.summary?.strengths);
console.log("Weaknesses:", summaryResponse.summary?.weaknesses);

        setSummary(summaryResponse.summary);

      } catch (error) {
        console.error(error);
        toast.error("Failed to load resume analysis.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-xl text-stone-500">
        Analyzing Resume...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <ResumeHeader />

      <AISummaryCard summary={summary} />

      <ResumeTextCard text={analysis} />

    </div>
  );
}

export default ResumeAnalysis;