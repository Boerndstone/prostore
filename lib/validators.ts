import {z} from 'zod';
import { formatNumberWithDecimal } from './utils';

const currency = z
    .string()
    .refine(
        (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))), 'Price must have exactly two decimal places!'
    );

// Schema for inserting products
export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters!').max(255),
    slug: z.string().min(3, 'Slug must be at least 3 characters!').max(255),
    category: z.string().min(3, 'Category must be at least 3 characters!').max(255),
    brand: z.string().min(3, 'Brand must be at least 3 characters!').max(255),
    description: z.string().min(3).max(255),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'At least one image is required!'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency,
});