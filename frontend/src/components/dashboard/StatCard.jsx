function StatCard({
  title,
  value,
  subtitle,
  icon,
  color,
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-stone-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

          <p className="mt-2 text-sm text-stone-500">
            {subtitle}
          </p>

        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;