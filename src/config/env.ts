import { z } from 'zod';

const envSchema = z.object({
  VITE_API_URL: z.string().optional(),
});

export const env = envSchema.parse({
  VITE_API_URL: import.meta.env.VITE_API_URL,
});

export const isConfigured = Boolean(env.VITE_API_URL);