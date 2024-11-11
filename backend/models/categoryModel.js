import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  category_key: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
