import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

// @desc    Fetch all category
// @route   GET /api/category
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  const category = await Category.find({});

  res.json(category);
});

// @desc    Delete a category
// @route   DELETE /api/category/:id
// @access  Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    await category.remove();
    res.json({ message: "Category deleted" });
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

// @desc    Create a category
// @route   POST /api/category
// @access  Private/Admin
const createCategory = asyncHandler(async (req, res) => {
  const category = new Category({
    name: "Sample name",
    description: "Sample description",
    category_key: "sample_key",
  });

  const createdCategory = await category.save();
  res.status(201).json(createdCategory);
});

// @desc    Update a category
// @route   PUT /api/category/:id
// @access  Private/Admin
const updateCategory = asyncHandler(async (req, res) => {
  const { name, description, category_key } = req.body;

  const category = await Category.findById(req.params.id);

  if (category) {
    category.name = name;
    category.description = description;
    category.category_key = name.toLowerCase().replaceAll(" ", "_");

    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

export { getCategories, deleteCategory, createCategory, updateCategory };
