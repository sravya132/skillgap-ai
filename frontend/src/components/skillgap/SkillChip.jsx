function SkillChip({ text, color }) {

  const styles = {
    green:
      "bg-green-50 text-green-700 border-green-100",

    red:
      "bg-red-50 text-red-700 border-red-100",

    blue:
      "bg-blue-50 text-blue-700 border-blue-100",
  };

  return (

    <span
      className={`rounded-full border px-4 py-2 text-sm font-semibold ${styles[color]}`}
    >
      {text}
    </span>

  );

}

export default SkillChip;