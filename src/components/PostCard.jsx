import { Badge } from "./Badge";

export const PostCard = ({ image, title, tag, date, year }) => {
  return (
    <div className="flex w-[392px] h-[476px] p-4 flex-col justify-start items-center gap-4 border rounded-xl border-gray-200">
      <img
        src={image}
        alt=""
        className="max-h-[250px] rounded-lg object-cover"
      />
      <div className="flex p-2 flex-col items-start gap-5 self-stretch">
        <div className=" flex flex-col items-start gap-4 self-stretch">
          <div className="flex gap-4 flex-wrap">
            {tag.map((e, index) => {
              return <Badge text={e} key={index} />;
            })}
          </div>

          <h1 className="self-stretch text-2xl font-semibold">{title}</h1>
        </div>
        <div className="flex items-center gap-5">
          <p>
            {date}
            {","} {""}
            {year}
          </p>
        </div>
      </div>
    </div>
  );
};
