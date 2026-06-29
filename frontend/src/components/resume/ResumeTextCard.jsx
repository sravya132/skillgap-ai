function ResumeTextCard({ text }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold text-stone-800">
        Extracted Resume
      </h2>

      <p className="mt-2 text-stone-500">
        Text extracted from your uploaded resume.
      </p>

      <div className="mt-6 max-h-[450px] overflow-y-auto rounded-xl bg-stone-50 p-5">

        <pre className="whitespace-pre-wrap text-sm leading-7 text-stone-700">
          {text || "No resume analysis available."}
        </pre>

      </div>

    </div>
  );
}

export default ResumeTextCard;