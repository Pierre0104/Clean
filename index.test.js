import { describe, it, expect } from 'vitest';
import { calculateYamsScore } from './index.js';

describe('Yams Score Calculator', () => {
  it('should return a number', () => {
    const dice = [1, 1, 1, 1, 1];
    expect(typeof calculateYamsScore(dice)).toBe('number');
  });

  it('should return 50 for YAMS', () => {
    const dice = [1, 1, 1, 1, 1];
    expect(calculateYamsScore(dice)).toBe(50);
  });
});