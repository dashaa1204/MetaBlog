import { Badge } from "./Badge";

export const Slider = () => {
  return (
    <div className="w-[1216px] h-[651px] shrink-0">
      <img src="" alt="" />
      <div className="flex flex-col w-[598px] p-10 items-start gap-6">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <Badge text="Technology" />
          <p>Grid system for better Design User Interface</p>
        </div>
        <div className="flex items-center gap-5">
          <p>August 20, 2022</p>
        </div>
      </div>
    </div>
  );
};
