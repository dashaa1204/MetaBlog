import { Navbar } from "@/components/Navbar";
import { PostCard } from "@/components/PostCard";
import { useState } from "react";
import React from "react";

export default function Page({ data }) {
  const [articles, setArticles] = useState(data);
  const [pageNumber, setPageNumber] = useState(2);

  async function loadMoreHandler() {
    const response = await fetch(
      `https://dev.to/api/articles?per_page=15&tag=branding&page=${pageNumber}`
    );
    const data = await response.json();
    setArticles([...articles, ...data]);
    setPageNumber(pageNumber + 1);
    console.log(pageNumber);
  }
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-[32px]">
        <Navbar />
        <div className="flex-col items-start gap-5 grid grid-cols-3">
          {articles.map((e, index) => {
            return (
              <PostCard
                title={e.title}
                image={e.social_image}
                tag={e.tag_list}
                date={e.readable_publish_date}
                year={new Date(e.created_at).getFullYear()}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div>
        <button
          className="flex m-20 border border-gray-100 rounded-xl py-2 px-4"
          onClick={loadMoreHandler}
        >
          Load more
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const respond = await fetch(
    "https://dev.to/api/articles?per_page=15&tag=branding"
  );
  const data = await respond.json();

  return {
    props: {
      data,
    },
  };
}
