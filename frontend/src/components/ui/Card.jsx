import clsx from "clsx";

function Card({
  children,
  className = "",
  padding = "md",
}) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={clsx(
        "rounded-3xl bg-[#FFFCF8] border border-[#E7DED2] shadow-sm",
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;