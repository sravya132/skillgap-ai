import { BookOpen } from "lucide-react";

function RecommendedCoursesCard({ courses }) {
  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">

      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-blue-700">
        <BookOpen size={26} />
        Recommended Courses
      </h2>

      <div className="space-y-4">

        {courses.map((course, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 p-5 transition hover:shadow-md"
          >

            <div>

              <p className="font-semibold text-stone-800">
                {course}
              </p>

              <p className="mt-1 text-sm text-stone-500">
                AI Recommended Learning
              </p>

            </div>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              Recommended
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecommendedCoursesCard;