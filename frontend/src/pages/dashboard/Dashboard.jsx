import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatCard from "../../components/dashboard/StatCard";
import QuickActions from "../../components/dashboard/QuickActions";

import {
  FileText,
  Brain,
  Target,
  TrendingUp,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="space-y-8">

      <WelcomeBanner />
      
      <QuickActions />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Resume Score"
          value="92%"
          subtitle="Excellent ATS Score"
          color="bg-green-100 text-green-600"
          icon={<FileText size={28} />}
        />

        <StatCard
          title="Missing Skills"
          value="8"
          subtitle="Need Improvement"
          color="bg-red-100 text-red-600"
          icon={<Target size={28} />}
        />

        <StatCard
          title="AI Suggestions"
          value="15"
          subtitle="New Recommendations"
          color="bg-blue-100 text-blue-600"
          icon={<Brain size={28} />}
        />

        <StatCard
          title="Learning Progress"
          value="72%"
          subtitle="Course Completion"
          color="bg-amber-100 text-amber-600"
          icon={<TrendingUp size={28} />}
        />

      </div>

    </div>
  );
}

export default Dashboard;