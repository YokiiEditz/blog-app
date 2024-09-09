import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogContext = createContext();

export function useBlogs() {
  return useContext(BlogContext);
}

export const API_URL = import.meta.env.VITE_SERVER_APP_URL;

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [postDetails, setPostDetails] = useState([]);
  const [popup, setPopup] = useState(false);

  const [dataChanged, setDataChanged] = useState(false);

  const navigate = useNavigate();

  const fetchPosts = async () => {
    const response = await axios.get(API_URL);
    const data = response.data;
    setPosts(data);
  };

  const getPostDetails = async (id) => {
    try {
      const response = await axios.get(API_URL + id);
      const data = await response.data;
      setPostDetails(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handlePostDelete = async (postId) => {
    if (window.confirm("Are You sure want to delete?")) {
      try {
        const response = await axios.delete(API_URL + postId);
        // console.log("link", API_URL + postId);
        if (!response) {
          console.log("Post not deleted!");
        }
        setPopup(true);
        setTimeout(() => {
          setPopup(false);
          navigate("/");
          setDataChanged(!dataChanged);
        }, 1000);
        //console.log("posts", posts);

        const updatedPosts = posts.filter((item) => item._id !== postId);
        //console.log(`updated posts`, updatedPosts);
        setPosts(updatedPosts);
      } catch (error) {
        console.log("Error Deleting Post!" + error.message);
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [dataChanged]);

  const contextValues = {
    dataChanged,
    setDataChanged,
    posts,
    fetchPosts,
    postDetails,
    getPostDetails,
    popup,
    setPopup,
    handlePostDelete,
  };

  return (
    <>
      <BlogContext.Provider value={contextValues}>
        {children}
      </BlogContext.Provider>
    </>
  );
};
