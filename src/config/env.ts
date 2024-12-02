import { z } from 'zod';

const envSchema = z.object({
  VITE_CLAUDE_API_KEY: z.string().optional(),
});

export const env = envSchema.parse({
  VITE_CLAUDE_API_KEY: import.meta.env.VITE_CLAUDE_API_KEY,
});

export const isConfigured = Boolean(env.VITE_CLAUDE_API_KEY);