import { Badge } from "./Badge";

export const TrendCard = ({ header, image }) => {
  return (
    <div className="flex w-[293px] h-[320px] flex-col gap-4 justify-end items-center rounded-xl overflow-hidden">
      <img src={image} alt="" className="h-[320px] shrink-0" />
      <div className="flex w-[230px] h-[120px] flex-col items-start gap-4 absolute mb-10">
        <Badge text={"Trending"} textcolor={"text-white"} />
        <h2 className="w-[230px] h-[76px] text-white text-lg font-semibold">
          {header}
        </h2>
      </div>
    </div>
  );
};
