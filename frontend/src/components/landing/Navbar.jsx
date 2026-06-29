import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#F8F5F0]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-stone-800"
        >
          SkillGap <span className="text-amber-600">AI</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className="text-stone-600 transition hover:text-amber-600"
          >
            Home
          </NavLink>

          <a
            href="#features"
            className="text-stone-600 transition hover:text-amber-600"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-stone-600 transition hover:text-amber-600"
          >
            How it Works
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <Link to="/login">
            <Button variant="outline">
              Login
            </Button>
          </Link>

          <Link to="/register">
            <Button>
              Get Started
            </Button>
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;