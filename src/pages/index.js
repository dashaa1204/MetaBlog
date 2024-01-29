import Image from "next/image";
import { Inter } from "next/font/google";
import { Blog } from "@/components/Blog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Blog />
    </div>
  );
}
