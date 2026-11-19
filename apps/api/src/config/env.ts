import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
});

export type Env = z.infer<typeof envSchema>;

// Runs once at startup. A bad value throws here, so the app never boots misconfigured.
export function validateEnv(config: Record<string, unknown>): Env {
  return envSchema.parse(config);
}
