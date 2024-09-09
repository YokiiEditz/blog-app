import { Button } from "react-bootstrap";
import Posts from "../components/Posts";
import { useBlogs } from "../context/BlogContext";

const HomePage = () => {
  const { fetchPosts } = useBlogs();

  return (
    <>
      <section className="py-3" style={{ minHeight: "85vh" }}>
        <div className="d-flex justify-content-between align-items-center">
          <h2>Recent Blogs</h2>
          <Button
            className="bg-secondary border-0 py-2"
            onClick={() => fetchPosts()}
          >
            Refresh Data
          </Button>
        </div>

        <Posts />
      </section>
    </>
  );
};

export default HomePage;
