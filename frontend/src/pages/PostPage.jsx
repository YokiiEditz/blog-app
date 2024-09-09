import CreatePost from "../components/CreatePost";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const PostPage = () => {
  return (
    <>
      <div className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item active>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Posts</Breadcrumb.Item>
        </Breadcrumb>

        <CreatePost />
      </div>
    </>
  );
};

export default PostPage;
