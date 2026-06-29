import { Bell, Search } from "lucide-react";

function Navbar() {
  const userName = localStorage.getItem("name") || "User";

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-stone-200 bg-white px-8">

      {/* Search */}

      <div className="relative w-96">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border border-stone-200 bg-stone-50 py-3 pl-11 pr-4 outline-none focus:border-amber-500"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <button className="relative rounded-xl bg-stone-100 p-3 transition hover:bg-stone-200">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50 px-4 py-2">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-600 font-bold text-white">

            {userName.charAt(0).toUpperCase()}

          </div>

          <div>

            <p className="font-semibold text-stone-800">

              {userName}

            </p>

            <p className="text-sm text-stone-500">

              Student

            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;