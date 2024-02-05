import Image from "next/image";
import { Inter } from "next/font/google";
import { Slider } from "@/components/Slider";
import { Trending } from "@/components/Trending";
import { Post } from "@/components/Post";
import { Carousel } from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { highlight, trending, post } = props;
  return (
    <div className="flex flex-col justify-center">
      <div className="flex-col items-center inline-flex">
        <div className="flex flex-col items-start gap-[100px]">
          <Carousel highlight={highlight} />
          <Trending trending={trending} />
          <Post post={post} />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const highlights = await fetch(
    "https://dev.to/api/articles?top-1&per_page=4&state=fresh"
  );
  const highlight = await highlights.json();

  const trendings = await fetch("http://localhost:5000/api/hello");
  const trending = await trendings.json();

  const posts = await fetch("https://dev.to/api/articles?per_page=15");
  const post = await posts.json();

  return { props: { trending, highlight, post } };
};
