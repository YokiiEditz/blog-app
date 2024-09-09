import { useBlogs } from "../context/BlogContext";
import AllPosts from "./AllPosts";

const Posts = () => {
  const { posts } = useBlogs();

  return (
    <div>
      {posts
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((post, idx) => (
          <AllPosts key={idx} post={post} />
        ))}
    </div>
  );
};

export default Posts;
