import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatDate, titleCaptialize } from "../utilities/helpers";

const AllPosts = ({ post }) => {
  const { _id, title, author, category, description, updatedAt } = post;
  const postId = _id;

  return (
    <>
      {post && (
        <Card className="my-4">
          <Card.Body>
            <Card.Title className="fs-3">{titleCaptialize(title)}</Card.Title>
            <span className="text-secondary">{category}</span>

            <Card.Text>
              {description.split(" ").length > 10
                ? description.split(" ").slice(0, 10).join(" ") + " ..."
                : description}
            </Card.Text>

            <Button className="bg-dark border-0">
              <Link className="text-decoration-none" to={`/posts/${postId}`}>
                <span className="text-white">About this Blog</span>
              </Link>
            </Button>
          </Card.Body>

          <Card.Footer className="d-flex justify-content-between align-items-center">
            <span className="fw-bold">{titleCaptialize(author)}</span>
            <small className="text-muted">{formatDate(updatedAt)}</small>
          </Card.Footer>
        </Card>
      )}
    </>
  );
};

export default AllPosts;
