const express = require("express");
const routerPost = express.Router();
const Post = require("../models/Post");

//Helper function
function getItemFromAppLocals(req) {
  // mongodb
  const dbClient = req.app.locals.dbClient;
  const ObjectId = req.app.locals.ObjectId;
  return { dbClient, ObjectId };
}

//Post
routerPost.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  const { dbClient } = getItemFromAppLocals(req);

  try {
    const result = await dbClient
      .db("RestfulApi") // Replace with your database name
      .collection("posts") // Replace with your collection name
      .insertOne(post);
    res.json(result);
  } catch (err) {
    console.error("Error inserting post:", err);
    res.status(500).json({ message: err.message || "An error occurred" });
  }

  //mongoose
  // try {
  //   const savedPost = await post.save();
  //   res.json(savedPost);
  // } catch (err) {
  //   console.error("Error inserting post:", err);
  //   res.status(500).json({ message: err.message || "An error occurred" });
  // }
});

//Get
routerPost.get("/", async (req, res) => {
  const { dbClient } = getItemFromAppLocals(req);

  try {
    const getPosts = await dbClient
      .db("RestfulApi") // Replace with your database name
      .collection("posts") // Replace with your collection name
      .find()
      .toArray();
    res.json(getPosts);
  } catch (err) {
    console.error("Error retrieving posts:", err);
    res.status(500).json({ message: err.message || "An error occurred" });
  }
});

//Get by Id
routerPost.get("/:postId", async (req, res) => {
  const { dbClient, ObjectId } = getItemFromAppLocals(req);

  try {
    const getPost = await dbClient
      .db("RestfulApi") // Replace with your database name
      .collection("posts") // Replace with your collection name
      .findOne({ _id: new ObjectId(req.params.postId) });
    if (!getPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(getPost);
  } catch (err) {
    console.log("Error retrieving posts:", err);
    res.status(500).json({ message: err.message || "An error occurred" });
  }
});

//Delete by Id
routerPost.delete("/:postId", async (req, res) => {
  const { dbClient, ObjectId } = getItemFromAppLocals(req);

  try {
    const deletePost = await dbClient
      .db("RestfulApi") // Replace with your database name
      .collection("posts") // Replace with your collection name
      .deleteOne({ _id: new ObjectId(req.params.postId) });
    if (deletePost.deletedCount === 0) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.log("Error deleting post:", err);
    res
      .status(500)
      .json({ message: err.message || "An error occurred during deletion" });
  }
});

//Update by Id
routerPost.patch("/:postId", async (req, res) => {
  const { dbClient, ObjectId } = getItemFromAppLocals(req);

  try {
    const patchPost = await dbClient
      .db("RestfulApi")
      .collection("posts")
      .updateOne(
        { _id: new ObjectId(req.params.postId) },
        { $set: { title: req.body.title, description: req.body.description } }
      );
    if (patchPost.matchedCount === 0) {
      return res.status(404).json({ message: "Post not found" });
    } else if (patchPost.modifiedCount === 0) {
      return res
        .status(200)
        .json({ message: "No changes were made to the post" });
    }
    res.json({ message: "Post updated successfully" });
  } catch (err) {
    console.log("Error updating post", err);
    res
      .status(500)
      .json({ message: err.message || "An error occurred during update" });
  }
});

module.exports = routerPost;
