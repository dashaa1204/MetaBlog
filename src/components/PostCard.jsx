import { Badge } from "./Badge";

export const PostCard = (image, badge) => {
  return (
    <div className="flex w-[392px] p-4 flex-col justify-center items-center gap-4">
      <img src={image} alt="" />
      <div className="flex p-2 flex-col items-start gap-5 self-stretch">
        <div className=" flex flex-col items-start gap-4 self-stretch">
          <Badge text={badge} />
          <h1 className="self-stretch text-2xl font-semibold">{title}</h1>
        </div>
        <div className="flex items-center gap-5">
          <p>
            {{ date }.readable_publish_date}
            {","} {""}
            {new Date({ year }.created_at).getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};
