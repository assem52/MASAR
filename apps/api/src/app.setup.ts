import type { INestApplication } from '@nestjs/common';

export const API_PREFIX = 'api';

// Shared by main.ts and the e2e tests so both serve the same URLs.
export function configureApp(app: INestApplication): void {
  app.setGlobalPrefix(API_PREFIX);
}
