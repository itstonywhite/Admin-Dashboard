function SummaryCard({ title, value, Icon }) {
  return (
    <article className="h-34.25 bg-white rounded-lg hover:bg-linear-to-t from-zinc-200/15 select-none cursor-pointer hover:shadow-md border flex justify-between flex-col primary-border-color shadow-sm py-[23.5px] px-4">
      <div className="flex items-center justify-between">
        <p>{title}</p>

        <div className="size-9 rounded-md border text-green-600 primary-border-color flex-center text-xl">
          {<Icon />}
        </div>
      </div>
      <p className="text-4xl">
        <strong>{value.toLocaleString("fa-IR")}</strong>
        <span className="text-base text-zinc-600"> عدد </span>
      </p>
    </article>
  );
}

export default SummaryCard;
