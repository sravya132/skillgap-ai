import clsx from "clsx";

function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-amber-600 text-white hover:bg-amber-700",

    secondary:
      "bg-stone-200 text-stone-800 hover:bg-stone-300",

    outline:
      "border border-stone-300 bg-white text-stone-700 hover:bg-stone-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-5 py-3 text-base",

    lg: "px-6 py-4 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        fullWidth && "w-full"
      )}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;