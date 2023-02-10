import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: Object, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    brand: { type: String, required: false },
    isFeatured: { type: Boolean, required: false },
    quantity: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default ProductModel;
