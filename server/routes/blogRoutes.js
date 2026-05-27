import express from "express";
import {
  addBlog,
  addComment,
  deleteBlogById,
  generateContent,
  getAllBlogs,
  getBlogById,
  getBlogComments,
  togglePublish
} from "../controllers/blogController.js";

import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

// Add blog
blogRouter.post(
  "/add",
  upload.single('image'),
  auth,
  addBlog
);

// Get all blogs
blogRouter.get('/all', getAllBlogs);

// Get comments of a blog
blogRouter.get('/comment/:blogId', getBlogComments);

// Get single blog
blogRouter.get('/:blogId', getBlogById);

// Toggle publish
blogRouter.post('/toggle-publish', auth, togglePublish);

blogRouter.post('/delete', auth, deleteBlogById);

// Add comment
blogRouter.post('/add-comment', addComment);

blogRouter.post('/generate', auth, generateContent);


export default blogRouter;