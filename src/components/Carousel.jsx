import { useState } from "react";
import { Badge } from "./Badge";

export const Carousel = ({ highlight, index }) => {
  const tags = highlight.tag_list;
  const [num, setNum] = useState(1);
  return (
    <div>
      <div className="w-[1216px] h-[651px] flex carousel">
        {highlight.map((e, index) => {
          const tag = e.tag_list;
          return (
            <div className="carousel-item bg-black rounded-xl" key={index}>
              <div
                id={`item${index + 1}`}
                className="w-[1216px] shrink-0 relative"
              >
                <img
                  src={e.social_image}
                  alt=""
                  className="flex w-[1216px] h-[600px] rounded-xl z-50 opacity-75"
                />
                <div className="flex flex-col absolute top-0 w-[598px] p-10 items-start gap-6 bg-white rounded-xl ml-[11px] mt-[310px]">
                  <div className="flex flex-col items-start gap-4 self-stretch">
                    <div className="flex gap-4">
                      {tag.map((c, index) => {
                        return (
                          <Badge
                            text={c}
                            textcolor={"text-white"}
                            key={index}
                          />
                        );
                      })}
                    </div>
                    <p className="text-4xl font-semibold">{e.title}</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <p>
                      {e.readable_publish_date}
                      {","} {""}
                      {new Date(e.created_at).getFullYear()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a
          href={`#item${num}`}
          onClick={() => (num >= 2 ? setNum(num - 1) : setNum(4))}
          className="btn btn-xs"
        >
          1
        </a>
        <a
          href={`#item${num}`}
          className="btn btn-xs"
          onClick={() => (num < 4 ? setNum(num + 1) : setNum(1))}
        >
          2
        </a>
      </div>
    </div>
  );
};
