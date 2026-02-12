import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().min(2).max(100),
  role: z.enum(['user', 'admin']),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});

export type User = z.infer<typeof userSchema>;

export const createUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type CreateUser = z.infer<typeof createUserSchema>;
