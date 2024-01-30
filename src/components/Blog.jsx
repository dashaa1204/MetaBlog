import { Slider } from "./Slider";
import { Trending } from "./Trending";

export const Blog = ({ trendingCard, cardData }) => {
  return (
    <div className="flex-col items-center inline-flex">
      <div className="flex flex-col items-start gap-[100px]">
        <Slider trendingCard={trendingCard} />
        <Trending cardData={cardData} />
      </div>
    </div>
  );
};
