import { MainLogo } from "./logo/MainLogo";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex py-[32px] px-[350px] flex-col items-center gap-[10px] mb-16">
      <div className="flex items-start gap-[118px]">
        <MainLogo />
        <div className="flex items-center gap-[21px]">
          <div className="flex w-[667px] justify-center items-center gap-10">
            <Link href={`/`}>Home</Link>
            <Link href={`/blog/all`}>Blog</Link>
            <Link href={`/contact`}>Contact</Link>
          </div>
          <div className="flex items-center gap-10">
            <input type="search" name="search" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};
