import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  promo_price: {
    type: Number,
  },
  images: [
    {
      url: {
        type: String,
      },
    },
  ],

  colors: [
    {
      color: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],

  sizes: [Number],

  category: {
    type: String,
    required: [true, "Please enter product category"],
    enum: {
      values: ["Men", "Women", "Kids"],
      message: "Please select correct category1",
    },
  },
  featured: {
    type: String,
    required: [true, "Please enter if featured Popular Newest Sale"],
  },
  seller: {
    type: String,
    required: [true, "Please enter product seller"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
