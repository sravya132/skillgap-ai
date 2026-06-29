import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Upload,
  FileSearch,
  Brain,
  MessageSquare,
  GraduationCap,
  Lightbulb,
  User,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Upload Resume",
      path: "/resume/upload",
      icon: <Upload size={20} />,
    },
    {
      name: "Resume Analysis",
      path: "/resume/analysis",
      icon: <FileSearch size={20} />,
    },
    {
      name: "Skill Gap",
      path: "/resume/skill-gap",
      icon: <Brain size={20} />,
    },
    {
      name: "Interview Questions",
      path: "/ai/interview",
      icon: <MessageSquare size={20} />,
    },
    {
      name: "Learning Roadmap",
      path: "/ai/roadmap",
      icon: <GraduationCap size={20} />,
    },
    {
      name: "Resume Suggestions",
      path: "/ai/suggestions",
      icon: <Lightbulb size={20} />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    navigate("/login");
  };

  return (
    <aside className="flex h-[calc(100vh-80px)] w-72 flex-col border-r border-stone-200 bg-white">

      <div className="px-6 py-8">
        <h1 className="text-3xl font-bold text-stone-800">
          SkillGap <span className="text-amber-600">AI</span>
        </h1>
      </div>

      <nav className="flex-1 px-4">

        <div className="space-y-2">

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-amber-100 text-amber-700 font-semibold"
                    : "text-stone-600 hover:bg-stone-100"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}

        </div>

      </nav>

      <div className="border-t border-stone-200 p-4">

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;