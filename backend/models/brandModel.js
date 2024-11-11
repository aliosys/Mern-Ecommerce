import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand_key: {
    type: String,
    required: true,
  },
});

const Brand = mongoose.model("Brand", brandSchema);

export default Brand;
