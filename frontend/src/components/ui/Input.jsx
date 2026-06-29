import clsx from "clsx";

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
}) {
  return (
    <div className="flex flex-col gap-2">

      {label && (
        <label className="text-sm font-medium text-stone-700">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(
          "w-full rounded-xl border px-4 py-3 outline-none transition-all",
          "bg-white",
          error
            ? "border-red-500"
            : "border-stone-300 focus:border-amber-500"
        )}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}

export default Input;