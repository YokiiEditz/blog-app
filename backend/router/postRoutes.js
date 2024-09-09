const express = require("express");
const router = express.Router();

const Posts = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const post = await Posts.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "GET method error!" });
    console.log("GET method error!" + error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Posts.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "GET single method error!" });
    console.log("GET method error!" + error.message);
  }
});

router.post("/", async (req, res) => {
  const post = new Posts({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    category: req.body.category,
  });

  await post.save();
  res.status(201).json({ message: "Post created!" });
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Posts.updateOne(
      { _id: id },
      {
        $set: {
          title: req.body.title || post.title,
          author: req.body.author || post.author,
          description: req.body.description || post.description,
          category: req.body.category || post.category,
          updatedAt: Date.now(),
        },
      },
      { new: true, lean: true } // lean: true returns a plain JS object }
    );

    if (!post) {
      res.status(404).json({ message: "Post not found!" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "PUT method error" });
    console.log("PUT method error!" + error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Posts.deleteOne({ _id: id });
    res.status(200).json({ message: `Post id:${id} Deleted` });
  } catch (error) {
    res.status(500).json({ message: "DELETE method error!" });
    console.log("DELETE method error!" + error.message);
  }
});

module.exports = router;
