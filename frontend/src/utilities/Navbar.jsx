import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbars = () => {
  return (
    <>
      <header className="fs-4">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav>
              <Link to="/" className="text-white ">
                Home
              </Link>
            </Nav>

            <Link to="/posts" className="text-white">
              Create Post
            </Link>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navbars;
