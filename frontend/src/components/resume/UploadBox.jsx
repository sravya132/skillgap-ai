import { useRef } from "react";
import { UploadCloud } from "lucide-react";
import { toast } from "react-hot-toast";

function UploadBox({ selectedFile, setSelectedFile }) {
  const inputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only PDF and DOCX files are allowed.");
      return;
    }

    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };
  

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => inputRef.current.click()}
      className="cursor-pointer rounded-3xl border-2 border-dashed border-amber-300 bg-[#FCFAF7] p-14 text-center transition hover:border-amber-500 hover:bg-[#FFF8EC]"
    >
      <UploadCloud
        size={60}
        className="mx-auto text-amber-600"
      />

      <h2 className="mt-6 text-2xl font-bold text-stone-800">
        Drag & Drop Resume
      </h2>

      <p className="mt-3 text-stone-500">
        or click anywhere to browse
      </p>

      <p className="mt-2 text-sm text-stone-400">
        PDF or DOCX • Maximum 5MB
      </p>

      <input
        ref={inputRef}
        hidden
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => handleFile(e.target.files[0])}
      />

      {selectedFile && (
        <div className="mt-8 rounded-xl bg-green-50 p-4 text-green-700">
          ✅ {selectedFile.name}
        </div>
      )}
    </div>
  );
}

export default UploadBox;