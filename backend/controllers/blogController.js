import asyncHandler from 'express-async-handler';
import Blog from '../models/blogModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getBlogs = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Blog.countDocuments({...keyword});
  const blogs = await Blog.find({...keyword})
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({blogs, page, pages: Math.ceil(count / pageSize)});
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    res.json(blog);
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await blog.remove();
    res.json({message: 'Blog removed'});
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createBlog = asyncHandler(async (req, res) => {
  const blog = new Blog({
    title: 'Blog name',
    content: 'Sample description',
    user: req.user._id,
    image: '/images/sample.jpg',
  });

  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateBlog = asyncHandler(async (req, res) => {
  const {title, content, image} = req.body;

  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.title = title;
    blog.content = content;
    blog.image = image;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopBlog = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({}).limit(3);

  res.json(blogs);
});

export {getBlogs, getBlogById, deleteBlog, createBlog, updateBlog, getTopBlog};
