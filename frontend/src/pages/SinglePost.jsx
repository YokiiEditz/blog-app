import { useEffect } from "react";
import { Breadcrumb, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useBlogs } from "../context/BlogContext";
import { titleCaptialize, formatDate } from "../utilities/helpers";
import { IoMdArrowBack } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

import Popup from "../utilities/Popup";

const SinglePost = () => {
  const { id } = useParams();
  const postId = id;
  // console.log("post id", postId);

  const navigate = useNavigate();

  const { postDetails, getPostDetails, popup, handlePostDelete } = useBlogs();

  const { title, category, description, author, createdAt, updatedAt } =
    postDetails;
  // console.log("titles from context", title);

  useEffect(() => {
    getPostDetails(postId);
  }, []);

  if (!postDetails) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="py-3" style={{ minHeight: "84vh" }}>
        <section>
          <Breadcrumb>
            <Breadcrumb.Item active>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Blogs</Breadcrumb.Item>
          </Breadcrumb>
        </section>

        {postDetails && (
          <Container className="pb-3">
            <Row xs={1} md={2}>
              <Col md={8} className="py-1 px-1">
                <section className="px-3 py-2 border border-2 rounded-2">
                  <div>
                    <h1>{titleCaptialize(title)}</h1>
                    <span>{category}</span>
                    <hr />
                    <p className="py-1">{description}</p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <Button
                      variant="primary"
                      className="d-flex gap-1 align-items-center"
                      onClick={() => navigate(`/edit/${postId}`)}
                    >
                      <FiEdit size={20} />
                      Edit this Post
                    </Button>

                    <Button
                      variant="danger"
                      className="d-flex gap-1 align-items-center"
                      onClick={() => handlePostDelete(postId)}
                    >
                      <MdDeleteForever size={20} />
                      Delete this Post
                    </Button>
                  </div>
                </section>
              </Col>

              <Col md={4} className="py-1 px-1" style={{ fontSize: "14px" }}>
                <div className="px-2 py-2  border border-2 rounded-2">
                  <h2 className="text-secondary">Author</h2>

                  <div className="d-flex gap-2">
                    <label className="fw-bold">Name:</label>
                    <span className="fw-bold text-primary">
                      {titleCaptialize(author)}
                    </span>
                  </div>
                  <div className="d-flex gap-2">
                    <label className="fw-bold">Post created:</label>
                    {createdAt && <span>{formatDate(createdAt)}</span>}
                  </div>
                  <div className="d-flex gap-2">
                    <label className="fw-bold">Post updated:</label>
                    {updatedAt && <span>{formatDate(updatedAt)}</span>}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}

        <Button
          variant="secondary"
          className="mx-1 mt-5 py-2 px-2 d-flex gap-1 align-items-center"
          onClick={() => navigate("/")}
        >
          <IoMdArrowBack size={20} />
          Back to Home
        </Button>

        {popup && <Popup text="Post Deleted" color="red" />}
      </div>
    </>
  );
};

export default SinglePost;
