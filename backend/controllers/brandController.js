import asyncHandler from "express-async-handler";
import Brand from "../models/brandModel.js";

// @desc    Fetch all brands
// @route   GET /api/brands
// @access  Public
const getBrands = asyncHandler(async (req, res) => {
  const brands = await Brand.find({});

  res.json(brands);
});

// @desc    Delete a brand
// @route   DELETE /api/brand/:id
// @access  Private/Admin
const deleteBrand = asyncHandler(async (req, res) => {
  const brand = await Brand.findById(req.params.id);

  if (brand) {
    await brand.remove();
    res.json({ message: "Brand deleted" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create a brand
// @route   POST /api/brands
// @access  Private/Admin
const createBrand = asyncHandler(async (req, res) => {
  const brand = new Brand({
    name: "Sample name",
    description: "Sample description",
    brand_key: "sample_key",
  });

  const createdBrand = await brand.save();
  res.status(201).json(createdBrand);
});

// @desc    Update a brand
// @route   PUT /api/brand/:id
// @access  Private/Admin
const updateBrand = asyncHandler(async (req, res) => {
  const { _id, name, description, brand_key } = req.body;

  const brand = await Brand.findById(_id);

  if (brand) {
    brand.name = name;
    brand.description = description;
    brand.brand_key = brand_key;

    const updatedBrand = await brand.save();
    res.json(updatedBrand);
  } else {
    res.status(404);
    throw new Error("Brand not found");
  }
});

export { getBrands, deleteBrand, createBrand, updateBrand };
