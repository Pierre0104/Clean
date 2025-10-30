import { describe, it, expect } from 'vitest';
import { calculateYamsScore } from './index.js';

describe('Calculateur de Score Yams', () => {
  it('devrait retourner un nombre', () => {
    const dice = [1, 1, 1, 1, 1];
    expect(typeof calculateYamsScore(dice)).toBe('number');
  });

  it('devrait retourner 50 pour un YAMS', () => {
    const dice = [1, 1, 1, 1, 1];
    expect(calculateYamsScore(dice)).toBe(50);
  });

  it('devrait retourner 35 pour un Carré', () => {
    const dice = [2, 2, 2, 2, 3];
    expect(calculateYamsScore(dice)).toBe(35);
  });

  it('devrait retourner 30 pour un Full', () => {
    const dice = [3, 3, 3, 4, 4];
    expect(calculateYamsScore(dice)).toBe(30);
  });

  it('devrait retourner 40 pour une Grande Suite ', () => {
    const dice = [1, 2, 3, 4, 5];
    expect(calculateYamsScore(dice)).toBe(40);
  });

  it('devrait retourner 28 pour un Brelan', () => {
    const dice = [5, 5, 5, 1, 2];
    expect(calculateYamsScore(dice)).toBe(28);
  });

  it('devrait retourner la somme des dés pour Chance', () => {
    const dice = [1, 2, 3, 4, 6];
    expect(calculateYamsScore(dice)).toBe(16);
  });

  it('devrait retourner la figure avec le plus de points quand plusieurs figures existent', () => {
    const dice = [6, 6, 6, 6, 1]; 
    expect(calculateYamsScore(dice)).toBe(35);
  });
});