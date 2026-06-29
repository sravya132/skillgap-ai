import Button from "../ui/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-[#F8F5F0]">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">

        {/* Left */}
        <div className="flex-1">

          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
            AI Powered Career Platform
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight text-stone-900">
            Analyze Your Resume.
            <br />
            Bridge Your
            <span className="text-amber-600"> Skill Gap.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
            Upload your resume, discover missing skills, receive AI-powered
            recommendations, generate interview questions, and build a
            personalized learning roadmap—all in one place.
          </p>

          <div className="mt-10 flex gap-4">

            <Link to="/register">
              <Button size="lg">
                Get Started
              </Button>
            </Link>

            <Link to="/login">
              <Button
                variant="outline"
                size="lg"
              >
                Login
              </Button>
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="hidden flex-1 items-center justify-center lg:flex">

          <div className="rounded-3xl border border-stone-200 bg-white p-10 shadow-lg">

            <h2 className="text-2xl font-bold">
              Resume Score
            </h2>

            <p className="mt-6 text-7xl font-bold text-amber-600">
              92%
            </p>

            <p className="mt-4 text-stone-500">
              AI Resume Match
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;