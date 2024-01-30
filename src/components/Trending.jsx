import { TrendCard } from "./TrendCard";

export const Trending = ({ cardData }) => {
  return (
    <div className="flex w-[1230px] h-[390px] flex-col items-start gap-[30px]">
      <h1 className="flex items-start w-[184px] text-2xl font-bold">
        Trending
      </h1>
      <div className="flex items-start gap-5">
        {cardData.map((card) => {
          return <TrendCard cardData={cardData} />;
        })}
      </div>
    </div>
  );
};
