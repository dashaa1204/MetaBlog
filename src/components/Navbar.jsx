import Link from "next/link";

export const Navbar = () => {
  const titles = [
    ["all", "design", "fashion", "technology", "branding"],
    ["", "design", "fashion", "technology", "branding"],
  ];
  return (
    <div className="flex flex-col items-start gap-8 self-stretch">
      <p className="w-[184px] text-2xl font-bold">All Blog Post</p>
      <div className="flex w-[1216px] items-center gap-[30px]">
        <div className="flex items-center gap-5">
          {titles[0].map((title) => {
            return <Link href={`/${title}`}>{title}</Link>;
          })}
        </div>
        <p className="flex-[100] text-right">View All</p>
      </div>
    </div>
  );
};
