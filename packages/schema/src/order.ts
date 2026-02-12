import { z } from 'zod';

export const orderSchema = z.object({
  id: z.string(),
  userId: z.string(),
  profileId: z.string().optional(),
  productId: z.string(),
  productName: z.string(),
  quantity: z.number().min(1),
  totalAmount: z.number().min(0),
  status: z.enum([
    'pending',
    'paid',
    'encoding',
    'shipped',
    'delivered',
    'cancelled',
  ]),
  purchasePath: z.enum(['quick_buy', 'customize_first']),
  activationToken: z.string().optional(),
  isActivated: z.boolean().default(false),
  shippingAddress: z.object({
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    pinCode: z.string(),
  }),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});

export type Order = z.infer<typeof orderSchema>;

export const createOrderSchema = orderSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type CreateOrder = z.infer<typeof createOrderSchema>;
