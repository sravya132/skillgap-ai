import { useState } from "react";
import UploadBox from "../../components/resume/UploadBox";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import resumeService from "../../services/resumeService";

function UploadResume() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

const handleUpload = async () => {

  if (!selectedFile) {
    toast.error("Please select a resume first.");
    return;
  }

  try {

    setLoading(true);

    const response = await resumeService.uploadResume(selectedFile);
    console.log("Upload Response:", response);
    localStorage.setItem("resumeId", response.id);

    toast.success("Resume uploaded successfully!");

    setTimeout(() => {
      navigate("/resume/analysis");
    }, 1000);

  } catch (error) {

    console.error(error);

    toast.error(
      error?.response?.data?.message ||
      "Resume upload failed."
    );

  } finally {

    setLoading(false);

  }

};
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-stone-800">
          Upload Resume
        </h1>

        <p className="mt-2 text-stone-500">
          Upload your latest resume to receive AI-powered analysis,
          ATS scoring, and personalized career recommendations.
        </p>

      </div>

      <UploadBox
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      <div className="flex justify-end">

  <button
    onClick={handleUpload}
    disabled={!selectedFile || loading}
    className={`rounded-xl px-8 py-3 font-semibold text-white transition ${
      loading
        ? "cursor-not-allowed bg-amber-400"
        : "bg-amber-600 hover:bg-amber-700"
    }`}
  >
    {loading ? "Uploading..." : "Upload Resume"}
  </button>

</div>

    </div>
  );
}

export default UploadResume;