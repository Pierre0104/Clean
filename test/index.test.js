import { describe, it, expect } from 'vitest';
import { calculateYamsScore } from '../src/index.js';

describe('Calculateur de Figure Yams', () => {
  it('devrait retourner un nombre', () => {
    const dice = [1, 1, 1, 1, 1];
    expect(typeof calculateYamsScore(dice)).toBe('number');
  });

  it('devrait identifier un YAMS et retourner 50 points', () => {
    const dice = [1, 1, 1, 1, 1];
    expect(calculateYamsScore(dice)).toBe(50);
  });

  it('devrait identifier un Carré et retourner 35 points', () => {
    const dice = [2, 2, 2, 2, 3];
    expect(calculateYamsScore(dice)).toBe(35);
  });

  it('devrait identifier un Full et retourner 30 points', () => {
    const dice = [3, 3, 3, 4, 4];
    expect(calculateYamsScore(dice)).toBe(30);
  });

  it('devrait identifier une Grande Suite et retourner 40 points', () => {
    const dice = [1, 2, 3, 4, 5];
    expect(calculateYamsScore(dice)).toBe(40);
  });

  it('devrait identifier un Brelan et retourner 28 points', () => {
    const dice = [5, 5, 5, 1, 2];
    expect(calculateYamsScore(dice)).toBe(28);
  });

  it('devrait identifier une Chance et retourner la somme des dés', () => {
    const dice = [1, 2, 3, 4, 6];
    expect(calculateYamsScore(dice)).toBe(16);
  });

  it('devrait identifier la figure avec le plus de points quand plusieurs figures existent', () => {
    const dice = [6, 6, 6, 6, 1]; 
    expect(calculateYamsScore(dice)).toBe(35);
  });
});