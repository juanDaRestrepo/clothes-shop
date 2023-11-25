import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '../interfaces';

const productSchema = new Schema({
    description: { type: String, required: true },
    images: [{ type: String }],
    sizes: [{
        name: { type: String, enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'], required: true },
        inStock: { type: Number, required: true, default: 0 }
    }],
    price: { type: Number, required: true, default: 0 },
    slug: { type: String, required: true, unique: true },
    type: { type: String, enum: ['shirts', 'pants', 'hoodies', 'hats'], required: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    gender: { type: String, enum: ['men', 'women', 'kid', 'unisex'], required: true },
}, {
    timestamps: true,
});

productSchema.index({ title: 'text', tags: 'text' });

const Product: Model<IProduct> = mongoose.models.Product || model<IProduct>('Product', productSchema);

export default Product;
