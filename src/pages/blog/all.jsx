import { Navbar } from "@/components/Navbar";
import { PostCard } from "@/components/PostCard";

export default function Page({ data }) {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-[32px]">
        <Navbar />
        <div className="flex-col items-start gap-5 grid grid-cols-3">
          {data.map((e) => {
            return (
              <PostCard
                title={e.title}
                image={e.social_image}
                tag={e.tag_list}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const respond = await fetch("https://dev.to/api/articles");
  const data = await respond.json();

  return {
    props: {
      data,
    },
  };
}
