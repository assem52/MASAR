import { validateEnv } from './env.js';

describe('validateEnv', () => {
  it('applies defaults when nothing is set', () => {
    expect(validateEnv({})).toEqual({ NODE_ENV: 'development', PORT: 3000 });
  });

  it('converts PORT from a string to a number', () => {
    expect(validateEnv({ PORT: '4000' }).PORT).toBe(4000);
  });

  it('rejects a PORT that is not a number', () => {
    expect(() => validateEnv({ PORT: 'banana' })).toThrow();
  });

  it('rejects an unknown NODE_ENV', () => {
    expect(() => validateEnv({ NODE_ENV: 'staging' })).toThrow();
  });
});
