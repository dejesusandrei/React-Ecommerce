import { describe, it, expect } from 'vitest'
import { FormatCurrency } from '../utils/money'

// To run the Test: npx vitest

describe('FormatCurrency Function', () => {
  
  it('Formats 1090 cents to $10.90', () => {
    // 1090 cents = $10.90
    expect(FormatCurrency(1090)).toBe('$10.90');
  });

  it('Formats 1099 cents to $10.99', () => {
    // 1099 cents = $10.99
    expect(FormatCurrency(1099)).toBe('$10.99');
    expect(FormatCurrency(100)).toBe('$1.00');
  });

  it('Rounds up half a cent correctly (1099.5 => $11.00)', () => {
    // Dahil may Math.round() ka, ang 1099.5 cents ay magiging 1100 cents
    expect(FormatCurrency(1099.5)).toBe('$11.00');
  });

  it('0 cents to $0.00', () => {
    // Dahil may Math.round() ka, ang 1099.5 cents ay magiging 1100 cents
    expect(FormatCurrency(0)).toBe('$0.00');
  });

  it('-999 and -100 to -$9.99 and -$1.00', () => {
    // Dahil may Math.round() ka, ang 1099.5 cents ay magiging 1100 cents
    expect(FormatCurrency(-999)).toBe('-$9.99');
    expect(FormatCurrency(-100)).toBe('-$1.00');
  });

});