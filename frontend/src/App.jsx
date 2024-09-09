import "./App.css";
import Navbars from "./utilities/Navbar";
import Footer from "./utilities/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Container from "react-bootstrap/esm/Container";
import { BlogProvider } from "./context/BlogContext";
import PostPage from "./pages/PostPage";
import SinglePost from "./pages/SinglePost";
import EditPost from "./pages/EditPost";

const App = () => {
  return (
    <>
      <Router>
        <BlogProvider>
          <Navbars />
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/posts" element={<PostPage />} />
              <Route path="/posts/:id" element={<SinglePost />} />
              <Route path="/edit/:id" element={<EditPost />} />
            </Routes>
          </Container>
          <Footer />
        </BlogProvider>
      </Router>
    </>
  );
};

export default App;
