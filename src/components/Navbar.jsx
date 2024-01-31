import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex flex-col items-start gap-8 self-stretch">
      <p className="w-[184px] text-2xl font-bold">All Blog Post</p>
      <div className="flex w-[1216px] items-center gap-[30px]">
        <div className="flex items-center gap-5">
          <Link href={`/blog`}>All</Link>
          <Link href={`/blog/design`}>Design</Link>
          <Link href={`/blog/travel`}>Travel</Link>
          <Link href={`/blog/fashion`}>Fashion</Link>
          <Link href={`/blog/technology`}>Technology</Link>
          <Link href={`/branding`}>Branding</Link>
        </div>
        <p className="flex-[100] text-right">View All</p>
      </div>
    </div>
  );
};
