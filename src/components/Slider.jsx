import { Badge } from "./Badge";
import { dummyArticle } from "@/dummyData/dummyArticle";

export const Slider = () => {
  return (
    <div className="w-[1216px] shrink-0">
      <img
        src={dummyArticle[0].cover_image}
        alt=""
        className="flex absolute -z-50 w-[1216px] h-[600px] rounded-xl"
      />
      ;
      <div className="flex flex-col w-[598px] p-10 items-start gap-6 bg-white rounded-xl ml-[11px] mt-[310px]">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <Badge text="Technology" />
          <p className="text-4xl font-semibold">
            Grid system for better Design User Interface
          </p>
        </div>
        <div className="flex items-center gap-5">
          <p>August 20, 2022</p>
        </div>
      </div>
      <div className="flex justify-end mt-4 gap-2">
        <div className="inline-flex justify-center items-center rounded-md w-10 h-10 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="17"
            viewBox="0 0 9 17"
            fill="none"
          >
            <path
              d="M8.5 16L1 8.5L8.5 1"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="inline-flex justify-center items-center rounded-md w-10 h-10 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="17"
            viewBox="0 0 9 17"
            fill="none"
          >
            <path
              d="M1 1L8.5 8.5L1 16"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
