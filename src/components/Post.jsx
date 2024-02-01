import { PostCard } from "./PostCard";

export const Post = ({ post }) => {
  return (
    <div className="flex-col items-start gap-5 grid grid-cols-3">
      {post.map((post, index) => {
        return (
          <PostCard
            title={post.title}
            image={post.social_image}
            tag={post.tag_list}
            date={post.readable_publish_date}
            year={new Date(post.created_at).getFullYear()}
            key={index}
          />
        );
      })}
    </div>
  );
};
