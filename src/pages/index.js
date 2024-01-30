import Image from "next/image";
import { Inter } from "next/font/google";
import { Blog } from "@/components/Blog";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { trendingCard, trendingCardW } = props;
  return (
    <div className="flex flex-col justify-center">
      <Blog trendingCard={trendingCard} cardData={cardData} />
    </div>
  );
}

export const getStaticProps = async () => {
  const trendingCards = await fetch(
    "https://dev.to/api/articles?top-1&per_page=5&state=fresh"
  );
  const trendingCard = await trendingCards.json();

  const cardsData = await fetch(
    "https://dev.to/api/articles?top-1&per_page=5&state=fresh"
  );
  const cardData = await cardsData.json();

  return { props: { trendingCard, cardData } };
};
