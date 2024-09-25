import { model, Schema } from 'mongoose';
import { ProductModel, TProduct, TVariants } from './product.interface';

const variantsSchema = new Schema<TVariants>(
  {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  },
);

const productSchema = new Schema<TProduct, ProductModel>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    variants: {
      type: [variantsSchema],
      required: true,
    },
    inventory: {
      quantity: {
        type: Number,
        required: true,
      },
      inStock: {
        type: Boolean,
        required: true,
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  },
);

productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.statics.isProductExist = async (id: string) => {
  const existingProduct = await Product.findOne({
    _id: id,
    isDeleted: { $ne: true },
  });
  return existingProduct;
};

export const Product = model<TProduct, ProductModel>('product', productSchema);
