function WelcomeBanner() {
  const userName = localStorage.getItem("name") || "User";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
  <div className="rounded-3xl border border-[#EADFCB] bg-gradient-to-r from-[#FDF6E9] to-[#F8EEDC] p-8 shadow-md">

    <p className="text-sm uppercase tracking-widest text-amber-700">
      {today}
    </p>

    <h1 className="mt-3 text-4xl font-bold text-stone-800">
      Welcome back, {userName}! 👋
    </h1>

    <p className="mt-3 max-w-2xl text-lg text-stone-600">
      Continue building your career today. Upload your resume,
      improve your ATS score, bridge your skill gaps, and get
      AI-powered interview preparation.
    </p>

  </div>
);
}

export default WelcomeBanner;