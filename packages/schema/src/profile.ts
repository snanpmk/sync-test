import { z } from 'zod';

export const profileSchema = z.object({
  id: z.string(),
  userId: z.string(),
  type: z.enum(['DigitalCard', 'ReviewStand']),
  name: z.string().min(2).max(100),
  title: z.string().max(100).optional(),
  company: z.string().max(100).optional(),
  bio: z.string().max(500).optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  website: z.string().url().optional(),
  socialLinks: z
    .array(
      z.object({
        platform: z.string(),
        url: z.string().url(),
      })
    )
    .optional(),
  theme: z
    .object({
      primaryColor: z.string().default('#beee02'),
      backgroundColor: z.string().default('#1A1A1A'),
    })
    .optional(),
  isActive: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});

export type Profile = z.infer<typeof profileSchema>;

export const createProfileSchema = profileSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type CreateProfile = z.infer<typeof createProfileSchema>;
